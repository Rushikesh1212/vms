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

var ProgressBar = function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
  }

  _createClass(ProgressBar, [{
    key: 'render',
    value: function render() {
      var percentage = typeof this.props.percent === 'string' && this.props.percent.includes('%') ? this.props.percent : this.props.percent + '%';
      var style = {};
      if (this.props.vertical) {
        style.height = percentage;
      } else {
        style.width = percentage;
      }
      var verticalness = this.props.vertical ? ' vertical' : '';
      var activeness = this.props.active ? ' active' : '';
      var stripedness = this.props.striped ? ' progress-bar-striped' : '';
      var size = this.props.size ? ' ' + (this.props.vertical ? 'progress-' : '') + this.props.size : '';
      var theBar = _react2.default.createElement(
        'div',
        { className: 'progress' + verticalness + activeness + size },
        _react2.default.createElement(
          'div',
          {
            className: 'progress-bar ' + this.props.theme + stripedness,
            role: 'progressbar',
            'aria-valuenow': percentage.replace('%', ''),
            'aria-valuemin': '0',
            'aria-valuemax': '100',
            style: style
          },
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            percentage + ' Complete'
          )
        )
      );
      return this.props.vertical ? theBar : _react2.default.createElement(
        'div',
        { className: 'progress-group' },
        this.props.description ? _react2.default.createElement(
          'div',
          { className: 'progress-text' },
          this.props.description
        ) : '',
        this.props.details ? _react2.default.createElement(
          'div',
          { className: 'progress-number' },
          this.props.details
        ) : '',
        theBar
      );
    }
  }]);

  return ProgressBar;
}(_react2.default.Component);

ProgressBar.propTypes = {
  percent: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  description: _propTypes2.default.string,
  details: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.element]),
  theme: _propTypes2.default.string,
  size: _propTypes2.default.string,
  striped: _propTypes2.default.bool,
  vertical: _propTypes2.default.bool,
  active: _propTypes2.default.bool
};

ProgressBar.defaultProps = {
  theme: 'progress-bar-yellow',
  percent: 0,
  size: '',
  striped: false,
  vertical: false,
  active: false
};

exports.default = ProgressBar;
module.exports = exports['default'];
//# sourceMappingURL=progress-bar.js.map
