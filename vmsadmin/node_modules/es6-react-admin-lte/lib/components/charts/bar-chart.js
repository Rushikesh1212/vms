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

var BarChart = function (_React$Component) {
  _inherits(BarChart, _React$Component);

  function BarChart() {
    _classCallCheck(this, BarChart);

    return _possibleConstructorReturn(this, (BarChart.__proto__ || Object.getPrototypeOf(BarChart)).apply(this, arguments));
  }

  _createClass(BarChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var theDatasets = void 0;
      if (this.props.datasets) {
        theDatasets = this.props.datasets;
      } else {
        theDatasets = [{
          label: this.props.datasetLabel,
          data: this.props.data,
          backgroundColor: this.props.backgroundColor,
          borderColor: this.props.borderColor,
          borderWidth: this.props.borderWidth,
          xAxisID: this.props.xAxisId,
          yAxisID: this.props.yAxisId,
          borderSkipped: this.props.bordersSkipped,
          hoverBackgroundColor: this.props.hoverBackgroundColor,
          hoverBorderColor: this.props.hoverBorderColor,
          hoverBorderWidth: this.props.hoverBorderWidth
        }];
      }
      var data = {
        labels: this.props.labels,
        datasets: theDatasets
      };
      var options = this.props.options;
      var ctx = document.getElementById(this.props.id).getContext("2d");
      var bar = new _chart2.default(ctx, {
        type: this.props.horizontal ? 'horizontalBar' : 'bar',
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

  return BarChart;
}(_react2.default.Component);

BarChart.propTypes = {
  id: _propTypes2.default.string,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  datasets: _propTypes2.default.array,
  labels: _propTypes2.default.array,
  datasetLabel: _propTypes2.default.string,
  data: _propTypes2.default.array,
  horizontal: _propTypes2.default.bool,
  backgroundColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  borderColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  borderWidth: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.number]),
  xAxisID: _propTypes2.default.string,
  YAxisID: _propTypes2.default.string,
  borderSkipped: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  hoverBackgroundColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  hoverBorderColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  hoverBorderWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  options: _propTypes2.default.object
};

BarChart.defaultProps = {
  id: 'bar-chart-0',
  width: '300',
  height: '200',
  horizontal: false,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false,
      labels: {
        display: false
      }
    }
  }
};

exports.default = BarChart;
module.exports = exports['default'];
//# sourceMappingURL=bar-chart.js.map
