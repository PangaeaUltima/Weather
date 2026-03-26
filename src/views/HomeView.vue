<script setup lang="ts">
import HomeFieldCity from '@/components/home/HomeFieldCity.vue';
import WeatherList from '@/components/weather/WeatherList.vue';
import { useRepo } from '@/composables/useRepo';
import { ref, onMounted } from 'vue'
import type { Coords } from '@/types';

const { ipRepo } = useRepo()

const citiesCoords = ref<Coords[]>([])

onMounted(() => detectUserCity())

const detectUserCity = async () => {
  try {
    const res = await ipRepo.me()
    citiesCoords.value.push({ lat: res.lat, lon: res.lon })
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