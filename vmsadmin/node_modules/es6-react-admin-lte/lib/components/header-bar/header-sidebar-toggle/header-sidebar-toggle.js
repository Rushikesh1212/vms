'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _commonFunctions = require('../../../services/common-functions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderSidebarToggle = function (_React$Component) {
  _inherits(HeaderSidebarToggle, _React$Component);

  function HeaderSidebarToggle() {
    _classCallCheck(this, HeaderSidebarToggle);

    return _possibleConstructorReturn(this, (HeaderSidebarToggle.__proto__ || Object.getPrototypeOf(HeaderSidebarToggle)).apply(this, arguments));
  }

  _createClass(HeaderSidebarToggle, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { 'data-toggle': 'control-sidebar', onClick: function onClick() {
              (0, _commonFunctions.toggleDropdown)(document.getElementsByClassName('control-sidebar')[0], 'control-sidebar-open');
            } },
          _react2.default.createElement('i', { className: 'fa fa-gears' })
        )
      );
    }
  }]);

  return HeaderSidebarToggle;
}(_react2.default.Component);

exports.default = HeaderSidebarToggle;
module.exports = exports['default'];
//# sourceMappingURL=header-sidebar-toggle.js.map
