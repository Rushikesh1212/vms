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

var DList = function (_React$Component) {
  _inherits(DList, _React$Component);

  function DList() {
    _classCallCheck(this, DList);

    return _possibleConstructorReturn(this, (DList.__proto__ || Object.getPrototypeOf(DList)).apply(this, arguments));
  }

  _createClass(DList, [{
    key: 'render',
    value: function render() {
      var contents = this.props.items.map(function (item, i) {
        var listItem = void 0;
        var isElement = Object.keys(item).indexOf('type') >= 0;
        if (!isElement) {
          if (item.dt) {
            listItem = _react2.default.createElement(
              'dt',
              { className: item.theme, key: i },
              item.dt
            );
          }
          if (item.dd) {
            listItem = _react2.default.createElement(
              'dd',
              { className: item.theme, key: i },
              item.dd
            );
          }
        }
        return isElement ? item : listItem;
      });
      return _react2.default.createElement(
        'dl',
        {
          id: this.props.id,
          className: this.props.theme + ' ' + (this.props.horizontal ? 'dl-horizontal' : '')
        },
        contents
      );
    }
  }]);

  return DList;
}(_react2.default.Component);

DList.propTypes = {
  id: _propTypes2.default.string,
  theme: _propTypes2.default.string,
  items: _propTypes2.default.array,
  horizontal: _propTypes2.default.bool
};

DList.defaultProps = {
  items: [],
  horizontal: false
};

exports.default = DList;
module.exports = exports['default'];
//# sourceMappingURL=d-list.js.map
