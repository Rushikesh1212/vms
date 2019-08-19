'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _navSidebarUserPanel = require('./nav-sidebar-user-panel.js');

var _navSidebarUserPanel2 = _interopRequireDefault(_navSidebarUserPanel);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavSidebar = function (_React$Component) {
  _inherits(NavSidebar, _React$Component);

  function NavSidebar(props) {
    _classCallCheck(this, NavSidebar);

    var _this = _possibleConstructorReturn(this, (NavSidebar.__proto__ || Object.getPrototypeOf(NavSidebar)).call(this, props));

    _this.getBetterChildren = _this.getBetterChildren.bind(_this);
    return _this;
  }

  _createClass(NavSidebar, [{
    key: 'getBetterChildren',
    value: function getBetterChildren() {
      var _this2 = this;

      if (this.props.children) {
        return _react2.default.Children.map(this.props.children, function (child, i) {
          if (child.type === _navSidebarUserPanel2.default) {
            return _react2.default.cloneElement(child, { passErr: _this2.props.passErr, key: i });
          } else {
            return _react2.default.cloneElement(child, { key: i });
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var betterChildren = this.getBetterChildren();
      return _react2.default.createElement(
        'aside',
        { className: 'main-sidebar' + (this.props.lightTheme ? ' main-sidebar-light' : '') },
        _react2.default.createElement(
          'section',
          { className: 'sidebar' },
          betterChildren
        )
      );
    }
  }]);

  return NavSidebar;
}(_react2.default.Component);

NavSidebar.propTypes = {
  passErr: _propTypes2.default.string,
  lightTheme: _propTypes2.default.bool
};

NavSidebar.defaultProps = {
  lightTheme: false
};

exports.default = NavSidebar;
module.exports = exports['default'];
//# sourceMappingURL=nav-sidebar.js.map
