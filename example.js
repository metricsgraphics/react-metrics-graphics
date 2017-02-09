require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactMetricsGraphics = require('react-metrics-graphics');

var _reactMetricsGraphics2 = _interopRequireDefault(_reactMetricsGraphics);

var TEST_DATA = [{ 'date': new Date('2014-01-01'), 'value': 190000000 }, { 'date': new Date('2014-01-02'), 'value': 190379978 }, { 'date': new Date('2014-01-03'), 'value': 90493749 }, { 'date': new Date('2014-01-04'), 'value': 190785250 }, { 'date': new Date('2014-01-05'), 'value': 197391904 }, { 'date': new Date('2014-01-06'), 'value': 191576838 }, { 'date': new Date('2014-01-07'), 'value': 191413854 }, { 'date': new Date('2014-01-08'), 'value': 142177211 }, { 'date': new Date('2014-01-09'), 'value': 103762210 }, { 'date': new Date('2014-01-10'), 'value': 144381072 }, { 'date': new Date('2014-01-11'), 'value': 154352310 }, { 'date': new Date('2014-01-12'), 'value': 165531790 }, { 'date': new Date('2014-01-13'), 'value': 175748881 }, { 'date': new Date('2014-01-14'), 'value': 187064037 }, { 'date': new Date('2014-01-15'), 'value': 197520685 }, { 'date': new Date('2014-01-16'), 'value': 210176418 }, { 'date': new Date('2014-01-17'), 'value': 196122924 }, { 'date': new Date('2014-01-18'), 'value': 157337480 }, { 'date': new Date('2014-01-19'), 'value': 200258882 }, { 'date': new Date('2014-01-20'), 'value': 186829538 }, { 'date': new Date('2014-01-21'), 'value': 112456897 }, { 'date': new Date('2014-01-22'), 'value': 114299711 }, { 'date': new Date('2014-01-23'), 'value': 122759017 }, { 'date': new Date('2014-01-24'), 'value': 203596183 }, { 'date': new Date('2014-01-25'), 'value': 208107346 }, { 'date': new Date('2014-01-26'), 'value': 196359852 }, { 'date': new Date('2014-01-27'), 'value': 192570783 }, { 'date': new Date('2014-01-28'), 'value': 177967768 }, { 'date': new Date('2014-01-29'), 'value': 190632803 }, { 'date': new Date('2014-01-30'), 'value': 203725316 }, { 'date': new Date('2014-01-31'), 'value': 118226177 }, { 'date': new Date('2014-02-01'), 'value': 210698669 }, { 'date': new Date('2014-02-02'), 'value': 217640656 }, { 'date': new Date('2014-02-03'), 'value': 216142362 }, { 'date': new Date('2014-02-04'), 'value': 201410971 }, { 'date': new Date('2014-02-05'), 'value': 196704289 }, { 'date': new Date('2014-02-06'), 'value': 190436945 }, { 'date': new Date('2014-02-07'), 'value': 178891686 }, { 'date': new Date('2014-02-08'), 'value': 171613962 }, { 'date': new Date('2014-02-09'), 'value': 107579773 }, { 'date': new Date('2014-02-10'), 'value': 158677098 }, { 'date': new Date('2014-02-11'), 'value': 147129977 }, { 'date': new Date('2014-02-12'), 'value': 151561876 }, { 'date': new Date('2014-02-13'), 'value': 151627421 }, { 'date': new Date('2014-02-14'), 'value': 143543872 }, { 'date': new Date('2014-02-15'), 'value': 136581057 }, { 'date': new Date('2014-02-16'), 'value': 135560715 }, { 'date': new Date('2014-02-17'), 'value': 122625263 }, { 'date': new Date('2014-02-18'), 'value': 112091484 }, { 'date': new Date('2014-02-19'), 'value': 98810329 }, { 'date': new Date('2014-02-20'), 'value': 99882912 }, { 'date': new Date('2014-02-21'), 'value': 94943095 }, { 'date': new Date('2014-02-22'), 'value': 104875743 }, { 'date': new Date('2014-02-23'), 'value': 116383678 }, { 'date': new Date('2014-02-24'), 'value': 105028841 }, { 'date': new Date('2014-02-25'), 'value': 123967310 }, { 'date': new Date('2014-02-26'), 'value': 133167029 }, { 'date': new Date('2014-02-27'), 'value': 128577263 }, { 'date': new Date('2014-02-28'), 'value': 115836969 }, { 'date': new Date('2014-03-01'), 'value': 119264529 }, { 'date': new Date('2014-03-02'), 'value': 109363374 }, { 'date': new Date('2014-03-03'), 'value': 113985628 }, { 'date': new Date('2014-03-04'), 'value': 114650999 }, { 'date': new Date('2014-03-05'), 'value': 110866108 }, { 'date': new Date('2014-03-06'), 'value': 96473454 }, { 'date': new Date('2014-03-07'), 'value': 84075886 }, { 'date': new Date('2014-03-08'), 'value': 103568384 }, { 'date': new Date('2014-03-09'), 'value': 101534883 }, { 'date': new Date('2014-03-10'), 'value': 115825447 }, { 'date': new Date('2014-03-11'), 'value': 126133916 }, { 'date': new Date('2014-03-12'), 'value': 116502109 }, { 'date': new Date('2014-03-13'), 'value': 80169411 }, { 'date': new Date('2014-03-14'), 'value': 84296886 }, { 'date': new Date('2014-03-15'), 'value': 86347399 }, { 'date': new Date('2014-03-16'), 'value': 31483669 }, { 'date': new Date('2014-03-17'), 'value': 142811333 }, { 'date': new Date('2014-03-18'), 'value': 89675396 }, { 'date': new Date('2014-03-19'), 'value': 115514483 }, { 'date': new Date('2014-03-20'), 'value': 117630630 }, { 'date': new Date('2014-03-21'), 'value': 122340239 }, { 'date': new Date('2014-03-22'), 'value': 132349091 }, { 'date': new Date('2014-03-23'), 'value': 125613305 }, { 'date': new Date('2014-03-24'), 'value': 135592466 }, { 'date': new Date('2014-03-25'), 'value': 123408762 }, { 'date': new Date('2014-03-26'), 'value': 111991454 }, { 'date': new Date('2014-03-27'), 'value': 116123955 }, { 'date': new Date('2014-03-28'), 'value': 112817214 }, { 'date': new Date('2014-03-29'), 'value': 113029590 }, { 'date': new Date('2014-03-30'), 'value': 108753398 }, { 'date': new Date('2014-03-31'), 'value': 99383763 }, { 'date': new Date('2014-04-01'), 'value': 100151737 }, { 'date': new Date('2014-04-02'), 'value': 94985209 }, { 'date': new Date('2014-04-03'), 'value': 82913669 }, { 'date': new Date('2014-04-04'), 'value': 78748268 }, { 'date': new Date('2014-04-05'), 'value': 63829135 }, { 'date': new Date('2014-04-06'), 'value': 78694727 }, { 'date': new Date('2014-04-07'), 'value': 80868994 }, { 'date': new Date('2014-04-08'), 'value': 93799013 }, { 'date': new Date('2014-04-09'), 'value': 9042416 }, { 'date': new Date('2014-04-10'), 'value': 97298692 }, { 'date': new Date('2014-04-11'), 'value': 53353499 }, { 'date': new Date('2014-04-12'), 'value': 71248129 }, { 'date': new Date('2014-04-13'), 'value': 75253744 }, { 'date': new Date('2014-04-14'), 'value': 68976648 }, { 'date': new Date('2014-04-15'), 'value': 71002284 }, { 'date': new Date('2014-04-16'), 'value': 75052401 }, { 'date': new Date('2014-04-17'), 'value': 83894030 }, { 'date': new Date('2014-04-18'), 'value': 50236528 }, { 'date': new Date('2014-04-19'), 'value': 59739114 }, { 'date': new Date('2014-04-20'), 'value': 56407136 }, { 'date': new Date('2014-04-21'), 'value': 108323177 }, { 'date': new Date('2014-04-22'), 'value': 101578914 }, { 'date': new Date('2014-04-23'), 'value': 115877608 }, { 'date': new Date('2014-04-24'), 'value': 132088857 }, { 'date': new Date('2014-04-25'), 'value': 112071353 }, { 'date': new Date('2014-04-26'), 'value': 81790062 }, { 'date': new Date('2014-04-27'), 'value': 105003761 }, { 'date': new Date('2014-04-28'), 'value': 100457727 }, { 'date': new Date('2014-04-29'), 'value': 118253926 }, { 'date': new Date('2014-04-30'), 'value': 67956992 }];

