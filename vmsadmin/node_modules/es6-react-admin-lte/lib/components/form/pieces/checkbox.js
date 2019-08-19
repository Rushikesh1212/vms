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

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'checkbox ' + this.props.containerClass },
        _react2.default.createElement(
          'label',
          {
            className: 'custom-checkbox ' + this.props.labelClass,
            htmlFor: this.props.id
          },
          _react2.default.createElement('input', {
            type: 'checkbox',
            className: 'custom-control-input ' + this.props.checkClass,
            id: this.props.id,
            name: this.props.id,
            onChange: !this.props.disabled && this.props.onChange ? this.props.onChange : function () {},
            value: this.props.value,
            checked: this.props.checked,
            required: this.props.required,
            disabled: this.props.disabled
          }),
          _react2.default.createElement('span', { className: 'custom-control-indicator' }),
          _react2.default.createElement(
            'span',
            { className: 'custom-control-description ' + this.props.textClass },
            this.props.label
          )
        )
      );
    }
  }]);

  return Checkbox;
}(_react2.default.Component);

Checkbox.propTypes = {
  containerClass: _propTypes2.default.string,
  checkClass: _propTypes2.default.string,
  id: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
  checked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  required: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  labelClass: _propTypes2.default.string,
  textClass: _propTypes2.default.string
};
Checkbox.defaultProps = {
  containerClass: '',
  checkClass: '',
  required: false,
  checked: false,
  label: '',
  labelClass: '',
  textClass: ''
};

exports.default = Checkbox;
module.exports = exports['default'];
//# sourceMappingURL=checkbox.js.map
