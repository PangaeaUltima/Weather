import type { AxiosInstance } from "axios"
import type { Units } from "@/types"

export type WeatherParams = {
  lat: number
  lon: number
  units?: Units
}

export type WeatherItem = {
  id: number
  main: string
  description: string
  icon: string
}

export type WeatherData = {
  coord: {
    lon: number
    lat: number
  },
  weather: WeatherItem[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  },
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  },
  rain: {
    '1h': number
  },
  clouds: {
    all: number
  },
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  },
  timezone: number
  id: number
  name: string
  cod: number
}

export default ($api: AxiosInstance) => {
  return {
    weather(params: WeatherParams): Promise<WeatherData> {
      return $api.get('/data/2.5/weather', { params })
    }
  }
}