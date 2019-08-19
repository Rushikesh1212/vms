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

var Accordion = function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion() {
    _classCallCheck(this, Accordion);

    return _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
  }

  _createClass(Accordion, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var content = this.props.panels.map(function (panel, p) {
        return _react2.default.createElement(
          'div',
          { className: 'panel box ' + panel.theme, key: 'panel-' + p },
          _react2.default.createElement(
            'div',
            { className: 'box-header' + (panel.hasBorder ? ' with-border' : '') },
            _react2.default.createElement(
              'h4',
              { className: 'box-title' },
              _react2.default.createElement(
                'a',
                {
                  'data-toggle': 'collapse',
                  'data-parent': '#' + _this2.props.id,
                  href: '#' + panel.id,
                  className: panel.open ? '' : 'collapsed'
                },
                panel.header
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { id: panel.id, className: 'panel-collapse collapse' + (panel.open ? ' in' : '') },
            _react2.default.createElement(
              'div',
              { className: 'box-body' },
              panel.body
            )
          )
        );
      });
      return _react2.default.createElement(
        'div',
        { className: 'box-group', id: this.props.id },
        content
      );
    }
  }]);

  return Accordion;
}(_react2.default.Component);

Accordion.propTypes = {
  id: _propTypes2.default.string.isRequired,
  panels: _propTypes2.default.array
};

Accordion.defaultProps = {
  panels: []
};

exports.default = Accordion;
module.exports = exports['default'];
//# sourceMappingURL=accordion.js.map
