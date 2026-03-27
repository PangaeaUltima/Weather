<script setup lang="ts">
import AppFieldCity from '@/components/app/field/AppFieldCity.vue';
import UiButton from '@/components/ui/UiButton.vue';
import type { Coords } from '@/types';
import { ref, useTemplateRef } from 'vue'

const fieldCity = useTemplateRef('refFieldCity')

const citiesCoords = defineModel<Coords[]>({ default: [] })

const selectedCity = ref<Coords | null>(null)

const addCity = () => {
  const cityAlreadyExist = !!citiesCoords.value.find(el => el.lat === selectedCity.value?.lat && el.lon === selectedCity.value?.lon)

  if (!selectedCity.value || cityAlreadyExist) return

  citiesCoords.value.push(selectedCity.value)
  selectedCity.value = null
  fieldCity.value?.clearSearch()
}
</script>

<template>
  <div class="home-field-city">
    <AppFieldCity
      ref="refFieldCity"
      v-model="selectedCity"
      class="app-field-city"
    />
          
    <UiButton @click="addCity">
      +
    </UiButton>
  </div>
</template>

<style scoped>
.home-field-city .app-field-city {
  align-self: flex-start;
  min-width: 240px;
}

.home-field-city {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}
</style>