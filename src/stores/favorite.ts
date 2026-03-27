import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { Coords } from '@/types'

export const useFavoriteStore = defineStore('favorites', () => {
  const favorites = useStorage<Coords[]>('favorites', [], localStorage)
  const isSameCoords = (left: Coords, right: Coords) => left.lat === right.lat && left.lon === right.lon

  const isFavorite = (coords: Coords) => favorites.value.some((item) => isSameCoords(item, coords))

  const toggleFavorite = (coords: Coords) => {
    const index = favorites.value.findIndex((item) => isSameCoords(item, coords))

    if (index !== -1) {
      favorites.value.splice(index, 1)
      return
    }

    favorites.value.push(coords)
  }

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  }
})
