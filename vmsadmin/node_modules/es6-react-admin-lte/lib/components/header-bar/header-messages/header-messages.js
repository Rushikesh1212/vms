'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _messageItem = require('./message-item.js');

var _messageItem2 = _interopRequireDefault(_messageItem);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderMessages = function (_React$Component) {
  _inherits(HeaderMessages, _React$Component);

  function HeaderMessages(props) {
    _classCallCheck(this, HeaderMessages);

    var _this = _possibleConstructorReturn(this, (HeaderMessages.__proto__ || Object.getPrototypeOf(HeaderMessages)).call(this, props));

    _this.state = { open: false };
    _this.toggleDropdown = _this.toggleDropdown.bind(_this);
    return _this;
  }

  _createClass(HeaderMessages, [{
    key: 'toggleDropdown',
    value: function toggleDropdown(e) {
      if (e.type === 'blur' && this.state.open || e.type !== 'blur') {
        this.setState({ open: !this.state.open });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var messageList = this.props.messages.map(function (msgDetails, i) {
        return _react2.default.createElement(_messageItem2.default, {
          key: i,
          title: msgDetails.title,
          displayImg: msgDetails.displayImg,
          time: msgDetails.time,
          content: msgDetails.content,
          link: msgDetails.link,
          onClick: msgDetails.onClick
        });
      });
      return _react2.default.createElement(
        'li',
        { className: 'dropdown messages-menu' + (this.state.open ? ' open' : ''), tabIndex: '0', onBlur: this.toggleDropdown },
        _react2.default.createElement(
          'a',
          { className: 'dropdown-toggle', 'data-toggle': 'dropdown-menu', onClick: this.toggleDropdown },
          _react2.default.createElement('i', { className: 'fa fa-envelope-o' }),
          _react2.default.createElement(
            'span',
            { className: 'label label-success' },
            this.props.count || this.props.messages.length
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'dropdown-menu' },
          _react2.default.createElement(
            'li',
            { className: 'header' },
            'You have ',
            this.props.count || this.props.messages.length,
            ' messages'
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'div',
              { className: 'slimScrollDiv' },
              _react2.default.createElement(
                'ul',
                { className: 'menu' },
                messageList
              ),
              _react2.default.createElement('div', { className: 'slimScrollBar' }),
              _react2.default.createElement('div', { className: 'slimScrollRail' })
            )
          ),
          this.props.clickHandler ? _react2.default.createElement(
            'li',
            { className: 'footer' },
            _react2.default.createElement(
              'a',
              { onClick: this.props.clickHandler },
              'See All Messages'
            )
          ) : ''
        )
      );
    }
  }]);

  return HeaderMessages;
}(_react2.default.Component);

HeaderMessages.propTypes = {
  count: _propTypes2.default.number,
  messages: _propTypes2.default.array,
  clickHandler: _propTypes2.default.func
};

HeaderMessages.defaultProps = {
  messages: []
};

exports.default = HeaderMessages;
module.exports = exports['default'];
//# sourceMappingURL=header-messages.js.map
