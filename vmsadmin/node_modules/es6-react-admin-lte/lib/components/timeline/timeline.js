'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _timelineLabel = require('./timeline-label.js');

var _timelineLabel2 = _interopRequireDefault(_timelineLabel);

var _timelineItem = require('./timeline-item/timeline-item.js');

var _timelineItem2 = _interopRequireDefault(_timelineItem);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timeline = function (_React$Component) {
  _inherits(Timeline, _React$Component);

  function Timeline() {
    _classCallCheck(this, Timeline);

    return _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).apply(this, arguments));
  }

  _createClass(Timeline, [{
    key: 'render',
    value: function render() {
      var timelineInfo = [];
      if (this.props.children) {
        timelineInfo = this.props.children;
      } else {
        this.props.timelineInfo.map(function (timelineElement, indx) {
          if (timelineElement.endDate) {
            timelineInfo.push(_react2.default.createElement(_timelineLabel2.default, { key: 'label1' + indx, theme: 'bg-red', content: timelineElement.endDate }));
          }
          timelineElement.items.forEach(function (item, i) {
            timelineInfo.push(_react2.default.createElement(_timelineItem2.default, { key: 'item' + indx + i, icon: item.icon, iconTheme: item.iconTheme, time: item.time, header: item.header, body: item.body, footer: item.footer }));
          });
          if (timelineElement.startDate) {
            timelineInfo.push(_react2.default.createElement(_timelineLabel2.default, { key: 'label2' + indx, theme: 'bg-green', content: timelineElement.startDate }));
          }
        });
      }
      return _react2.default.createElement(
        'div',
        { className: 'col-md-12' },
        _react2.default.createElement(
          'ul',
          { className: 'timeline' },
          timelineInfo,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('i', { className: 'fa fa-clock-o bg-gray' })
          )
        )
      );
    }
  }]);

  return Timeline;
}(_react2.default.Component);

Timeline.propTypes = {
  timelineInfo: _propTypes2.default.array
};
Timeline.defaultProps = {
  timelineInfo: []
};

exports.default = Timeline;
module.exports = exports['default'];
//# sourceMappingURL=timeline.js.map
