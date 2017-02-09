'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _metricsGraphics = require('metrics-graphics');

var _metricsGraphics2 = _interopRequireDefault(_metricsGraphics);

var MG_ALLOWED_OPTIONS = ['axes_not_compact', 'european_clock', 'inflator', 'max_x', 'max_y', 'min_x', 'min_y', 'min_y_from_data', 'missing_text', 'show_missing_background', 'show_year_markers', 'show_years', 'show_secondary_x_label', 'small_text', 'xax_count', 'xax_format', 'x_axis', 'x_extended_ticks', 'x_label', 'x_scale_type', 'xax_start_at_min', 'xax_tick_length', 'xax_units', 'y_axis', 'y_extended_ticks', 'y_label', 'y_scale_type', 'yax_count', 'yax_format', 'yax_tick_length', 'yax_units', 'yax_units_append', 'aggregate_rollover', 'animate_on_load', 'area', 'baselines', 'chart_type', 'custom_line_color_map', 'decimals', 'error', 'format', 'full_height', 'full_width', 'interpolate', 'interpolate_tension', 'legend', 'legend_target', 'linked', 'linked_format', 'list', 'markers', 'max_data_size', 'mouseover', 'mousemove', 'mouseout', 'point_size', 'rollover_callback', 'show_confidence_band', 'show_rollover_text', 'show_tooltips', 'target', 'transition_on_update', 'x_rollover_format', 'x_rug', 'y_rollover_format', 'y_rug', 'data', 'missing_is_zero', 'missing_is_hidden', 'missing_is_hidden_accessor', 'utc_time', 'x_accessor', 'x_sort', 'y_accessor', 'buffer', 'bottom', 'center_title_full_width', 'height', 'left', 'right', 'small_height_threshold', 'small_width_threshold', 'top', 'width', 'color_accessor', 'color_range', 'color_type', 'point_size', 'size_accessor', 'size_range', 'lowess', 'ls', 'bar_margin', 'binned', 'bins', 'bar_height', 'bar_orientation', 'baseline_accessor', 'binned', 'dodge_accessor', 'outer_padding_percentage', 'padding_percentage', 'predictor_accessor', 'truncate_x_labels', 'truncate_y_labels', 'rotate_x_labels', 'rotate_y_labels'];
function getMGOptions(props) {
	var mgOptions = {},
	    x,
	    p;
	for (x = MG_ALLOWED_OPTIONS.length - 1; x >= 0; x--) {
		p = MG_ALLOWED_OPTIONS[x];
		if (props.hasOwnProperty(p)) {
			mgOptions[p] = props[p];
		}
	}
	return mgOptions;
}

var MetricsGraphics = (function (_React$Component) {
	_inherits(MetricsGraphics, _React$Component);

	function MetricsGraphics(props) {
		_classCallCheck(this, MetricsGraphics);

		_get(Object.getPrototypeOf(MetricsGraphics.prototype), 'constructor', this).call(this, props);
		this.mgData = {};
	}

	_createClass(MetricsGraphics, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mgData = _extends(this.mgData, getMGOptions(this.props));
			if (this.mgData.target) {
				if (!this.props.xax_format) {
					delete this.mgData.xax_format;
				}
				_metricsGraphics2['default'].data_graphic(this.mgData);
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.mgData = _extends(this.mgData, getMGOptions(nextProps));
			if (this.mgData.target && !nextProps.xax_format) {
				delete this.mgData.xax_format;
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (this.mgData.target) {
				_metricsGraphics2['default'].data_graphic(this.mgData);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;
			return _react2['default'].createElement('div', { className: 'metricsGraphicsCon', ref: function (c) {
					if (c != null) _this.mgData.target = c;
				} });
		}
	}]);

	return MetricsGraphics;
})(_react2['default'].Component);

exports['default'] = MetricsGraphics;

