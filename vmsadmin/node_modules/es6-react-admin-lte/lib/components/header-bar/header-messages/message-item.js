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

var MessageItem = function (_React$Component) {
  _inherits(MessageItem, _React$Component);

  function MessageItem() {
    _classCallCheck(this, MessageItem);

    return _possibleConstructorReturn(this, (MessageItem.__proto__ || Object.getPrototypeOf(MessageItem)).apply(this, arguments));
  }

  _createClass(MessageItem, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: this.props.link, onClick: this.props.onClick },
          _react2.default.createElement(
            'div',
            { className: 'pull-left' },
            _react2.default.createElement('img', { src: this.props.displayImg, className: 'img-circle', alt: 'User image' })
          ),
          _react2.default.createElement(
            'h4',
            null,
            this.props.title,
            this.props.time ? _react2.default.createElement(
              'small',
              null,
              _react2.default.createElement('i', { className: 'fa fa-clock-o' }),
              '\xA0',
              this.props.time
            ) : ''
          ),
          _react2.default.createElement(
            'p',
            null,
            this.props.content
          )
        )
      );
    }
  }]);

  return MessageItem;
}(_react2.default.Component);

MessageItem.propTypes = {
  title: _propTypes2.default.string,
  content: _propTypes2.default.string,
  time: _propTypes2.default.string,
  displayImg: _propTypes2.default.string,
  link: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};
MessageItem.defaultProps = {
  title: '',
  content: '',
  time: '',
  displayImg: ''
};

exports.default = MessageItem;
module.exports = exports['default'];
//# sourceMappingURL=message-item.js.map
