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

var DropdownList = function (_React$Component) {
  _inherits(DropdownList, _React$Component);

  function DropdownList() {
    _classCallCheck(this, DropdownList);

    return _possibleConstructorReturn(this, (DropdownList.__proto__ || Object.getPrototypeOf(DropdownList)).apply(this, arguments));
  }

  _createClass(DropdownList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        { className: 'dropdown' },
        _react2.default.createElement(
          'a',
          {
            className: 'dropdown-toggle',
            'data-toggle': 'dropdown',
            'aria-expanded': 'false'
          },
          this.props.icon && !this.props.iconRight ? _react2.default.createElement('i', { className: 'fa ' + this.props.icon }) : '',
          this.props.headline && this.props.icon && !this.props.iconRight ? ' ' : '',
          this.props.headline,
          this.props.headline && this.props.icon && this.props.iconRight ? ' ' : '',
          this.props.icon && this.props.iconRight ? _react2.default.createElement('i', { className: 'fa ' + this.props.icon }) : ''
        ),
        _react2.default.createElement(
          'ul',
          { className: 'dropdown-menu' },
          this.props.dropHeader ? _react2.default.createElement(
            'li',
            { className: 'header' },
            this.props.dropHeader
          ) : '',
          this.props.dropContent,
          this.props.children,
          this.props.dropFooter ? _react2.default.createElement(
            'li',
            { className: 'footer' },
            this.props.dropFooter
          ) : ''
        )
      );
    }
  }]);

  return DropdownList;
}(_react2.default.Component);

DropdownList.propTypes = {
  headline: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string]),
  icon: _propTypes2.default.string,
  iconRight: _propTypes2.default.bool,
  dropHeader: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.array, _propTypes2.default.string]),
  dropFooter: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.array, _propTypes2.default.string]),
  dropContent: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.array])
};

DropdownList.defaultProps = {
  headline: '',
  icon: '',
  iconRight: false,
  dropContent: []
};

exports.default = DropdownList;
module.exports = exports['default'];
//# sourceMappingURL=dropdown-list.js.map
