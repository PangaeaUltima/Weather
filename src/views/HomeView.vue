<script setup lang="ts">
import HomeFieldCity from '@/components/home/HomeFieldCity.vue';
import WeatherList from '@/components/weather/WeatherList.vue';
import { useRepo } from '@/composables/useRepo';
import { ref, onMounted } from 'vue'
import type { Coords } from '@/types';
import { useFavoriteStore } from '@/stores/favorite';

const favoritesStore = useFavoriteStore()
const { ipRepo } = useRepo()

const citiesCoords = ref<Coords[]>([...favoritesStore.favorites])

onMounted(() => detectUserCity())

const detectUserCity = async () => {
  try {
    const { latitude, longitude } = await ipRepo.me()
    const elCoordsExist = !!citiesCoords.value.find((el) => el.lat === latitude && el.lon === longitude)

    if (!latitude || !longitude || elCoordsExist) return
    
    citiesCoords.value.push({ lat: latitude, lon: longitude })
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <section class="home-view">
    <div class="container">
      <div class="wrapper">
        <HomeFieldCity v-model="citiesCoords" />

        <WeatherList :cities-coords="citiesCoords" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-view .wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>