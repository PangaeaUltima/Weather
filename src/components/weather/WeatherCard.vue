<script setup lang="ts">
import IconFavorite from '@/components/icon/IconFavorite.vue';
import UiIconButton from '@/components/ui/UiIconButton.vue';
import { useRepo } from '@/composables/useRepo';
import type { ForecastData } from '@/api/forecast';
import type { WeatherData } from '@/api/weather';
import type { Coords } from '@/types';
import { computed, ref, onMounted } from 'vue';
import dayjs from '@/plugins/dayjs'
import { useFavoriteStore } from '@/stores/favorite';

const props = defineProps<{
  coords: Coords
}>()

const favoriteStore = useFavoriteStore()
const { forecastRepo, weatherRepo } = useRepo()

const currentWeather = ref<WeatherData | null>(null)
const forecast = ref<ForecastData | null>(null)

onMounted(() => loadWeather())

const currentDayMaxMin = computed(() => {
  if (!forecast.value) return null

  const currentDayTempArr = forecast.value.list.map(el => el.main.temp)

  return {
    max: Math.max(...currentDayTempArr).toFixed(),
    min: Math.min(...currentDayTempArr).toFixed()
  }
})
const loadWeather = async () => {
  try {
    currentWeather.value = await weatherRepo.weather({ ...props.coords, units: 'metric' })
    forecast.value = await forecastRepo.forecast({ ...props.coords, cnt: 8, units: 'metric' })
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <div
    v-if="currentWeather && forecast"
    class="weather-card card-shadow"
    :class="{ 'favorite' : favoriteStore.isFavorite(coords) }"
  >
    <div class="overall">
      <div class="overall-current-temp">
        <div class="city-name">
          <span>
            {{ forecast.city.name }}
          </span>

          <UiIconButton
            size="24"
            @click="favoriteStore.toggleFavorite(coords)"
          >
            <IconFavorite
              class="icon-favorite"
              :outlined="!favoriteStore.isFavorite(coords)"
            />
          </UiIconButton>
        </div>
       
        <span class="current-temp">
          {{ currentWeather.main.temp.toFixed() }}°
        </span>
      </div>

      <div class="overall-maxmin">
        <div class="wrapper-icon">
          <img
            :src="`https://openweathermap.org/payload/api/media/file/${currentWeather.weather[0]?.icon}.png`"
            alt=""
          >
        </div>

        <span>{{ currentWeather.weather[0]?.main }}</span>

        <span>
          {{ `H:${currentDayMaxMin?.max} L:${currentDayMaxMin?.min}` }}
        </span>
      </div>
    </div>
    
    <div class="divider" />
    <div class="forecast-list">
      <div
        v-for="(item, index) in forecast.list"
        :key="index"
        class="forecast-hour"
      >
        <span>{{ dayjs(item.dt_txt).format('HH') }}</span>

        <div class="wrapper-icon">
          <img
            :src="`https://openweathermap.org/payload/api/media/file/${item.weather[0]?.icon}.png`"
            alt=""
          >
        </div>
        
        <span>{{ item.main.temp.toFixed() }}°</span>
      </div>
    </div>
  </div>
</template>

<style>
.weather-card {
  padding: 16px;
  max-width: 420px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.weather-card .overall {
  display: flex;
  justify-content: space-between;
}

.weather-card .overall-maxmin {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.weather-card .overall-current-temp {
  display: flex;
  flex-direction: column;
}

.weather-card .current-temp {
  font-size: 64px;
}

.weather-card .forecast-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.weather-card .forecast-list .forecast-hour {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.weather-card .wrapper-icon {
  width: 24px;
  height: 24px;
}

.weather-card .wrapper-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.weather-card .city-name {
  display: flex;
  align-items: center;
  gap: 4px;
}

.weather-card.favorite .icon-favorite {
  color: var(--primary);
}
</style>