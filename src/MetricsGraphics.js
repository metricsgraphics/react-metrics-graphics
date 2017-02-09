import React from 'react';
import MG from 'metrics-graphics';

const MG_ALLOWED_OPTIONS=['axes_not_compact', 'european_clock', 'inflator', 'max_x', 'max_y', 'min_x', 'min_y', 'min_y_from_data', 'missing_text', 'show_missing_background', 'show_year_markers', 'show_years', 'show_secondary_x_label', 'small_text', 'xax_count', 'xax_format', 'x_axis', 'x_extended_ticks', 'x_label', 'x_scale_type', 'xax_start_at_min', 'xax_tick_length', 'xax_units', 'y_axis', 'y_extended_ticks', 'y_label', 'y_scale_type', 'yax_count', 'yax_format', 'yax_tick_length', 'yax_units', 'yax_units_append', 'aggregate_rollover', 'animate_on_load', 'area', 'baselines', 'chart_type', 'custom_line_color_map', 'decimals', 'error', 'format', 'full_height', 'full_width', 'interpolate', 'interpolate_tension', 'legend', 'legend_target', 'linked', 'linked_format', 'list', 'markers', 'max_data_size', 'mouseover', 'mousemove', 'mouseout', 'point_size', 'rollover_callback', 'show_confidence_band', 'show_rollover_text', 'show_tooltips', 'target', 'transition_on_update', 'x_rollover_format', 'x_rug', 'y_rollover_format', 'y_rug', 'data', 'missing_is_zero', 'missing_is_hidden', 'missing_is_hidden_accessor', 'utc_time', 'x_accessor', 'x_sort', 'y_accessor', 'buffer', 'bottom', 'center_title_full_width', 'height', 'left', 'right', 'small_height_threshold', 'small_width_threshold', 'top', 'width', 'color_accessor', 'color_range', 'color_type', 'point_size', 'size_accessor', 'size_range', 'lowess', 'ls', 'bar_margin', 'binned', 'bins', 'bar_height', 'bar_orientation', 'baseline_accessor', 'binned', 'dodge_accessor', 'outer_padding_percentage', 'padding_percentage', 'predictor_accessor', 'truncate_x_labels', 'truncate_y_labels', 'rotate_x_labels', 'rotate_y_labels'];
function getMGOptions(props){
	var mgOptions={},x,p;
	for(x=MG_ALLOWED_OPTIONS.length-1;x>=0;x--){
		p=MG_ALLOWED_OPTIONS[x];
		if(props.hasOwnProperty(p)){
			mgOptions[p]=props[p];
		}
	}
	return mgOptions;
}

export default class MetricsGraphics extends React.Component {
	constructor(props){
		super(props);
		this.mgData={};
	}
	componentDidMount(){
		this.mgData=Object.assign(this.mgData,getMGOptions(this.props));
		if(this.mgData.target){
			if(!this.props.xax_format){
				delete this.mgData.xax_format;
			}
			MG.data_graphic(this.mgData);
		}

	}
	componentWillReceiveProps(nextProps){
		this.mgData=Object.assign(this.mgData,getMGOptions(nextProps));
		if(this.mgData.target&&!nextProps.xax_format){
			delete this.mgData.xax_format;
		}

	}
	componentDidUpdate(){
		if(this.mgData.target){
			MG.data_graphic(this.mgData);
		}
	}
	render(){
		const _this=this;
		return(
			<div className="metricsGraphicsCon" ref={ (c) =>{ if(c!=null) _this.mgData.target=c; } }></div>
		);
		
	}
}

