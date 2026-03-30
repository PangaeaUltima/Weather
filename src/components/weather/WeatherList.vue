<script setup lang="ts">
import ModalConfirm from '@/components/modal/ModalConfirm.vue';
import WeatherCard from '@/components/weather/WeatherCard.vue';
import type { Coords } from '@/types';
import { useTemplateRef } from 'vue';

const modalConfirm = useTemplateRef('refModalConfirm')

const citiesCoords = defineModel<Coords[]>({ required: true })

const deleteCoords = async (index: number) => {
  if (await modalConfirm.value?.open()) {
    console.log('test');
    
    citiesCoords.value.splice(index, 1)
  }
}
</script>

<template>
  <div class="weather-list">
    <WeatherCard
      v-for="(coords, index) in citiesCoords"
      :key="`${coords.lat}-${coords.lon}`"
      :coords="coords"
      @delete="deleteCoords(index)"
    />
  </div>
  <ModalConfirm
    ref="refModalConfirm"
    close-on-overlay
  />
</template>

<style scoped>
.weather-list {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
}

@media (max-width: 1160px) {
  .weather-list {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }
}

@media (max-width: 760px) {
  .weather-list {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
}
</style>
