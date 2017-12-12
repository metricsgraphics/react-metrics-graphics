import React from 'react';
import MG from 'metrics-graphics';
import 'metrics-graphics/dist/metricsgraphics.css';

const MG_ALLOWED_OPTIONS = [
    'aggregate_rollover',
    'animate_on_load',
    'area',
    'axes_not_compact',
    'bar_height',
    'bar_margin',
    'bar_orientation',
    'baseline_accessor',
    'baselines',
    'binned',
    'bins',
    'bottom',
    'buffer',
    'center_title_full_width',
    'chart_type',
    'color_accessor',
    'color_range',
    'color_type',
    'colors',
    'custom_line_color_map',
    'data',
    'decimals',
    'description',
    'dodge_accessor',
    'error',
    'european_clock',
    'format',
    'full_height',
    'full_width',
    'height',
    'inflator',
    'interpolate',
    'interpolate_tension',
    'left',
    'legend',
    'legend_target',
    'linked',
    'linked_format',
    'list',
    'lowess',
    'ls',
    'markers',
    'max_data_size',
    'max_x',
    'max_y',
    'min_x',
    'min_y',
    'min_y_from_data',
    'missing_is_hidden',
    'missing_is_hidden_accessor',
    'missing_is_zero',
    'missing_text',
    'mousemove',
    'mouseout',
    'mouseover',
    'outer_padding_percentage',
    'padding_percentage',
    'point_size',
    'point_size',
    'predictor_accessor',
    'right',
    'rollover_callback',
    'rotate_x_labels',
    'rotate_y_labels',
    'show_confidence_band',
    'show_missing_background',
    'show_rollover_text',
    'show_secondary_x_label',
    'show_tooltips',
    'show_year_markers',
    'show_years',
    'size_accessor',
    'size_range',
    'small_height_threshold',
    'small_text',
    'small_width_threshold',
    'target',
    'title',
    'top',
    'transition_on_update',
    'truncate_x_labels',
    'truncate_y_labels',
    'utc_time',
    'width',
    'x_accessor',
    'x_axis',
    'x_extended_ticks',
    'x_label',
    'x_mouseover',
    'x_rollover_format',
    'x_rug',
    'x_scale_type',
    'x_sort',
    'xax_count',
    'xax_format',
    'xax_start_at_min',
    'xax_tick_length',
    'xax_units',
    'y_accessor',
    'y_axis',
    'y_extended_ticks',
    'y_label',
    'y_mouseover',
    'y_rollover_format',
    'y_rug',
    'y_scale_type',
    'yax_count',
    'yax_format',
    'yax_tick_length',
    'yax_units',
    'yax_units_append',
];

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
			<div className="metricsGraphicsCon" ref={ (c) =>{ if(c!=null) _this.mgData.target=c; } } />
		);
	}
}

MetricsGraphics.propTypes = MG_ALLOWED_OPTIONS.reduce(
    function(obj, propertyName) {
        obj[propertyName] = React.PropTypes.any;
        return obj;
    }, {});
