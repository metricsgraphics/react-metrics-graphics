import PropTypes from 'prop-types';
import React from 'react';
import MG from 'metrics-graphics';
import 'metrics-graphics/dist/metricsgraphics.css';

const MG_ALLOWED_OPTIONS = [
  'aggregate_rollover',
  'animate_on_load',
  'area',
  'axes_not_compact',
  'bar_margin',
  'bar_orientation',
  'baseline_accessor',
  'baselines',
  'binned',
  'bins',
  'bottom',
  'brush',
  'brushing_selection_changed',
  'buffer',
  'center_title_full_width',
  'chart_type',
  'click',
  'color_accessor',
  'color_range',
  'color_type',
  'colors',
  'custom_line_color_map',
  'data',
  'decimals',
  'description',
  'error',
  'european_clock',
  'format',
  'flip_area_under_y_value',
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
  'point_size',
  'point_size',
  'predictor_accessor',
  'right',
  'rollover_callback',
  'rollover_time_format',
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
  'zoom_target',
];

const getMGOptions = props => MG_ALLOWED_OPTIONS.reduce(
  (mgOptions, propertyName) =>
    (Object.prototype.hasOwnProperty.call(props, propertyName) ? {
      [propertyName]: props[propertyName],
      ...mgOptions,
    } : mgOptions),
  {},
);

export default class MetricsGraphics extends React.Component {
  static propTypes = MG_ALLOWED_OPTIONS.reduce(
    (obj, propertyName) => ({
      [propertyName]: PropTypes.any,
      ...obj,
    }),
    {},
  );

  constructor(props) {
    super(props);
    this.mgData = {};
  }

  componentDidMount() {
    this.updateMGData(this.props);
    if (this.mgData.target) {
      MG.data_graphic(this.mgData);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.updateMGData(nextProps);
  }

  componentDidUpdate() {
    if (this.mgData.target) {
      MG.data_graphic(this.mgData);
    }
  }

  updateMGData(props) {
    const { target } = this.mgData;
    this.mgData = {
      target,
      ...getMGOptions(props),
    };
  }

  render() {
    const { mgData } = this;
    return (
      <div className="metricsGraphicsCon" ref={(c) => { if (c != null) mgData.target = c; }} />
    );
  }
}
