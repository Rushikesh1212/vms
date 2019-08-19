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

var SocialButton = function (_React$Component) {
  _inherits(SocialButton, _React$Component);

  function SocialButton() {
    _classCallCheck(this, SocialButton);

    return _possibleConstructorReturn(this, (SocialButton.__proto__ || Object.getPrototypeOf(SocialButton)).apply(this, arguments));
  }

  _createClass(SocialButton, [{
    key: 'render',
    value: function render() {
      var position = void 0;
      switch (this.props.position) {
        case 'left':
        case 'pull-left':
          position = 'pull-left';
          break;
        case 'right':
        case 'pull-right':
          position = 'pull-right';
          break;
        default:
          position = '';
      }
      var buttonClass = void 0,
          buttonName = void 0;
      if (this.props.type === 'like') {
        buttonClass = "fa-thumbs-o-up";
        buttonName = "Like";
      } else if (this.props.type === 'share') {
        buttonClass = "fa-share";
        buttonName = "Share";
      }
      return _react2.default.createElement(
        'button',
        { className: 'btn btn-xs ' + position + ' ' + this.props.theme },
        _react2.default.createElement('i', { className: 'fa ' + buttonClass }),
        buttonName
      );
    }
  }]);

  return SocialButton;
}(_react2.default.Component);

SocialButton.propTypes = {
  position: _propTypes2.default.string,
  theme: _propTypes2.default.string,
  type: _propTypes2.default.string
};
SocialButton.defaultProps = {
  position: 'left',
  theme: 'btn-default',
  type: 'like'
};

exports.default = SocialButton;
module.exports = exports['default'];
//# sourceMappingURL=social-button.js.map
