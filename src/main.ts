import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.css'
import api from '@/plugins/api'
import i18n from '@/plugins/i18n'

const pinia = createPinia()
const app = createApp(App)

app.use(api)
app.use(i18n)
app.use(pinia)
app.use(router)

app.mount('#app')
