<script setup lang="ts">
import WeatherList from '@/components/weather/WeatherList.vue';
import { useFavoriteStore } from '@/stores/favorite';

const { favorites } = useFavoriteStore()
</script>

<template>
  <section class="favorites-view">
    <div class="container">
      <WeatherList :cities-coords="favorites" />
    </div>
  </section>
</template>