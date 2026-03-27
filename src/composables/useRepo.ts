import type { AxiosInstance } from "axios"
import { inject } from "vue"
import forecast from "@/api/forecast"
import geo from "@/api/geo"
import ip from "@/api/ip"
import weather from "@/api/weather"

export const useRepo = () => {
  const ipApi = inject('ipApi')
  const weatherApi = inject('weatherApi')  

  return {
    forecastRepo: forecast(weatherApi as AxiosInstance),
    geoRepo: geo(weatherApi as AxiosInstance),
    ipRepo: ip(ipApi as AxiosInstance),
    weatherRepo: weather(weatherApi as AxiosInstance)
  }
}