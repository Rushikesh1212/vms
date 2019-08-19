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

var SocialInfo = function (_React$Component) {
  _inherits(SocialInfo, _React$Component);

  function SocialInfo() {
    _classCallCheck(this, SocialInfo);

    return _possibleConstructorReturn(this, (SocialInfo.__proto__ || Object.getPrototypeOf(SocialInfo)).apply(this, arguments));
  }

  _createClass(SocialInfo, [{
    key: 'render',
    value: function render() {
      var position = '';
      switch (this.props.position) {
        case 'left':
        case 'pull-left':
          position = 'pull-left';
          break;
        default:
          position = 'pull-right';
      }
      return _react2.default.createElement(
        'span',
        { className: 'text-muted ' + position },
        this.props.info
      );
    }
  }]);

  return SocialInfo;
}(_react2.default.Component);

SocialInfo.propTypes = {
  info: _propTypes2.default.string,
  position: _propTypes2.default.string
};
SocialInfo.defaultProps = {
  info: '',
  position: 'pull-right'
};

exports.default = SocialInfo;
module.exports = exports['default'];
//# sourceMappingURL=social-info.js.map
