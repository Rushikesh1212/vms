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

var ControlsMenuTabSection = function (_React$Component) {
  _inherits(ControlsMenuTabSection, _React$Component);

  function ControlsMenuTabSection() {
    _classCallCheck(this, ControlsMenuTabSection);

    return _possibleConstructorReturn(this, (ControlsMenuTabSection.__proto__ || Object.getPrototypeOf(ControlsMenuTabSection)).apply(this, arguments));
  }

  _createClass(ControlsMenuTabSection, [{
    key: 'render',
    value: function render() {
      var content = this.props.content.map(function (chunk, i) {
        return _react2.default.createElement(
          'li',
          { key: i },
          _react2.default.createElement(
            'a',
            {
              href: chunk.link,
              onClick: chunk.onClick ? function (e) {
                e.preventDefault();
                e.stopPropagation();
                chunk.onClick();
              } : function () {}
            },
            _react2.default.createElement('i', { className: 'menu-icon fa ' + chunk.icon + ' ' + chunk.theme }),
            _react2.default.createElement(
              'div',
              { className: 'menu-info' },
              _react2.default.createElement(
                'h4',
                { className: 'control-sidebar-subheading' },
                chunk.heading
              ),
              _react2.default.createElement(
                'p',
                null,
                chunk.description
              ),
              chunk.markup || ''
            )
          )
        );
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { className: 'control-sidebar-heading' },
          this.props.heading
        ),
        _react2.default.createElement(
          'ul',
          { className: 'control-sidebar-menu' },
          content,
          this.props.children
        )
      );
    }
  }]);

  return ControlsMenuTabSection;
}(_react2.default.Component);

ControlsMenuTabSection.propTypes = {
  heading: _propTypes2.default.string,
  content: _propTypes2.default.array
};

ControlsMenuTabSection.defaultProps = {
  heading: '',
  content: []
};

exports.default = ControlsMenuTabSection;
module.exports = exports['default'];
//# sourceMappingURL=controls-menu-tab-section.js.map
