'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chart = require('chart.js');

var _chart2 = _interopRequireDefault(_chart);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineChart = function (_React$Component) {
  _inherits(LineChart, _React$Component);

  function LineChart() {
    _classCallCheck(this, LineChart);

    return _possibleConstructorReturn(this, (LineChart.__proto__ || Object.getPrototypeOf(LineChart)).apply(this, arguments));
  }

  _createClass(LineChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var theDatasets = void 0;
      if (this.props.datasets) {
        theDatasets = this.props.datasets;
      } else {
        theDatasets = [{
          label: this.props.datasetLabel,
          fill: this.props.fill,
          lineTension: this.props.lineTension,
          backgroundColor: this.props.backgroundColor,
          borderColor: this.props.borderColor,
          borderCapStyle: this.props.borderCapStyle,
          borderWidth: this.props.borderWidth,
          pointBorderColor: this.props.pointBorderColor,
          pointBackgroundColor: this.props.pointBackgroundColor,
          pointBorderWidth: this.props.pointBorderWidth,
          pointHoverRadius: this.props.pointHoverRadius,
          pointHoverBackgroundColor: this.props.pointHoverBackgroundColor,
          pointHoverBorderColor: this.props.pointHoverBorderColor,
          pointHoverBorderWidth: this.props.pointHoverBorderWidth,
          pointRadius: this.props.pointRadius,
          pointStyle: this.props.pointStyle,
          showLine: this.props.showLine,
          data: this.props.data,
          xAxisID: this.props.xAxisID,
          yAxisID: this.props.yAxisID
        }];
      }
      var data = {
        labels: this.props.axisLabels,
        datasets: theDatasets
      };
      var ctx = document.getElementById(this.props.id).getContext('2d');
      var line = new _chart2.default(ctx, {
        type: 'line',
        options: this.props.options,
        data: data
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('canvas', { id: this.props.id, width: this.props.width, height: this.props.height });
    }
  }]);

  return LineChart;
}(_react2.default.Component);

LineChart.propTypes = {
  id: _propTypes2.default.string,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  datasets: _propTypes2.default.array,
  datasetLabel: _propTypes2.default.string,
  axisLabels: _propTypes2.default.array,
  lineTension: _propTypes2.default.number,
  data: _propTypes2.default.array,
  backgroundColor: _propTypes2.default.string,
  borderColor: _propTypes2.default.string,
  borderCapStyle: _propTypes2.default.string,
  borderWidth: _propTypes2.default.number,
  fill: _propTypes2.default.bool,
  pointBackgroundColor: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  pointBorderColor: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  pointBorderWidth: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.number]),
  pointRadius: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.number]),
  pointHoverRadius: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.number]),
  pointHoverBackgroundColor: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  pointHoverBorderColor: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  pointHoverBorderWidth: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.number]),
  pointStyle: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  showLine: _propTypes2.default.bool,
  xAxisID: _propTypes2.default.string,
  yAxisID: _propTypes2.default.string,
  options: _propTypes2.default.object
};

LineChart.defaultProps = {
  id: 'line-chart-0',
  width: '300',
  height: '200',
  lineTension: 0,
  fill: false,
  showLine: false,
  pointStyle: 'circle',
  options: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    }
  }
};

exports.default = LineChart;
module.exports = exports['default'];
//# sourceMappingURL=line-chart.js.map
