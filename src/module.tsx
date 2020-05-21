import { PanelPlugin } from '@grafana/data';
import { WeatherMapOptions, defaults } from './types';
import { WeatherMapPanel } from './WeatherPanel';

export const plugin = new PanelPlugin<WeatherMapOptions>(WeatherMapPanel).setDefaults(defaults).setPanelOptions(builder => {
  return builder.addTextInput({
    path: "apiKey",
    name: "API key",
    description: "OpenWeatherMap API key"
  }).addNumberInput({
    path: "lat",
    name: "Latitude",
    description: "Default latitude"
  }).addNumberInput({
    path: "lon",
    name: "Longitude",
    description: "Default longitude"
  }).addBooleanSwitch({
    path: "wheelZooming",
    name: "Wheel zoom",
    description: "Enable mouse wheele zooming"
  })
});
