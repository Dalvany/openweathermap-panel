import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { WeatherMapOptions } from './types';
import { Map, TileLayer, LayersControl } from 'react-leaflet'
import 'css/worldmap-panel.css'
import 'css/leaflet.css'
import config from "grafana/app/core/config";

const isDarkMode = config.theme.isDark;

const { BaseLayer } = LayersControl

const layers = [
  { label: "Cloud", type: "clouds_new" },
  { label: "Precipitation", type: "precipitation_new" },
  { label: "Pressure", type: "pressure_new" },
  { label: "Wind", type: "wind_new" },
  { label: "Temperature", type: "temp_new" },
]

interface Props extends PanelProps<WeatherMapOptions> { }

export class WeatherMapPanel extends PureComponent<Props> {

  isBlank(str) {
    return (!str || /^\s*$/.test(str));
  }

  render() {
    const { options, height, width, id } = this.props;

    if (this.isBlank(options.apiKey)) {
      return (
        <div className="panel-empty">
          <p>Missing API key. Log on to OpenWeatherMap and generate an API key</p>
        </div>)
    }

    const position = [options.lat, options.lon]

    let url: string = isDarkMode
      ? "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
      : "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"

    return (
      <div id={'mapid_' + id} className="mapcontainer" style={{ height: height, width: width }}>
        <Map zoom={options.zoomLevel}
          center={position}
          style={{ height: height, width: width }}
        >
          <TileLayer
            url={url}
            attribution="&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> &copy; <a href=&quot;http://cartodb.com/attributions&quot;>CartoDB</a>"
          />
          <LayersControl position="topright">
            {layers.map((layer) => {
              return (
                <BaseLayer checked={options.layer === layer.label} name={layer.label}>
                  <TileLayer
                    url="https://tile.openweathermap.org/map/{layerType}/{z}/{x}/{y}.png?appid={apiKey}"
                    attribution="&copy; <a href=&quot;https://openweathermap.org&quot;>OpenWeatherMap</a>"
                    reuseTiles={true}
                    detectRetina={true}
                    apiKey={options.apiKey}
                    layerType={layer.type}
                  />
                </BaseLayer>
              )
            })}
          </LayersControl>
        </Map>
      </div>
    )
  }
}
