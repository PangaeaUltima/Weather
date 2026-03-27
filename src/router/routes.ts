import type { RouteRecordRaw } from "vue-router"
import FavoritesView from "@/views/FavoritesView.vue"
import HomeView from "@/views/HomeView.vue"
import DefaultLayout from "@/layouts/DefaultLayout.vue"

export default [
  {
    path: '/', 
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView
      },
      {
        path: '/favorites',
        name: 'Favorites',
        component: FavoritesView,
      }
    ]
  }
] as RouteRecordRaw[]