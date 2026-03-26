import type { AxiosInstance } from "axios"
import type { Coords, Units } from "@/types"
import type { WeatherItem } from "./weather"

export type ForecastListItem = {
  dt: number
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
  },
  weather: WeatherItem[],
  clouds: {
    all: number
  },
  wind: {
    speed: number
    deg: number
    gust: number
  },
  visibility: number
  pop: number
  rain: {
    '1h': number
  },
  sys: {
    pod: string
  },
  dt_txt: string
}

export type ForecastData = {
  cod: string
  message: number
  cnt: number
  list: ForecastListItem[]
  city: {
    id: number
    name: string
    coord: Coords,
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
  }
}

export type ForecastParams = {
  lat: number
  lon: number
  cnt?: string | number
  units?: Units
}

export default ($api: AxiosInstance) => {
  return {
    forecast(params: ForecastParams): Promise<ForecastData> {
      return $api.get('/data/2.5/forecast', { params })
    },
  }
}