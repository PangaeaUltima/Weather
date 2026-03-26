import type { RouteRecordRaw } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import DefaultLayout from "@/layouts/DefaultLayout.vue"

// export default [
//   {
//     path: '/', 
//     name: 'Home',
//     component: HomeView,
//     meta: { layout: 'DefaultLayout' },
//   }
// ] as RouteRecordRaw[]

export default [
  {
    path: '/', 
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView
      }
    ]
  }
] as RouteRecordRaw[]