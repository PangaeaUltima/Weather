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
  grid-gap: 16px 32px;
}
</style>