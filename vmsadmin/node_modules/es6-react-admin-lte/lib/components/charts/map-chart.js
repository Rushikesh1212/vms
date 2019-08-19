'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapChart = function (_React$Component) {
  _inherits(MapChart, _React$Component);

  function MapChart() {
    _classCallCheck(this, MapChart);

    return _possibleConstructorReturn(this, (MapChart.__proto__ || Object.getPrototypeOf(MapChart)).apply(this, arguments));
  }

  _createClass(MapChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var mapParams = this.props.mapParams ? this.props.mapParams : {
        map: this.props.map,
        backgroundColor: this.props.backgroundColor,
        zoomOnScroll: this.props.zoomOnScroll,
        zoomOnScrollSpeed: this.props.zoomOnScrollSpeed,
        panOnDrag: this.props.panOnDrag,
        zoomMax: this.props.zoomMax,
        zoomMin: this.props.zoomMin,
        zoomStep: this.props.zoomStep,
        zoomAnimate: this.props.zoomAnimate,
        regionsSelectable: this.props.regionsSelectable,
        regionsSelectableOne: this.props.regionsSelectableOne,
        markersSelectable: this.props.markersSelectable,
        markersSelectableOne: this.props.markersSelectableOne,
        regionStyle: this.props.regionStyle,
        regionLabelStyle: this.props.regionLabelStyle,
        markerStyle: this.props.markerStyle,
        markerLabelStyle: this.props.markerLabelStyle,
        markers: this.props.markers,
        series: this.props.series,
        onRegionLabelShow: this.props.onRegionLabelShow,
        focusOn: this.props.focusOn,
        labels: this.props.labels,
        selectedRegions: this.props.selectedRegions,
        selectedMarkers: this.props.selectedMarkers,
        onRegionTipShow: this.props.onRegionTipShow,
        onRegionOver: this.props.onRegionOver,
        onRegionOut: this.props.onRegionOut,
        onRegionClick: this.props.onRegionClick,
        onRegionSelected: this.props.onRegionSelected,
        onMarkerTipShow: this.props.onMarkerTipShow,
        onMarkerOver: this.props.onMarkerOver,
        onMarkerOut: this.props.onMarkerOut,
        onMarkerClick: this.props.onMarkerClick,
        onMarkerSelected: this.props.onMarkerSelected,
        onViewportChange: this.props.onViewportChange
      };
      (0, _jquery2.default)('#' + this.props.id).vectorMap(mapParams);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        id: this.props.id,
        style: {
          width: this.props.width,
          height: this.props.height
        }
      });
    }
  }]);

  return MapChart;
}(_react2.default.Component);

;
MapChart.propTypes = {
  id: _propTypes2.default.string,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  mapParams: _propTypes2.default.object,
  map: _propTypes2.default.string,
  backgroundColor: _propTypes2.default.string,
  zoomOnScroll: _propTypes2.default.bool,
  zoomOnScrollSpeed: _propTypes2.default.number,
  panOnDrag: _propTypes2.default.bool,
  zoomMax: _propTypes2.default.number,
  zoomMin: _propTypes2.default.number,
  zoomStep: _propTypes2.default.number,
  zoomAnimate: _propTypes2.default.bool,
  regionsSelectable: _propTypes2.default.bool,
  regionsSelectableOne: _propTypes2.default.bool,
  markersSelectable: _propTypes2.default.bool,
  markersSelectableOne: _propTypes2.default.bool,
  regionStyle: _propTypes2.default.object,
  regionLabelStyle: _propTypes2.default.object,
  markerStyle: _propTypes2.default.object,
  markerLabelStyle: _propTypes2.default.object,
  markers: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]),
  series: _propTypes2.default.object,
  focusOn: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  labels: _propTypes2.default.object,
  selectedRegions: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array, _propTypes2.default.string]),
  selectedMarkers: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array, _propTypes2.default.string]),
  onRegionTipShow: _propTypes2.default.func,
  onRegionOver: _propTypes2.default.func,
  onRegionOut: _propTypes2.default.func,
  onRegionClick: _propTypes2.default.func,
  onRegionSelected: _propTypes2.default.func,
  onMarkerTipShow: _propTypes2.default.func,
  onMarkerOver: _propTypes2.default.func,
  onMarkerOut: _propTypes2.default.func,
  onMarkerClick: _propTypes2.default.func,
  onMarkerSelected: _propTypes2.default.func,
  onViewportChange: _propTypes2.default.func
};
MapChart.defaultProps = {
  id: 'world-map-0',
  width: "100%",
  height: "300px",
  map: 'world_mill_en',
  backgroundColor: "#555555",
  zoomOnScroll: true,
  zoomOnScrollSpeed: 3,
  panOnDrag: true,
  zoomMax: 8,
  zoomMin: 1,
  zoomStep: 1.6,
  regionsSelectable: false,
  regionsSelectableOne: false,
  markersSelectable: false,
  markersSelectableOne: false,
  regionStyle: {
    initial: {
      fill: '#bbbbbb',
      "fill-opacity": 1,
      stroke: 'none',
      "stroke-width": 0,
      "stroke-opacity": 1
    },
    hover: {
      "fill-opacity": 0.8,
      cursor: 'pointer'
    },
    selected: {
      fill: 'yellow'
    },
    selectedHover: {}
  },
  regionLabelStyle: {
    initial: {
      'font-family': 'Verdana',
      'font-size': '12',
      'font-weight': 'bold',
      cursor: 'default',
      fill: 'black'
    },
    hover: {
      cursor: 'pointer'
    }
  },
  markerStyle: {
    initial: {
      fill: 'grey',
      stroke: '#505050',
      "fill-opacity": 1,
      "stroke-width": 1,
      "stroke-opacity": 1,
      r: 5
    },
    hover: {
      stroke: 'black',
      "stroke-width": 2,
      cursor: 'pointer'
    },
    selected: {
      fill: 'blue'
    },
    selectedHover: {}
  },
  markerLabelStyle: {
    initial: {
      'font-family': 'Verdana',
      'font-size': '12',
      'font-weight': 'bold',
      cursor: 'default',
      fill: 'black'
    },
    hover: {
      cursor: 'pointer'
    }
  }
};

exports.default = MapChart;
module.exports = exports['default'];
//# sourceMappingURL=map-chart.js.map
