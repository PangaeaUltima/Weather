import type { AxiosInstance } from "axios"
import type { ApiRequestFunction } from "@/types"

export type CoordsListItem = {
  name: string
  local_names: Record<string, string>,
  lat: number,
  lon: number,
  country: string
  state?: string
}

export type CoordsListParams = {
  q: string
  limit?: string | number
}

export type ListRequestCoordsType = ApiRequestFunction<
  CoordsListParams,
  CoordsListItem[]
>

export default ($api: AxiosInstance) => {
  const coordsList: ListRequestCoordsType = params => $api.get('/geo/1.0/direct', { params })

  return {
    coordsList,
  }
}