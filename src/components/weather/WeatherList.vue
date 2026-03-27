<script setup lang="ts">
import WeatherCard from '@/components/weather/WeatherCard.vue';
import type { Coords } from '@/types';

defineProps<{
  citiesCoords: Coords[]
}>()
</script>

<template>
  <div class="weather-list">
    <WeatherCard
      v-for="(coords, index) in citiesCoords"
      :key="index"
      :coords="coords"
    />
  </div>
</template>

<style scoped>
.weather-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
}

@media (max-width: 860px) {
  .weather-list {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }
}

@media (max-width: 540px) {
  .weather-list {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
}
</style>