var App = (function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
		this.state = { minDate: new Date('2014-01-01'), maxDate: new Date('2014-01-15') };
	}

	_createClass(App, [{
		key: 'changeDateRange',
		value: function changeDateRange(minDate, maxDate) {
			this.setState({ minDate: minDate, maxDate: maxDate });
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state;
			var minDate = _state.minDate;
			var maxDate = _state.maxDate;

			var curData = TEST_DATA.filter(function (o) {
				return o.date >= minDate && o.date <= maxDate;
			});
			console.log(curData);
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(_reactMetricsGraphics2['default'], {
					title: 'Line Chart',
					description: 'This is a simple line chart.',
					data: curData,
					width: 600,
					height: 200,
					right: 40,
					x_accessor: 'date',
					y_accessor: 'value'
				}),
				_react2['default'].createElement(
					'div',
					{ className: 'exampleToolBox' },
					_react2['default'].createElement(
						'button',
						{ className: 'isimple-btn', onClick: this.changeDateRange.bind(this, minDate, new Date('2014-01-15')) },
						'Set Max Date to 1/15/2014'
					),
					_react2['default'].createElement(
						'button',
						{ className: 'isimple-btn', onClick: this.changeDateRange.bind(this, minDate, new Date('2014-01-30')) },
						'Set Max Date to 1/30/2014'
					)
				)
			);
		}
	}]);

	return App;
})(_react2['default'].Component);

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-metrics-graphics":undefined}]},{},[1]);
