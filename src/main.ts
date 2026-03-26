import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.css'
import api from '@/plugins/api'

const app = createApp(App)

app.use(api)
app.use(router)

app.mount('#app')
