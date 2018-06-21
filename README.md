# MetricsGraphics React Component

__A react component thats wraps the popular visualization library, [MetricsGraphics.js](https://github.com/metricsgraphics/metrics-graphics)__

[![npm](https://img.shields.io/npm/l/react-metrics-graphics.svg?maxAge=2592000&rt=4)](https://github.com/metricsgraphics/react-metrics-graphics)
[![npm](https://img.shields.io/npm/v/react-metrics-graphics.svg?maxAge=2592000&rt=4)](https://www.npmjs.com/package/react-metrics-graphics)
[![Build Status](https://travis-ci.org/mozilla/react-metrics-graphics.png?branch=master)](https://travis-ci.org/metricsgraphics/react-metrics-graphics)

## Demo & Examples

Live demo: [metricsgraphics.github.io/react-metrics-graphics](http://metricsgraphics.github.io/react-metrics-graphics/)


## Installation

The currently supported path to using `react-metrics-graphics` is as a dependency that you then compile into your application
via the React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

Via npm:
```
npm install react-metrics-graphics --save
```

Via yarn:
```
yarn add react-metrics-graphics
```

## Usage

__Simply add the react component MetricsGraphics, and pass it any number of the [standard MetricGraphics.js options](https://github.com/metricsgraphics/metrics-graphics/wiki/List-of-Options/80e9459ecb80f001ccbaec5cc58e7ca37a8851cc) as component attributes__

```jsx
import MetricsGraphics from 'react-metrics-graphics';
import 'metrics-graphics/dist/metricsgraphics.css';

<MetricsGraphics
	title="Downloads"
	description="This graphic shows a time-series of downloads."
	data={ [{'date':new Date('2014-11-01'),'value':12}, {'date':new Date('2014-11-02'),'value':18}] }
	width={600}
	height={250}
	x_accessor="date"
	y_accessor="value"
/>
```

### Properties

* aggregate_rollover - links the lines in a multi-line graphic
* animate_on_load - determines whether lines are transitioned on first-load
* area - determines whether to fill the area below the line
* axes_not_compact - determines whether to draw compact or non-compact axes
* bar_height - bar height in pixels
* bar_margin - the margin between bars
* bar_orientation - determines whether to show a vertical or horizontal barplot
* baseline_accessor - the data element to map the baseline component to
* baselines - horizontal lines that indicate, say, goals.
* binned - determines whether the data is already binned
* binned - specifies whether the histogram data is already binned
* bins - the number of bins to use
* bottom - the size of the bottom margin
* buffer - the padding around the graphic
* center_title_full_width - center title over entire graph
* chart_type - {line, histogram, point, missing-data}
* color_accessor - the data element to use to map points to colors
* color_range - the range used to color different groups of points
* color_type - specifies whether the color scale is quantitative or qualitative
* custom_line_color_map - maps an arbitrary set of lines to colors
* data - the data object
* decimals - the number of decimals to show in a rollover
* description - description of the graphic, shown on hover over of the title
* dodge_accessor - the data element to map the dodge component to
* error - does the graphic have an error that we want to communicate to users
* european_clock - determines whether to show labels using a 24-hour clock
* format - the format of the data object (count or percentage)
* full_height - sets height to that of the parent, adjusts dimensions on window resize
* full_width - sets width to that of the parent, adjusts dimensions on window resize
* height - the graphic's height
* inflator - a multiplier for inflating max_x and max_y
* interpolate - the interpolation function to use for rendering lines
* interpolate_tension - increase the tension to fix artifacts when your data is irregular
* left - the size of the left margin
* legend - an array of literals used to label lines
* legend_target - the DOM element to insert the legend in
* linked - used to link multiple graphics together
* linked_format - specifies the format of linked rollovers
* list - automatically maps the data to x and y accessors
* lowess - specifies whether to show a lowess line of best-fit
* ls - specifies whether to show a least-squares line of best-fit
* markers - vertical lines that indicate, say, milestones
* max_data_size - for use with custom_line_color_map
* max_x - the maximum x-value
* max_y - the maximum y-value
* min_x - the minimum x-value
* min_y - the minimum y-value
* min_y_from_data - starts y-axis at data's minimum value
* missing_is_hidden - show missing observations as missing line segments
* missing_is_hidden_accessor - the accessor for identifying observations as missing
* missing_is_zero - assume missing observations are zero
* missing_text - The text to display for missing graphics
* mousemove - custom rollover function
* mouseout - custom rollover function
* mouseover - custom rollover function
* outer_padding_percentage
* padding_percentage
* point_size - the radius of the dot that appears over an active data point
* point_size - the radius of the dots in the scatterplot
* predictor_accessor - the data element to map the predictor component to
* right - the size of the right margin
* rollover_callback (deprecated) - custom rollover function
* rotate_x_labels - The number of degrees to rotate the x-axis' labels.
* rotate_y_labels - The number of degrees to rotate the y-axis' labels.
* show_confidence_band - determines whether to show a confidence band
* show_missing_background - Displays a background for missing graphics
* show_rollover_text - determines whether to show text for a data point on rollover
* show_secondary_x_label - determines whether to show years along the x-axis
* show_tooltips - determines whether to display descriptions in tooltips
* show_year_markers - determines whether to show year markers along the x-axis
* show_years (deprecated) - determines whether to show years along the x-axis
* size_accessor - should point sizes be mapped to data
* size_range - the range of point sizes
* small_height_threshold - maximum height for a small graphic
* small_text (deprecated) - coerces small text regardless of graphic size
* small_width_threshold - maximum width for a small graphic
* target - the DOM element to insert the graphic in
* title - title of the graphic
* top - the size of the top margin
* transition_on_update - gracefully transitions the lines on data change
* truncate_x_labels
* truncate_y_labels
* utc_time - determines whether to use a UTC or local time scale
* width - the graphic's width
* x_accessor - the data element that's the x-accessor
* x_axis - determines whether to display the x-axis
* x_extended_ticks - determines whether to extend the x-axis ticks across the chart
* x_label - the label to show below the x-axis
* x_rollover_format - a function or string that formats the y accessor's rollover text
* x_rug - show a rug plot along the x-axis
* x_scale_type - the x-axis scale type
* x_sort - determines whether to sort the x-axis' values
* xax_count - the number of x-axis ticks
* xax_format - a function that formats the x-axis' labels
* xax_start_at_min (deprecated) - starts the x-axis from the left-most edge
* xax_tick_length - the x-axis' tick length in pixels
* xax_units - a prefix symbol to be shown alongside the x-axis' labels
* y_accessor - the data element that's the y-accessor
* y_axis - determines whether to display the y-axis
* y_extended_ticks - determines whether to extend the y-axis ticks across the chart
* y_label - the label to show beside the y-axis
* y_rollover_format - a function or string that formats the y accessor's rollover text
* y_rug - show a rug plot along the y-axis
* y_scale_type - the y-axis scale type
* yax_count - the number of y-axis ticks
* yax_format - a function that formats the y-axis' labels
* yax_tick_length - the y-axis' tick length in pixels
* yax_units - a prefix symbol to be shown alongside the y-axis' labels
* yax_units_append - determines whether to append rather than prepend units

## Development

To build the example locally, run:

```bash
yarn install
yarn start
```

Then open [`localhost:5000`](http://localhost:5000) in a browser.

## License

The MIT License (MIT)
Copyright (c) 2016 Carter Feldman, http://carter.at/
Copyright (c) 2017-2018 Mozilla

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
