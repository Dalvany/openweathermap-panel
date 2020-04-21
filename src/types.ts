export interface WeatherMapOptions {
  apiKey?: string,
  zoomLevel: number,
  lat: number,
  lon: number,
  layer: string,
  wheelZooming: boolean,
}

export const defaults: WeatherMapOptions = {
  zoomLevel: 5,
  lat: 48.8534,
  lon: 2.3488,
  layer: "Cloud",
  wheelZooming: true
}
