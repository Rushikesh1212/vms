'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _commonFunctions = require('../../services/common-functions');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderBar = function (_React$Component) {
  _inherits(HeaderBar, _React$Component);

  function HeaderBar() {
    _classCallCheck(this, HeaderBar);

    return _possibleConstructorReturn(this, (HeaderBar.__proto__ || Object.getPrototypeOf(HeaderBar)).apply(this, arguments));
  }

  _createClass(HeaderBar, [{
    key: 'pushMenu',
    value: function pushMenu() {
      var body = document.body;
      if (body.clientWidth > 786) {
        (0, _commonFunctions.toggleDropdown)(body, 'sidebar-collapse');
      } else {
        (0, _commonFunctions.toggleDropdown)(body, 'sidebar-open');
      }
    }
  }, {
    key: 'getLogo',
    value: function getLogo() {
      var logoType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'main';

      var logoClass = logoType !== 'mini' ? 'logo-lg' : 'logo-mini';
      var logoFile = logoType !== 'mini' ? this.props.clientLogo : this.props.clientLogoMini;
      var altLogo = logoType !== 'mini' ? this.props.clientName : this.props.clientNameAbbr;
      return _react2.default.createElement(
        'span',
        { className: logoClass, style: { height: '100%', position: 'relative' } },
        logoFile ? _react2.default.createElement('img', { src: logoFile, alt: 'The Brand.', style: { maxWidth: '90%', maxHeight: '90%', width: 'auto', height: 'auto' } }) : altLogo
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var logo = this.getLogo();
      var logoMini = this.props.clientNameAbbr || this.props.clientLogoMini ? this.getLogo('mini') : '';
      return _react2.default.createElement(
        'header',
        { className: 'main-header' },
        _react2.default.createElement(
          'a',
          {
            className: 'logo',
            href: this.props.logoLink,
            onClick: this.props.onLogoClick ? function (e) {
              e.preventDefault();
              e.stopPropagation();
              _this2.props.onLogoClick();
            } : function () {}
          },
          logoMini,
          logo
        ),
        _react2.default.createElement(
          'nav',
          { className: 'navbar navbar-static-top', role: 'navigation' },
          _react2.default.createElement(
            'a',
            { className: 'sidebar-toggle', 'data-toggle': 'offcanvas', role: 'button', onClick: this.pushMenu },
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              'Toggle navigation'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'navbar-custom-menu' },
            _react2.default.createElement(
              'ul',
              { className: 'nav navbar-nav' },
              this.props.children
            )
          )
        )
      );
    }
  }]);

  return HeaderBar;
}(_react2.default.Component);

HeaderBar.propTypes = {
  clientName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  clientNameAbbr: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  clientLogo: _propTypes2.default.string,
  clientLogoMini: _propTypes2.default.string,
  logoLink: _propTypes2.default.string,
  onLogoClick: _propTypes2.default.func
};

HeaderBar.defaultProps = {
  clientName: _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'b',
      null,
      'Admin'
    ),
    'LTE'
  ),
  clientNameAbbr: _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'b',
      null,
      'A'
    ),
    'LT'
  ),
  clientLogo: '',
  clientLogoMini: ''
};

exports.default = HeaderBar;
module.exports = exports['default'];
//# sourceMappingURL=header-bar.js.map
