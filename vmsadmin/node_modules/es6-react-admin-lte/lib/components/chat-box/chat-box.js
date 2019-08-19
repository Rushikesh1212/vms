'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _commonFunctions = require('../../services/common-functions');

var commonFuncs = _interopRequireWildcard(_commonFunctions);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatBox = function (_React$Component) {
  _inherits(ChatBox, _React$Component);

  function ChatBox(props) {
    _classCallCheck(this, ChatBox);

    var _this = _possibleConstructorReturn(this, (ChatBox.__proto__ || Object.getPrototypeOf(ChatBox)).call(this, props));

    _this.state = { message: '' };
    _this.toggleCollapse = _this.toggleCollapse.bind(_this);
    _this.removeBox = _this.removeBox.bind(_this);
    _this.toggleChat = _this.toggleChat.bind(_this);
    _this.onSendMessage = _this.onSendMessage.bind(_this);
    _this.isContacts = _this.isContacts.bind(_this);
    return _this;
  }

  _createClass(ChatBox, [{
    key: 'toggleCollapse',
    value: function toggleCollapse(e) {
      var box = _reactDom2.default.findDOMNode(this).children[0];
      var boxBody = _reactDom2.default.findDOMNode(this).children[0].children[1];
      var icon = e.currentTarget.children[0];
      commonFuncs.toggleBoxCollapse(box, boxBody, icon);
    }
  }, {
    key: 'removeBox',
    value: function removeBox() {
      var box = _reactDom2.default.findDOMNode(this).children[0];
      commonFuncs.removeBox(box);
    }
  }, {
    key: 'toggleChat',
    value: function toggleChat() {
      var box = _reactDom2.default.findDOMNode(this).children[0];
      var classy = ' direct-chat-contacts-open';
      if (box.className.indexOf(classy) >= 0) {
        box.className = box.className.replace(classy, '');
      } else {
        box.className = '' + box.className + classy;
      }
    }
  }, {
    key: 'isContacts',
    value: function isContacts() {
      var hasContactChild = false;
      _react2.default.Children.forEach(this.props.children, function (child) {
        if (('' + child.type).includes('Contacts')) {
          hasContactChild = true;
        }
      });
      return this.props.children && hasContactChild;
    }
  }, {
    key: 'onSendMessage',
    value: function onSendMessage(e) {
      e.preventDefault();
      e.stopPropagation();
      this.props.onSubmit(this.state.message);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var borderClass = this.props.border === true ? 'box-solid' : '';
      return _react2.default.createElement(
        'div',
        { className: 'col-md-' + this.props.width },
        _react2.default.createElement(
          'div',
          { className: 'box direct-chat ' + this.props.headerTheme + ' ' + this.props.chatTheme + ' ' + borderClass },
          _react2.default.createElement(
            'div',
            { className: 'box-header with-border' },
            _react2.default.createElement(
              'h3',
              { className: 'box-title' },
              this.props.title
            ),
            _react2.default.createElement(
              'div',
              { className: 'box-tools pull-right' },
              this.props.notifications > 0 ? _react2.default.createElement(
                'span',
                { 'data-toggle': 'tooltip', title: '', className: 'badge ' + this.props.notificationTheme, 'data-original-title': this.props.notifications + ' New Messages' },
                this.props.notifications
              ) : '',
              this.isContacts() ? _react2.default.createElement(
                'button',
                { className: 'btn btn-box-tool', 'data-toggle': 'tooltip', title: '', 'data-widget': 'chat-pane-toggle', 'data-original-title': 'Contacts', onClick: this.toggleChat },
                _react2.default.createElement('i', { className: 'fa fa-comments' })
              ) : '',
              _react2.default.createElement(
                'button',
                { className: 'btn btn-box-tool', 'data-toggle': 'collapse', onClick: this.toggleCollapse },
                _react2.default.createElement('i', { className: 'fa fa-minus' })
              ),
              _react2.default.createElement(
                'button',
                { className: 'btn btn-box-tool', 'data-toggle': 'remove', onClick: this.removeBox },
                _react2.default.createElement('i', { className: 'fa fa-times' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'box-body' },
            this.props.children
          ),
          _react2.default.createElement(
            'div',
            { className: 'box-footer' },
            _react2.default.createElement(
              'form',
              { noValidate: true, onSubmit: this.onSendMessage },
              _react2.default.createElement('input', {
                type: 'text',
                name: 'message',
                placeholder: 'Type message...',
                className: 'form-control',
                value: this.state.message,
                onChange: function onChange(e) {
                  _this2.setState({ message: e.currentTarget.value });
                }
              }),
              _react2.default.createElement(
                'span',
                { className: 'input-group-btn' },
                _react2.default.createElement(
                  'button',
                  {
                    type: 'button',
                    className: 'btn btn-flat ' + this.props.buttonTheme,
                    onClick: this.onSendMessage
                  },
                  'Send'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ChatBox;
}(_react2.default.Component);

ChatBox.propTypes = {
  width: _propTypes2.default.number,
  border: _propTypes2.default.bool,
  headerTheme: _propTypes2.default.string,
  notificationTheme: _propTypes2.default.string,
  chatTheme: _propTypes2.default.string,
  buttonTheme: _propTypes2.default.string,
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  notifications: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onSubmit: _propTypes2.default.func
};
ChatBox.defaultProps = {
  width: 3,
  border: false,
  headerTheme: 'box-primary',
  notificationTheme: 'bg-light-blue',
  chatTheme: 'direct-chat-primary',
  buttonTheme: 'btn-primary',
  title: 'Chat Box',
  notifications: 0,
  onSubmit: function onSubmit() {}
};

exports.default = ChatBox;
module.exports = exports['default'];
//# sourceMappingURL=chat-box.js.map
