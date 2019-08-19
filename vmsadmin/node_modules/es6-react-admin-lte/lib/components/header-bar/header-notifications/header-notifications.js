'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _notificationItem = require('./notification-item.js');

var _notificationItem2 = _interopRequireDefault(_notificationItem);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderNotifications = function (_React$Component) {
  _inherits(HeaderNotifications, _React$Component);

  function HeaderNotifications(props) {
    _classCallCheck(this, HeaderNotifications);

    var _this = _possibleConstructorReturn(this, (HeaderNotifications.__proto__ || Object.getPrototypeOf(HeaderNotifications)).call(this, props));

    _this.state = { open: false };
    _this.toggleDropdown = _this.toggleDropdown.bind(_this);
    return _this;
  }

  _createClass(HeaderNotifications, [{
    key: 'toggleDropdown',
    value: function toggleDropdown(e) {
      if (e.type === 'blur' && this.state.open || e.type !== 'blur') {
        this.setState({ open: !this.state.open });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var notificationList = this.props.notifications.map(function (notificationDetails, i) {
        return _react2.default.createElement(_notificationItem2.default, {
          key: i,
          icon: notificationDetails.icon,
          content: notificationDetails.content,
          link: notificationDetails.link,
          onClick: notificationDetails.onClick
        });
      });
      return _react2.default.createElement(
        'li',
        { className: 'dropdown notifications-menu' + (this.state.open ? ' open' : ''), tabIndex: '0', onBlur: this.toggleDropdown },
        _react2.default.createElement(
          'a',
          { className: 'dropdown-toggle', 'data-toggle': 'dropdown-menu', onClick: this.toggleDropdown },
          _react2.default.createElement('i', { className: 'fa fa-bell-o' }),
          _react2.default.createElement(
            'span',
            { className: 'label label-warning' },
            this.props.count || this.props.notifications.length
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'dropdown-menu' },
          _react2.default.createElement(
            'li',
            { className: 'header' },
            'You have ',
            this.props.count || this.props.notifications.length,
            ' notifications'
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
                notificationList
              ),
              _react2.default.createElement('div', { className: 'slimScrollBar' }),
              _react2.default.createElement('div', { className: 'slimScrollRail' })
            )
          ),
          this.props.clickHandler ? _react2.default.createElement(
            'li',
            { className: 'footer', onClick: this.props.clickHandler },
            _react2.default.createElement(
              'a',
              null,
              'View all'
            )
          ) : ''
        )
      );
    }
  }]);

  return HeaderNotifications;
}(_react2.default.Component);

HeaderNotifications.propTypes = {
  count: _propTypes2.default.number,
  notifications: _propTypes2.default.array,
  clickHandler: _propTypes2.default.func
};

HeaderNotifications.defaultProps = {
  notifications: []
};

exports.default = HeaderNotifications;
module.exports = exports['default'];
//# sourceMappingURL=header-notifications.js.map
