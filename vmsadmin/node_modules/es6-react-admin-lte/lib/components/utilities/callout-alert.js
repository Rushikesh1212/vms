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

var CalloutAlert = function (_React$Component) {
  _inherits(CalloutAlert, _React$Component);

  function CalloutAlert() {
    _classCallCheck(this, CalloutAlert);

    return _possibleConstructorReturn(this, (CalloutAlert.__proto__ || Object.getPrototypeOf(CalloutAlert)).apply(this, arguments));
  }

  _createClass(CalloutAlert, [{
    key: 'render',
    value: function render() {
      var classList = this.props.callout ? 'callout callout-' + this.props.theme : 'alert alert-' + this.props.theme + ' text-left' + (this.props.dismissible ? ' alert-dismissible' : '');
      return _react2.default.createElement(
        'div',
        { className: classList },
        !this.props.callout && this.props.dismissible ? _react2.default.createElement(
          'button',
          { type: 'button', className: 'close', 'data-dismiss': 'alert', 'aria-hidden': 'true' },
          '\xD7'
        ) : '',
        _react2.default.createElement(
          'h4',
          null,
          this.props.icon ? _react2.default.createElement('i', { className: 'fa ' + this.props.icon }) : '',
          this.props.icon && this.props.header ? ' ' : '',
          this.props.header
        ),
        _react2.default.createElement(
          'p',
          null,
          this.props.content
        )
      );
    }
  }]);

  return CalloutAlert;
}(_react2.default.Component);

CalloutAlert.propTypes = {
  theme: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  header: _propTypes2.default.string,
  content: _propTypes2.default.string,
  callout: _propTypes2.default.bool,
  dismissible: _propTypes2.default.bool
};

CalloutAlert.defaultProps = {
  theme: 'success',
  icon: '',
  header: '',
  content: '',
  callout: false,
  dismissible: false
};

exports.default = CalloutAlert;
module.exports = exports['default'];
//# sourceMappingURL=callout-alert.js.map