MetricsGraphics.propTypes = {
	aggregate_rollover: _react2['default'].PropTypes.any, //links the lines in a multi-line graphic
	animate_on_load: _react2['default'].PropTypes.any, //determines whether lines are transitioned on first-load
	area: _react2['default'].PropTypes.any, //determines whether to fill the area below the line
	axes_not_compact: _react2['default'].PropTypes.any, //determines whether to draw compact or non-compact axes
	bar_height: _react2['default'].PropTypes.any, //bar height in pixels
	bar_margin: _react2['default'].PropTypes.any, //the margin between bars
	bar_orientation: _react2['default'].PropTypes.any, //determines whether to show a vertical or horizontal barplot
	baseline_accessor: _react2['default'].PropTypes.any, //the data element to map the baseline component to
	baselines: _react2['default'].PropTypes.any, //horizontal lines that indicate, say, goals.
	binned: _react2['default'].PropTypes.any, //determines whether the data is already binned
	binned: _react2['default'].PropTypes.any, //specifies whether the histogram data is already binned
	bins: _react2['default'].PropTypes.any, //the number of bins to use
	bottom: _react2['default'].PropTypes.any, //the size of the bottom margin
	buffer: _react2['default'].PropTypes.any, //the padding around the graphic
	center_title_full_width: _react2['default'].PropTypes.any, //center title over entire graph
	chart_type: _react2['default'].PropTypes.any, //{line, histogram, point, missing-data}
	color_accessor: _react2['default'].PropTypes.any, //the data element to use to map points to colors
	color_range: _react2['default'].PropTypes.any, //the range used to color different groups of points
	color_type: _react2['default'].PropTypes.any, //specifies whether the color scale is quantitative or qualitative
	custom_line_color_map: _react2['default'].PropTypes.any, //maps an arbitrary set of lines to colors
	data: _react2['default'].PropTypes.any, //the data object
	decimals: _react2['default'].PropTypes.any, //the number of decimals to show in a rollover
	dodge_accessor: _react2['default'].PropTypes.any, //the data element to map the dodge component to
	error: _react2['default'].PropTypes.any, //does the graphic have an error that we want to communicate to users
	european_clock: _react2['default'].PropTypes.any, //determines whether to show labels using a 24-hour clock
	format: _react2['default'].PropTypes.any, //the format of the data object (count or percentage)
	full_height: _react2['default'].PropTypes.any, //sets height to that of the parent, adjusts dimensions on window resize
	full_width: _react2['default'].PropTypes.any, //sets width to that of the parent, adjusts dimensions on window resize
	height: _react2['default'].PropTypes.any, //the graphic's height
	inflator: _react2['default'].PropTypes.any, //a multiplier for inflating max_x and max_y
	interpolate: _react2['default'].PropTypes.any, //the interpolation function to use for rendering lines
	interpolate_tension: _react2['default'].PropTypes.any, //increase the tension to fix artifacts when your data is irregular
	left: _react2['default'].PropTypes.any, //the size of the left margin
	legend: _react2['default'].PropTypes.any, //an array of literals used to label lines
	legend_target: _react2['default'].PropTypes.any, //the DOM element to insert the legend in
	linked: _react2['default'].PropTypes.any, //used to link multiple graphics together
	linked_format: _react2['default'].PropTypes.any, //specifies the format of linked rollovers
	list: _react2['default'].PropTypes.any, //automatically maps the data to x and y accessors
	lowess: _react2['default'].PropTypes.any, //specifies whether to show a lowess line of best-fit
	ls: _react2['default'].PropTypes.any, //specifies whether to show a least-squares line of best-fit
	markers: _react2['default'].PropTypes.any, //vertical lines that indicate, say, milestones
	max_data_size: _react2['default'].PropTypes.any, //for use with custom_line_color_map
	max_x: _react2['default'].PropTypes.any, //the maximum x-value
	max_y: _react2['default'].PropTypes.any, //the maximum y-value
	min_x: _react2['default'].PropTypes.any, //the minimum x-value
	min_y: _react2['default'].PropTypes.any, //the minimum y-value
	min_y_from_data: _react2['default'].PropTypes.any, //starts y-axis at data's minimum value
	missing_is_hidden: _react2['default'].PropTypes.any, //show missing observations as missing line segments
	missing_is_hidden_accessor: _react2['default'].PropTypes.any, //the accessor for identifying observations as missing
	missing_is_zero: _react2['default'].PropTypes.any, //assume missing observations are zero
	missing_text: _react2['default'].PropTypes.any, //The text to display for missing graphics
	mousemove: _react2['default'].PropTypes.any, //custom rollover function
	mouseout: _react2['default'].PropTypes.any, //custom rollover function
	mouseover: _react2['default'].PropTypes.any, //custom rollover function
	outer_padding_percentage: _react2['default'].PropTypes.any, //outer_padding_percentage
	padding_percentage: _react2['default'].PropTypes.any, //padding_percentage
	point_size: _react2['default'].PropTypes.any, //the radius of the dots in the scatterplot
	point_size: _react2['default'].PropTypes.any, //the radius of the dot that appears over an active data point
	predictor_accessor: _react2['default'].PropTypes.any, //the data element to map the predictor component to
	right: _react2['default'].PropTypes.any, //the size of the right margin
	rollover_callback: _react2['default'].PropTypes.any, //custom rollover function
	rotate_x_labels: _react2['default'].PropTypes.any, //The number of degrees to rotate the x-axis' labels.
	rotate_y_labels: _react2['default'].PropTypes.any, //The number of degrees to rotate the y-axis' labels.
	show_confidence_band: _react2['default'].PropTypes.any, //determines whether to show a confidence band
	show_missing_background: _react2['default'].PropTypes.any, //Displays a background for missing graphics
	show_rollover_text: _react2['default'].PropTypes.any, //determines whether to show text for a data point on rollover
	show_secondary_x_label: _react2['default'].PropTypes.any, //determines whether to show years along the x-axis
	show_tooltips: _react2['default'].PropTypes.any, //determines whether to display descriptions in tooltips
	show_year_markers: _react2['default'].PropTypes.any, //determines whether to show year markers along the x-axis
	show_years: _react2['default'].PropTypes.any, //determines whether to show years along the x-axis
	size_accessor: _react2['default'].PropTypes.any, //should point sizes be mapped to data
	size_range: _react2['default'].PropTypes.any, //the range of point sizes
	small_height_threshold: _react2['default'].PropTypes.any, //maximum height for a small graphic
	small_text: _react2['default'].PropTypes.any, //coerces small text regardless of graphic size
	small_width_threshold: _react2['default'].PropTypes.any, //maximum width for a small graphic
	target: _react2['default'].PropTypes.any, //the DOM element to insert the graphic in
	top: _react2['default'].PropTypes.any, //the size of the top margin
	transition_on_update: _react2['default'].PropTypes.any, //gracefully transitions the lines on data change
	truncate_x_labels: _react2['default'].PropTypes.any, //truncate_x_labels
	truncate_y_labels: _react2['default'].PropTypes.any, //truncate_y_labels
	utc_time: _react2['default'].PropTypes.any, //determines whether to use a UTC or local time scale
	width: _react2['default'].PropTypes.any, //the graphic's width
	x_accessor: _react2['default'].PropTypes.any, //the data element that's the x-accessor
	x_axis: _react2['default'].PropTypes.any, //determines whether to display the x-axis
	x_extended_ticks: _react2['default'].PropTypes.any, //determines whether to extend the x-axis ticks across the chart
	x_label: _react2['default'].PropTypes.any, //the label to show below the x-axis
	x_rollover_format: _react2['default'].PropTypes.any, //a function or string that formats the y accessor's rollover text
	x_rug: _react2['default'].PropTypes.any, //show a rug plot along the x-axis
	x_scale_type: _react2['default'].PropTypes.any, //the x-axis scale type
	x_sort: _react2['default'].PropTypes.any, //determines whether to sort the x-axis' values
	xax_count: _react2['default'].PropTypes.any, //the number of x-axis ticks
	xax_format: _react2['default'].PropTypes.any, //a function that formats the x-axis' labels
	xax_start_at_min: _react2['default'].PropTypes.any, //starts the x-axis from the left-most edge
	xax_tick_length: _react2['default'].PropTypes.any, //the x-axis' tick length in pixels
	xax_units: _react2['default'].PropTypes.any, //a prefix symbol to be shown alongside the x-axis' labels
	y_accessor: _react2['default'].PropTypes.any, //the data element that's the y-accessor
	y_axis: _react2['default'].PropTypes.any, //determines whether to display the y-axis
	y_extended_ticks: _react2['default'].PropTypes.any, //determines whether to extend the y-axis ticks across the chart
	y_label: _react2['default'].PropTypes.any, //the label to show beside the y-axis
	y_rollover_format: _react2['default'].PropTypes.any, //a function or string that formats the y accessor's rollover text
	y_rug: _react2['default'].PropTypes.any, //show a rug plot along the y-axis
	y_scale_type: _react2['default'].PropTypes.any, //the y-axis scale type
	yax_count: _react2['default'].PropTypes.any, //the number of y-axis ticks
	yax_format: _react2['default'].PropTypes.any, //a function that formats the y-axis' labels
	yax_tick_length: _react2['default'].PropTypes.any, //the y-axis' tick length in pixels
	yax_units: _react2['default'].PropTypes.any, //a prefix symbol to be shown alongside the y-axis' labels
	yax_units_append: _react2['default'].PropTypes.any };
module.exports = exports['default'];
//determines whether to append rather than prepend units