'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _chart = require('chart.js');

var _chart2 = _interopRequireDefault(_chart);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadarChart = function (_React$Component) {
  _inherits(RadarChart, _React$Component);

  function RadarChart() {
    _classCallCheck(this, RadarChart);

    return _possibleConstructorReturn(this, (RadarChart.__proto__ || Object.getPrototypeOf(RadarChart)).apply(this, arguments));
  }

  _createClass(RadarChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var theDatasets = void 0;
      if (this.props.datasets) {
        theDatasets = this.props.datasets;
      } else {
        theDatasets = [{
          label: this.props.datasetLabel,
          data: this.props.data,
          fill: this.props.fill,
          lineTension: this.props.lineTension,
          backgroundColor: this.props.backgroundColor,
          borderColor: this.props.borderColor,
          borderWidth: this.props.borderWidth,
          borderCapStyle: this.props.borderCapStyle,
          pointBackgroundColor: this.props.pointBackgroundColor,
          pointBorderColor: this.props.pointBorderColor,
          pointBorderWidth: this.props.pointBorderWidth,
          pointRadius: this.props.pointRadius,
          pointHoverRadius: this.props.pointHoverRadius,
          pointHoverBackgroundColor: this.props.pointHoverBackgroundColor,
          pointHoverBorderColor: this.props.pointHoverBorderColor,
          pointHoverBorderWidth: this.props.pointHoverBorderWidth,
          pointStyle: this.props.pointStyle
        }];
      }
      var data = {
        labels: this.props.axisLabels,
        datasets: theDatasets
      };
      var options = this.props.options;
      var ctx = document.getElementById(this.props.id).getContext("2d");
      var radar = new _chart2.default(ctx, {
        type: 'radar',
        data: data,
        options: options
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('canvas', { id: this.props.id, width: this.props.width, height: this.props.height });
    }
  }]);

  return RadarChart;
}(_react2.default.Component);

RadarChart.propTypes = {
  id: _propTypes2.default.string,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  datasets: _propTypes2.default.array,
  axisLabels: _propTypes2.default.array,
  fill: _propTypes2.default.bool,
  lineTension: _propTypes2.default.number,
  borderCapStyle: _propTypes2.default.string,
  datasetLabel: _propTypes2.default.string,
  data: _propTypes2.default.array,
  backgroundColor: _propTypes2.default.string,
  borderColor: _propTypes2.default.string,
  borderWidth: _propTypes2.default.number,
  pointBackgroundColor: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  pointBorderColor: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  pointBorderWidth: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.number]),
  pointRadius: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.number]),
  pointHoverRadius: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.number]),
  pointHoverBackgroundColor: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  pointHoverBorderColor: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  pointHoverBorderWidth: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.number]),
  pointStyle: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  options: _propTypes2.default.object
};
RadarChart.defaultProps = {
  id: 'radar-chart-0',
  width: "300",
  height: "300",
  options: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    }
  }
};

exports.default = RadarChart;
module.exports = exports['default'];
//# sourceMappingURL=radar-chart.js.map
