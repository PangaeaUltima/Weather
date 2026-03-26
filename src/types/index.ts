export type ApiRequestFunction<TParams, TResult> = (
  params?: TParams
) => Promise<TResult>

export type Coords = { lat: number, lon: number }

export type Units = 
 | 'standard'
 | 'metric'
 | 'imperial'