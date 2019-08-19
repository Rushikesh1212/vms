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

var LoadStatus = function (_React$Component) {
  _inherits(LoadStatus, _React$Component);

  function LoadStatus() {
    _classCallCheck(this, LoadStatus);

    return _possibleConstructorReturn(this, (LoadStatus.__proto__ || Object.getPrototypeOf(LoadStatus)).apply(this, arguments));
  }

  _createClass(LoadStatus, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: {
            fontSize: typeof this.props.size === 'number' ? this.props.size + 'px' : this.props.size,
            color: this.props.color
          } },
        _react2.default.createElement('i', { className: 'fa ' + this.props.icon + (this.props.spins ? ' fa-spin' : '') }),
        this.props.message ? _react2.default.createElement(
          'span',
          null,
          '\xA0',
          this.props.message
        ) : ''
      );
    }
  }]);

  return LoadStatus;
}(_react2.default.Component);

LoadStatus.propTypes = {
  message: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  spins: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

LoadStatus.defaultProps = {
  message: '',
  icon: 'fa-refresh',
  spins: false,
  size: '1em',
  color: '#000000'
};

exports.default = LoadStatus;
module.exports = exports['default'];
//# sourceMappingURL=load-status.js.map
