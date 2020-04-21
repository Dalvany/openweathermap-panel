import React, { PureComponent } from 'react';
import { FormField, PanelOptionsGroup } from '@grafana/ui';
import { PanelEditorProps, SelectableValue } from '@grafana/data';

import { WeatherMapOptions } from './types';

export class WeatherMapEditor extends PureComponent<PanelEditorProps<WeatherMapOptions>> {
  onApiKeyChange = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, apiKey: target.value });
  };

  onLatChange = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, lat: target.value });
  };

  onLonChange = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, lon: target.value });
  };

  render() {
    const { options } = this.props

    const v: SelectableValue<number>[] = []
    for (let i = 0; i <= 18; i++) {
      v.push({
        label: i.toString(),
        value: i
      })
    }
    return (
      <PanelOptionsGroup title="General">
        <FormField label="API key"
          labelWidth={9}
          inputWidth={30}
          tooltip="OpenWeatherMap API key"
          type="text"
          onChange={this.onApiKeyChange}
          value={options.apiKey} />
        <FormField label="Latitude"
          labelWidth={9}
          inputWidth={30}
          tooltip="Default latitude"
          type="number"
          onChange={this.onLatChange}
          value={options.lat} />
        <FormField label="Longitude"
          labelWidth={9}
          inputWidth={30}
          tooltip="Default longitude"
          type="number"
          onChange={this.onLonChange}
          value={options.lon} />
      </PanelOptionsGroup>
    );
  }
}
