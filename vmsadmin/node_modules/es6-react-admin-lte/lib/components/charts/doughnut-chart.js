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

var DoughnutChart = function (_React$Component) {
  _inherits(DoughnutChart, _React$Component);

  function DoughnutChart() {
    _classCallCheck(this, DoughnutChart);

    return _possibleConstructorReturn(this, (DoughnutChart.__proto__ || Object.getPrototypeOf(DoughnutChart)).apply(this, arguments));
  }

  _createClass(DoughnutChart, [{
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
          hoverBackgroundColor: this.props.hoverBackgroundColor,
          hoverBorderColor: this.props.hoverBorderColor,
          hoverBorderWidth: this.props.hoverBorderWidth
        }];
      }
      var data = {
        labels: this.props.axisLabels,
        datasets: theDatasets
      };
      var options = this.props.options;
      var ctx = document.getElementById(this.props.id).getContext("2d");
      var doughnut = new _chart2.default(ctx, {
        type: 'doughnut',
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

  return DoughnutChart;
}(_react2.default.Component);

DoughnutChart.propTypes = {
  id: _propTypes2.default.string,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  datasets: _propTypes2.default.array,
  axisLabels: _propTypes2.default.array,
  datasetLabel: _propTypes2.default.string,
  data: _propTypes2.default.array,
  backgroundColor: _propTypes2.default.array,
  borderColor: _propTypes2.default.array,
  borderWidth: _propTypes2.default.array,
  hoverBackgroundColor: _propTypes2.default.array,
  hoverBorderColor: _propTypes2.default.array,
  hoverBorderWidth: _propTypes2.default.array,
  options: _propTypes2.default.object
};
DoughnutChart.defaultProps = {
  id: 'doughnut-chart-0',
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

exports.default = DoughnutChart;
module.exports = exports['default'];
//# sourceMappingURL=doughnut-chart.js.map
