'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Breadcrumbs = function (_React$Component) {
  _inherits(Breadcrumbs, _React$Component);

  function Breadcrumbs(props) {
    _classCallCheck(this, Breadcrumbs);

    var _this = _possibleConstructorReturn(this, (Breadcrumbs.__proto__ || Object.getPrototypeOf(Breadcrumbs)).call(this, props));

    _this.populateThatCrumb = _this.populateThatCrumb.bind(_this);
    return _this;
  }

  _createClass(Breadcrumbs, [{
    key: 'populateThatCrumb',
    value: function populateThatCrumb() {
      var url = location.pathname;
      var pathnames = url.split("/");
      pathnames.shift();
      var path = '/';
      return pathnames.map(function (data, i) {
        var breadClass = 'breadcrumb-item';
        if (i + 1 === pathnames.length) {
          breadClass += " active";
        }
        path += data + '/';
        if (data === 'index.html') {
          data = '#';
          path = '#';
        }
        return _react2.default.createElement(
          'li',
          { key: i, className: breadClass },
          _react2.default.createElement(
            'a',
            { href: location.hostname + path },
            data
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var pathData = this.populateThatCrumb();
      return _react2.default.createElement(
        'ol',
        { className: 'breadcrumb' },
        pathData
      );
    }
  }]);

  return Breadcrumbs;
}(_react2.default.Component);

Breadcrumbs.propTypes = {};
Breadcrumbs.defaultProps = {};

exports.default = Breadcrumbs;
module.exports = exports['default'];
//# sourceMappingURL=breadcrumbs.js.map
