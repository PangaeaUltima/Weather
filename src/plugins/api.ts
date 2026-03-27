import type { App } from 'vue';

import axios from 'axios'

const ipApi = axios.create({
  baseURL: 'https://free.freeipapi.com/api/',
})

const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/',
  params: {
    appid: 'ca378def50a182951b643347d2612ee4'
  },
})

ipApi.interceptors.response.use((response) => response.data)
weatherApi.interceptors.response.use((response) => response.data)

export default {
  install: (app: App) => {
    app.provide('ipApi', ipApi)
    app.provide('weatherApi', weatherApi);
  }
};
