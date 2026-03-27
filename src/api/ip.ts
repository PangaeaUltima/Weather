import type { AxiosInstance } from "axios"

export type IpData = {
  ipVersion: number
  latitude: number
  longitude: number
  countryName: string
  countryCode: string
  capital: string
  phoneCodes: number[]
  timeZones: string[]
  zipCode: string
  cityName: string
  regionName: string
  regionCode: string | null
  continent: string | null
  continentCode: string | null
  currencies: string[]
  languages: string[]
  asn: string
  asnOrganization: string
  isProxy: boolean
}

export default ($api: AxiosInstance) => {
  return {
    me(): Promise<IpData> {
      return $api.get('/json')
    },
  }
}