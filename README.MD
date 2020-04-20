# OpenWeatherMap grafana panel

Panel displaying [CartoDB](https://carto.com/attribution) maps and OpenWeatherMap's maps using [weathermap api v1](https://openweathermap.org/api/weathermaps).  
It requires an API key.

# Configuration

-   API key : OpenWeatherMap API apiKey
-   lat, lon : coordinate where the panel point when loaded

# Installation

Download the latest release, unzip in grafana plugin directory and rename the folder dalvany-openweathermap-panel.  
For docker, use GF_INSTALL_PLUGINS environment, eg : `GF_INSTALL_PLUGINS: https://github.com/Dalvany/openweathermap-panel/archive/v1.0.0.zip;dalvany-openweathermap-panel`

# Screenshot

![screenshot](https://github.com/Dalvany/openweathermap-panel/raw/master/src/images/screenshot.png)

# TODO

-   start zoom level configurable
-   try to save in options the layer displayed -> baselayerchange ?
-   display color legend for each openweathermap layers ?
-   configure what layers are available ?

# Credits

Leaflet CSS is from [leaflet](https://github.com/Leaflet/Leaflet) under BSD 2-Clause "Simplified" License  
worldmap-panel CSS is from grafana's [WorldMap-Panel](https://github.com/grafana/worldmap-panel) and under MIT license  
Layer icon was found [here](https://www.iconfinder.com/icons/2561455/layers_icon) and is under MIT license.  
Marker icon was found [here](https://www.iconfinder.com/icons/2639858/marker_icon) and is under WTFPL license.
