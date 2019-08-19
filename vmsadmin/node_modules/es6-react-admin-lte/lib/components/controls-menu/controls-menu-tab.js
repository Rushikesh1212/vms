'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _controlsMenuTabSection = require('./controls-menu-tab-section.js');

var _controlsMenuTabSection2 = _interopRequireDefault(_controlsMenuTabSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlsMenuTab = function (_React$Component) {
  _inherits(ControlsMenuTab, _React$Component);

  function ControlsMenuTab(props) {
    _classCallCheck(this, ControlsMenuTab);

    var _this = _possibleConstructorReturn(this, (ControlsMenuTab.__proto__ || Object.getPrototypeOf(ControlsMenuTab)).call(this, props));

    _this.getBetterChildren = _this.getBetterChildren.bind(_this);
    _this.alertParentOfError = _this.alertParentOfError.bind(_this);
    return _this;
  }

  _createClass(ControlsMenuTab, [{
    key: 'alertParentOfError',
    value: function alertParentOfError(xhr, status, err) {
      if (this.props.passErr) {
        this.props.passErr(xhr, status, err);
      } else {
        console.error(xhr, status, err.toString());
      }
    }
  }, {
    key: 'getBetterChildren',
    value: function getBetterChildren() {
      var _this2 = this;

      if (this.props.children) {
        return _react2.default.Children.map(this.props.children, function (child, i) {
          if (child.type === _controlsMenuTabSection2.default) {
            return _react2.default.cloneElement(child, { passErr: _this2.alertParentOfError });
          }
          return child;
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'tab-pane', id: this.props.id },
        this.getBetterChildren()
      );
    }
  }]);

  return ControlsMenuTab;
}(_react2.default.Component);

exports.default = ControlsMenuTab;
module.exports = exports['default'];
//# sourceMappingURL=controls-menu-tab.js.map
