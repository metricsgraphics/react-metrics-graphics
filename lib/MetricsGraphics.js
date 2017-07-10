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

var MG_ALLOWED_OPTIONS = ['aggregate_rollover', 'animate_on_load', 'area', 'axes_not_compact', 'bar_height', 'bar_margin', 'bar_orientation', 'baseline_accessor', 'baselines', 'binned', 'bins', 'bottom', 'buffer', 'center_title_full_width', 'chart_type', 'color_accessor', 'color_range', 'color_type', 'custom_line_color_map', 'data', 'decimals', 'description', 'dodge_accessor', 'error', 'european_clock', 'format', 'full_height', 'full_width', 'height', 'inflator', 'interpolate', 'interpolate_tension', 'left', 'legend', 'legend_target', 'linked', 'linked_format', 'list', 'lowess', 'ls', 'markers', 'max_data_size', 'max_x', 'max_y', 'min_x', 'min_y', 'min_y_from_data', 'missing_is_hidden', 'missing_is_hidden_accessor', 'missing_is_zero', 'missing_text', 'mousemove', 'mouseout', 'mouseover', 'outer_padding_percentage', 'padding_percentage', 'point_size', 'point_size', 'predictor_accessor', 'right', 'rollover_callback', 'rotate_x_labels', 'rotate_y_labels', 'show_confidence_band', 'show_missing_background', 'show_rollover_text', 'show_secondary_x_label', 'show_tooltips', 'show_year_markers', 'show_years', 'size_accessor', 'size_range', 'small_height_threshold', 'small_text', 'small_width_threshold', 'target', 'title', 'top', 'transition_on_update', 'truncate_x_labels', 'truncate_y_labels', 'utc_time', 'width', 'x_accessor', 'x_axis', 'x_extended_ticks', 'x_label', 'x_rollover_format', 'x_rug', 'x_scale_type', 'x_sort', 'xax_count', 'xax_format', 'xax_start_at_min', 'xax_tick_length', 'xax_units', 'y_accessor', 'y_axis', 'y_extended_ticks', 'y_label', 'y_rollover_format', 'y_rug', 'y_scale_type', 'yax_count', 'yax_format', 'yax_tick_length', 'yax_units', 'yax_units_append'];

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

MetricsGraphics.propTypes = MG_ALLOWED_OPTIONS.reduce(function (obj, propertyName) {
  obj[propertyName] = _react2['default'].PropTypes.any;
  return obj;
}, {});
module.exports = exports['default'];