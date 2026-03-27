import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.css'
import api from '@/plugins/api'

const pinia = createPinia()
const app = createApp(App)

app.use(api)
app.use(pinia)
app.use(router)

app.mount('#app')
