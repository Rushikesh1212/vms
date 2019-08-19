'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimelineHeader = function (_React$Component) {
  _inherits(TimelineHeader, _React$Component);

  function TimelineHeader() {
    _classCallCheck(this, TimelineHeader);

    return _possibleConstructorReturn(this, (TimelineHeader.__proto__ || Object.getPrototypeOf(TimelineHeader)).apply(this, arguments));
  }

  _createClass(TimelineHeader, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'h3',
        { className: 'timeline-header' },
        _react2.default.createElement(
          'a',
          {
            href: this.props.url,
            onClick: this.props.onClick ? function (e) {
              e.preventDefault();
              e.stopPropagation();
              _this2.props.onClick();
            } : function () {},
            target: '_blank'
          },
          this.props.title
        ),
        '\xA0',
        this.props.content,
        this.props.children
      );
    }
  }]);

  return TimelineHeader;
}(_react2.default.Component);

TimelineHeader.propTypes = {
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  content: _propTypes2.default.any,
  onClick: _propTypes2.default.func,
  url: _propTypes2.default.string
};

TimelineHeader.defaultProps = {
  onClick: function onClick() {},
  title: '',
  content: ''
};

exports.default = TimelineHeader;
module.exports = exports['default'];
//# sourceMappingURL=timeline-header.js.map
