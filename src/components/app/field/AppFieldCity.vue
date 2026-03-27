<script setup lang="ts">
import UiAutocomplete from '@/components/ui/UiAutocomplete.vue';
import { useRepo } from '@/composables/useRepo';
import { computed, ref, watch } from 'vue'
import type { CoordsListItem } from '@/api/geo';
import { useDebounceFn } from '@vueuse/core';
import type { Coords } from '@/types';

const { geoRepo } = useRepo()

const model = defineModel<Coords | null>({ default: null })

const items = ref<CoordsListItem[]>([])
const search = ref<string | null>(null)

const autocompleteItems = computed(() => items.value.map((el) => 
  ({ label: `${el.name}${el.state ? ', ' + el.state : ''}`, value: { lat: el.lat, lon: el.lon } })))

const loadData = useDebounceFn(async () => {
  if (!search.value) return

  try {
    const res = await geoRepo.coordsList({ limit: 5, q: search.value })

    items.value = res
  } catch (e) {
    console.error(e)
  }
}, 400)

watch(search, () => loadData())

defineExpose({
  clearSearch: () => search.value = null
})
</script>

<template>
  <UiAutocomplete
    v-model="model"
    v-model:search="search"
    :items="autocompleteItems"
    item-label="label"
    item-value="value"
  />
</template>