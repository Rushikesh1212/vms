'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _boxTool = require('./box-tool.js');

var _boxTool2 = _interopRequireDefault(_boxTool);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Box = function (_React$Component) {
  _inherits(Box, _React$Component);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).apply(this, arguments));
  }

  _createClass(Box, [{
    key: 'render',
    value: function render() {
      var collapseClass = this.props.collapsed ? ' collapsed-box' : '';
      var solidClass = this.props.solid ? ' box-solid' : '';
      var borderClass = this.props.border ? ' with-border' : '';
      var boxTools = [];
      var xs = this.props.widthXS || this.props.width;
      var sm = this.props.widthSM || xs;
      var md = this.props.widthMD || sm;
      var lg = this.props.widthLG || md;
      var xl = this.props.widthXL || lg;
      var boxToolsContainer = void 0;
      var loadingState = void 0;
      var footer = void 0;
      if (this.props.boxTools) {
        this.props.boxTools.map(function (tool, i) {
          boxTools.push(_react2.default.createElement(_boxTool2.default, { key: i, toolType: tool, containerClass: 'box' }));
        });
        boxToolsContainer = _react2.default.createElement(
          'div',
          { className: 'box-tools pull-right' },
          boxTools
        );
      }
      if (this.props.loading) {
        loadingState = _react2.default.createElement(
          'div',
          { className: 'overlay' },
          _react2.default.createElement('i', { className: 'fa fa-refresh fa-spin' })
        );
      }
      if (this.props.footer) {
        footer = _react2.default.createElement(
          'div',
          { className: 'box-footer' },
          this.props.footer
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'col-xs-' + xs + ' col-sm-' + sm + ' col-md-' + md + ' col-lg-' + lg + ' col-xl-' + xl },
        _react2.default.createElement(
          'div',
          { className: 'box color-palette-box ' + this.props.theme + collapseClass + solidClass },
          this.props.boxTools || this.props.title ? _react2.default.createElement(
            'div',
            { className: 'box-header' + borderClass },
            _react2.default.createElement(
              'h3',
              { className: 'box-title' },
              this.props.title
            ),
            boxToolsContainer
          ) : '',
          _react2.default.createElement(
            'div',
            { className: 'box-body' + (this.props.noPadding ? ' no-padding' : '') },
            this.props.content,
            this.props.children
          ),
          footer,
          loadingState
        )
      );
    }
  }]);

  return Box;
}(_react2.default.Component);

Box.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  widthXS: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  widthSM: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  widthMD: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  widthLG: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  widthXL: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  boxTools: _propTypes2.default.array,
  theme: _propTypes2.default.string,
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  content: _propTypes2.default.string,
  footer: _propTypes2.default.string,
  collapsed: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  solid: _propTypes2.default.bool,
  border: _propTypes2.default.bool,
  noPadding: _propTypes2.default.bool

};
Box.defaultProps = {
  width: 12,
  theme: '',
  title: '',
  content: '',
  collapsed: false,
  loading: false,
  solid: false,
  border: false,
  noPadding: false
};

exports.default = Box;
module.exports = exports['default'];
//# sourceMappingURL=box.js.map
