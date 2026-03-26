import type { AxiosInstance } from "axios"

export type IpData = {
  query: string
  status: string
  country: string
  countryCode: string
  region: string
  regionName: string
  city: string
  zip: string
  lat: number
  lon: number
  timezone: string
  isp: string
  org: string
  as: string
}

export default ($api: AxiosInstance) => {
  return {
    me(): Promise<IpData> {
      return $api.get('/json/')
    },
  }
}