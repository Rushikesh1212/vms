'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _commonFunctions = require('../../services/common-functions');

var commonFuncs = _interopRequireWildcard(_commonFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoxTool = function (_React$Component) {
  _inherits(BoxTool, _React$Component);

  function BoxTool(props) {
    _classCallCheck(this, BoxTool);

    var _this = _possibleConstructorReturn(this, (BoxTool.__proto__ || Object.getPrototypeOf(BoxTool)).call(this, props));

    _this.toggleCollapse = _this.toggleCollapse.bind(_this);
    _this.removeBox = _this.removeBox.bind(_this);
    return _this;
  }

  _createClass(BoxTool, [{
    key: 'toggleCollapse',
    value: function toggleCollapse(e) {
      var box = commonFuncs.findClosestElement(e.currentTarget, this.props.containerClass);
      var boxBody = box.children[1];
      var icon = e.currentTarget.children[0];
      commonFuncs.toggleBoxCollapse(box, boxBody, icon);
    }
  }, {
    key: 'removeBox',
    value: function removeBox(e) {
      var box = commonFuncs.findClosestElement(e.currentTarget, this.props.containerClass);
      commonFuncs.removeBox(box);
    }
  }, {
    key: 'render',
    value: function render() {
      var button = '';
      var self = this;
      switch (this.props.toolType) {
        case 'expand':
          return _react2.default.createElement(
            'button',
            { className: 'btn btn-box-tool', 'data-widget': 'expand', onClick: self.toggleCollapse },
            _react2.default.createElement('i', { className: 'fa fa-plus' })
          );
        case 'collapse':
          return _react2.default.createElement(
            'button',
            { className: 'btn btn-box-tool', 'data-widget': 'collapse', onClick: self.toggleCollapse },
            _react2.default.createElement('i', { className: 'fa fa-minus' })
          );
        case 'remove':
          return _react2.default.createElement(
            'button',
            { className: 'btn btn-box-tool', 'data-widget': 'remove', onClick: self.removeBox },
            _react2.default.createElement('i', { className: 'fa fa-times' })
          );
      }
    }
  }]);

  return BoxTool;
}(_react2.default.Component);

exports.default = BoxTool;
module.exports = exports['default'];
//# sourceMappingURL=box-tool.js.map
