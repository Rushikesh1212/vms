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

var ErrorPage = function (_React$Component) {
  _inherits(ErrorPage, _React$Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, (ErrorPage.__proto__ || Object.getPrototypeOf(ErrorPage)).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'error-page' },
        _react2.default.createElement(
          'h2',
          { className: 'headline ' + this.props.theme },
          this.props.headline
        ),
        _react2.default.createElement(
          'div',
          { className: 'error-content' },
          _react2.default.createElement(
            'h3',
            null,
            this.props.icon ? _react2.default.createElement('i', { className: 'fa ' + this.props.icon + ' ' + this.props.theme }) : '',
            this.props.icon && this.props.description ? ' ' : '',
            this.props.description
          ),
          this.props.children
        )
      );
    }
  }]);

  return ErrorPage;
}(_react2.default.Component);

ErrorPage.propTypes = {
  theme: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  headline: _propTypes2.default.string,
  description: _propTypes2.default.string
};

ErrorPage.defaultProps = {
  theme: 'text-red',
  icon: 'fa-warning',
  headline: '',
  description: ''
};

exports.default = ErrorPage;
module.exports = exports['default'];
//# sourceMappingURL=error-page.js.map