MetricsGraphics.propTypes={
	aggregate_rollover:React.PropTypes.any, //links the lines in a multi-line graphic
	animate_on_load:React.PropTypes.any, //determines whether lines are transitioned on first-load
	area:React.PropTypes.any, //determines whether to fill the area below the line
	axes_not_compact:React.PropTypes.any, //determines whether to draw compact or non-compact axes
	bar_height:React.PropTypes.any, //bar height in pixels
	bar_margin:React.PropTypes.any, //the margin between bars
	bar_orientation:React.PropTypes.any, //determines whether to show a vertical or horizontal barplot
	baseline_accessor:React.PropTypes.any, //the data element to map the baseline component to
	baselines:React.PropTypes.any, //horizontal lines that indicate, say, goals.
	binned:React.PropTypes.any, //determines whether the data is already binned
	binned:React.PropTypes.any, //specifies whether the histogram data is already binned
	bins:React.PropTypes.any, //the number of bins to use
	bottom:React.PropTypes.any, //the size of the bottom margin
	buffer:React.PropTypes.any, //the padding around the graphic
	center_title_full_width:React.PropTypes.any, //center title over entire graph
	chart_type:React.PropTypes.any, //{line, histogram, point, missing-data}
	color_accessor:React.PropTypes.any, //the data element to use to map points to colors
	color_range:React.PropTypes.any, //the range used to color different groups of points
	color_type:React.PropTypes.any, //specifies whether the color scale is quantitative or qualitative
	custom_line_color_map:React.PropTypes.any, //maps an arbitrary set of lines to colors
	data:React.PropTypes.any, //the data object
	decimals:React.PropTypes.any, //the number of decimals to show in a rollover
	dodge_accessor:React.PropTypes.any, //the data element to map the dodge component to
	error:React.PropTypes.any, //does the graphic have an error that we want to communicate to users
	european_clock:React.PropTypes.any, //determines whether to show labels using a 24-hour clock
	format:React.PropTypes.any, //the format of the data object (count or percentage)
	full_height:React.PropTypes.any, //sets height to that of the parent, adjusts dimensions on window resize
	full_width:React.PropTypes.any, //sets width to that of the parent, adjusts dimensions on window resize
	height:React.PropTypes.any, //the graphic's height
	inflator:React.PropTypes.any, //a multiplier for inflating max_x and max_y
	interpolate:React.PropTypes.any, //the interpolation function to use for rendering lines
	interpolate_tension:React.PropTypes.any, //increase the tension to fix artifacts when your data is irregular
	left:React.PropTypes.any, //the size of the left margin
	legend:React.PropTypes.any, //an array of literals used to label lines
	legend_target:React.PropTypes.any, //the DOM element to insert the legend in
	linked:React.PropTypes.any, //used to link multiple graphics together
	linked_format:React.PropTypes.any, //specifies the format of linked rollovers
	list:React.PropTypes.any, //automatically maps the data to x and y accessors
	lowess:React.PropTypes.any, //specifies whether to show a lowess line of best-fit
	ls:React.PropTypes.any, //specifies whether to show a least-squares line of best-fit
	markers:React.PropTypes.any, //vertical lines that indicate, say, milestones
	max_data_size:React.PropTypes.any, //for use with custom_line_color_map
	max_x:React.PropTypes.any, //the maximum x-value
	max_y:React.PropTypes.any, //the maximum y-value
	min_x:React.PropTypes.any, //the minimum x-value
	min_y:React.PropTypes.any, //the minimum y-value
	min_y_from_data:React.PropTypes.any, //starts y-axis at data's minimum value
	missing_is_hidden:React.PropTypes.any, //show missing observations as missing line segments
	missing_is_hidden_accessor:React.PropTypes.any, //the accessor for identifying observations as missing
	missing_is_zero:React.PropTypes.any, //assume missing observations are zero
	missing_text:React.PropTypes.any, //The text to display for missing graphics
	mousemove:React.PropTypes.any, //custom rollover function
	mouseout:React.PropTypes.any, //custom rollover function
	mouseover:React.PropTypes.any, //custom rollover function
	outer_padding_percentage:React.PropTypes.any, //outer_padding_percentage
	padding_percentage:React.PropTypes.any, //padding_percentage
	point_size:React.PropTypes.any, //the radius of the dots in the scatterplot
	point_size:React.PropTypes.any, //the radius of the dot that appears over an active data point
	predictor_accessor:React.PropTypes.any, //the data element to map the predictor component to
	right:React.PropTypes.any, //the size of the right margin
	rollover_callback:React.PropTypes.any, //custom rollover function
	rotate_x_labels:React.PropTypes.any, //The number of degrees to rotate the x-axis' labels.
	rotate_y_labels:React.PropTypes.any, //The number of degrees to rotate the y-axis' labels.
	show_confidence_band:React.PropTypes.any, //determines whether to show a confidence band
	show_missing_background:React.PropTypes.any, //Displays a background for missing graphics
	show_rollover_text:React.PropTypes.any, //determines whether to show text for a data point on rollover
	show_secondary_x_label:React.PropTypes.any, //determines whether to show years along the x-axis
	show_tooltips:React.PropTypes.any, //determines whether to display descriptions in tooltips
	show_year_markers:React.PropTypes.any, //determines whether to show year markers along the x-axis
	show_years:React.PropTypes.any, //determines whether to show years along the x-axis
	size_accessor:React.PropTypes.any, //should point sizes be mapped to data
	size_range:React.PropTypes.any, //the range of point sizes
	small_height_threshold:React.PropTypes.any, //maximum height for a small graphic
	small_text:React.PropTypes.any, //coerces small text regardless of graphic size
	small_width_threshold:React.PropTypes.any, //maximum width for a small graphic
	target:React.PropTypes.any, //the DOM element to insert the graphic in
	top:React.PropTypes.any, //the size of the top margin
	transition_on_update:React.PropTypes.any, //gracefully transitions the lines on data change
	truncate_x_labels:React.PropTypes.any, //truncate_x_labels
	truncate_y_labels:React.PropTypes.any, //truncate_y_labels
	utc_time:React.PropTypes.any, //determines whether to use a UTC or local time scale
	width:React.PropTypes.any, //the graphic's width
	x_accessor:React.PropTypes.any, //the data element that's the x-accessor
	x_axis:React.PropTypes.any, //determines whether to display the x-axis
	x_extended_ticks:React.PropTypes.any, //determines whether to extend the x-axis ticks across the chart
	x_label:React.PropTypes.any, //the label to show below the x-axis
	x_rollover_format:React.PropTypes.any, //a function or string that formats the y accessor's rollover text
	x_rug:React.PropTypes.any, //show a rug plot along the x-axis
	x_scale_type:React.PropTypes.any, //the x-axis scale type
	x_sort:React.PropTypes.any, //determines whether to sort the x-axis' values
	xax_count:React.PropTypes.any, //the number of x-axis ticks
	xax_format:React.PropTypes.any, //a function that formats the x-axis' labels
	xax_start_at_min:React.PropTypes.any, //starts the x-axis from the left-most edge
	xax_tick_length:React.PropTypes.any, //the x-axis' tick length in pixels
	xax_units:React.PropTypes.any, //a prefix symbol to be shown alongside the x-axis' labels
	y_accessor:React.PropTypes.any, //the data element that's the y-accessor
	y_axis:React.PropTypes.any, //determines whether to display the y-axis
	y_extended_ticks:React.PropTypes.any, //determines whether to extend the y-axis ticks across the chart
	y_label:React.PropTypes.any, //the label to show beside the y-axis
	y_rollover_format:React.PropTypes.any, //a function or string that formats the y accessor's rollover text
	y_rug:React.PropTypes.any, //show a rug plot along the y-axis
	y_scale_type:React.PropTypes.any, //the y-axis scale type
	yax_count:React.PropTypes.any, //the number of y-axis ticks
	yax_format:React.PropTypes.any, //a function that formats the y-axis' labels
	yax_tick_length:React.PropTypes.any, //the y-axis' tick length in pixels
	yax_units:React.PropTypes.any, //a prefix symbol to be shown alongside the y-axis' labels
	yax_units_append:React.PropTypes.any, //determines whether to append rather than prepend units
};
