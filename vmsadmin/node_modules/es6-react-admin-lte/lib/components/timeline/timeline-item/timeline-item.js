'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _timelineHeader = require('./timeline-header.js');

var _timelineHeader2 = _interopRequireDefault(_timelineHeader);

var _timelineBody = require('./timeline-body.js');

var _timelineBody2 = _interopRequireDefault(_timelineBody);

var _timelineFooter = require('./timeline-footer.js');

var _timelineFooter2 = _interopRequireDefault(_timelineFooter);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimelineItem = function (_React$Component) {
  _inherits(TimelineItem, _React$Component);

  function TimelineItem() {
    _classCallCheck(this, TimelineItem);

    return _possibleConstructorReturn(this, (TimelineItem.__proto__ || Object.getPrototypeOf(TimelineItem)).apply(this, arguments));
  }

  _createClass(TimelineItem, [{
    key: 'render',
    value: function render() {
      var body = '';
      var footer = '';
      var header = '';
      if (this.props.body) {
        body = _react2.default.createElement(
          _timelineBody2.default,
          { content: this.props.body.content },
          this.props.body.markup
        );
      }
      if (this.props.footer) {
        footer = _react2.default.createElement(
          _timelineFooter2.default,
          { content: this.props.footer.content },
          this.props.footer.markup
        );
      }
      if (this.props.header) {
        header = _react2.default.createElement(_timelineHeader2.default, {
          url: this.props.header.url,
          onClick: this.props.header.onClick,
          title: this.props.header.title,
          content: this.props.header.content
        });
      }
      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement('i', { className: this.props.icon + ' ' + this.props.iconTheme }),
        _react2.default.createElement(
          'div',
          { className: 'timeline-item' },
          _react2.default.createElement(
            'span',
            { className: 'time' },
            _react2.default.createElement('i', { className: 'fa fa-clock-o' }),
            '\xA0',
            this.props.time
          ),
          header,
          body,
          footer
        )
      );
    }
  }]);

  return TimelineItem;
}(_react2.default.Component);

TimelineItem.propTypes = {
  icon: _propTypes2.default.string,
  iconTheme: _propTypes2.default.string,
  time: _propTypes2.default.string,
  header: _propTypes2.default.object,
  body: _propTypes2.default.object,
  footer: _propTypes2.default.object
};
TimelineItem.defaultProps = {
  icon: 'fa fa-coffee',
  iconTheme: 'bg-blue',
  time: '',
  header: {},
  body: {},
  footer: {}
};

exports.default = TimelineItem;
module.exports = exports['default'];
//# sourceMappingURL=timeline-item.js.map
