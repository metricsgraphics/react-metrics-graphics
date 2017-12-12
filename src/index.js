import React from 'react';
import { render } from 'react-dom';
import MetricsGraphics from './components/MetricsGraphics.js';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'metrics-graphics/dist/metricsgraphics.css';

const root = document.getElementById('root');

const data = [
  {'date': new Date('2014-01-01'), 'value': 100 },
  {'date': new Date('2015-01-01'), 'value': 200 },
  {'date': new Date('2016-01-01'), 'value': 250 },
  {'date': new Date('2017-01-01'), 'value': 200 },
];

render((
  <MetricsGraphics
  title="Line Chart"
  description="This is a simple line chart."
  data={data}
  width={600}
  height={200}
  right={40}
  x_accessor="date"
  y_accessor="value" />
), root);
