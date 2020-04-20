import { PanelPlugin } from '@grafana/data';
import { WeatherMapOptions, defaults } from './types';
import { WeatherMapPanel } from './WeatherPanel';
import { WeatherMapEditor } from './WeatherEditor';

export const plugin = new PanelPlugin<WeatherMapOptions>(WeatherMapPanel).setDefaults(defaults).setEditor(WeatherMapEditor);
