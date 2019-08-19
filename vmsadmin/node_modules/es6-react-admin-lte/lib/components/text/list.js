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

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      var contents = this.props.items.map(function (item, i) {
        var obj = {};
        var isElement = Object.keys(item).indexOf('type') >= 0;
        if (typeof item === 'string') {
          obj.content = item;
        } else if (!isElement) {
          obj.content = item.content;
          obj.theme = item.theme;
        }
        return !isElement ? _react2.default.createElement(
          'li',
          { key: i, className: obj.theme },
          obj.content
        ) : item;
      });
      var list = this.props.ordered ? _react2.default.createElement(
        'ol',
        {
          id: this.props.id,
          className: (this.props.unstyled ? 'list-unstyled' : '') + ' ' + (this.props.inline ? 'list-inline' : '') + ' ' + (this.props.theme ? this.props.theme : '')
        },
        contents
      ) : _react2.default.createElement(
        'ul',
        {
          id: this.props.id,
          className: (this.props.unstyled ? 'list-unstyled' : '') + ' ' + (this.props.inline ? 'list-inline' : '') + ' ' + (this.props.theme ? this.props.theme : '')
        },
        contents
      );
      return list;
    }
  }]);

  return List;
}(_react2.default.Component);

List.propTypes = {
  id: _propTypes2.default.string,
  theme: _propTypes2.default.string,
  items: _propTypes2.default.array,
  ordered: _propTypes2.default.bool,
  unstyled: _propTypes2.default.bool,
  inline: _propTypes2.default.bool
};

List.defaultProps = {
  items: [],
  ordered: false,
  unstyled: false,
  inline: false
};

exports.default = List;
module.exports = exports['default'];
//# sourceMappingURL=list.js.map
