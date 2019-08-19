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

var Theme = function (_React$Component) {
  _inherits(Theme, _React$Component);

  function Theme() {
    _classCallCheck(this, Theme);

    return _possibleConstructorReturn(this, (Theme.__proto__ || Object.getPrototypeOf(Theme)).apply(this, arguments));
  }

  _createClass(Theme, [{
    key: 'darkenColor',
    value: function darkenColor(color) {
      var newColor = color.indexOf('rgb') < 0 ? color.replace('#', '') : color.replace('rgba(', '').replace('rgb(', '').replace(')', '').replace(' ', '').split(',');
      if (typeof newColor === 'string') {
        newColor = '#' + newColor.split('').map(function (clr, c, clrList) {
          var numcol = Number(clr);
          switch (clr.toLowerCase()) {
            case 'a':
              return '9';
            case 'b':
              return 'a';
            case 'c':
              return 'b';
            case 'd':
              return 'c';
            case 'e':
              return 'd';
            case 'f':
              return 'e';
            default:
              return numcol > 0 ? numcol - 1 : numcol;
          }
        }).join('');
      } else {
        newColor = newColor.length < 4 ? 'rgb(' + newColor.map(function (clr) {
          return Number(clr) >= 10 ? Number(clr) - 10 : 0;
        }).join(', ') + ')' : 'rgba(' + newColor.map(function (clr, c) {
          if (c >= 3) {
            return clr;
          }
          return Number(clr) >= 5 ? Number(clr) - 5 : 0;
        }).join(', ') + ')';
      }
      return newColor;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var styleRef = document.createElement('STYLE');
      styleRef.innerHTML = '\n       .skin-' + this.props.name + ' .main-header .navbar {\n         background-color: ' + this.props.primary + ';\n       }\n       .skin-' + this.props.name + ' .main-header .navbar .nav > li > a {\n         color: ' + (this.props.hasDarkText ? '#333' : '#fff') + ';\n       }\n       .skin-' + this.props.name + ' .main-header .navbar .nav > li > a:hover,\n       .skin-' + this.props.name + ' .main-header .navbar .nav > li > a:active,\n       .skin-' + this.props.name + ' .main-header .navbar .nav > li > a:focus,\n       .skin-' + this.props.name + ' .main-header .navbar .nav .open > a,\n       .skin-' + this.props.name + ' .main-header .navbar .nav .open > a:hover,\n       .skin-' + this.props.name + ' .main-header .navbar .nav .open > a:focus,\n       .skin-' + this.props.name + ' .main-header .navbar .nav > .active > a {\n         background: rgba(0, 0, 0, 0.1);\n         color: ' + (this.props.hasDarkText ? '#999' : '#f6f6f6') + ';\n       }\n       .skin-' + this.props.name + ' .main-header .navbar .sidebar-toggle {\n         color: ' + (this.props.hasDarkText ? '#333' : '#fff') + ';\n       }\n       .skin-' + this.props.name + ' .main-header .navbar .sidebar-toggle:hover {\n         color: ' + (this.props.hasDarkText ? '#999' : '#f6f6f6') + ';\n         background: rgba(0, 0, 0, 0.1);\n       }\n       .skin-' + this.props.name + ' .main-header .navbar .sidebar-toggle {\n         color: ' + (this.props.hasDarkText ? '#333' : '#fff') + ';\n       }\n       .skin-' + this.props.name + ' .main-header .navbar .sidebar-toggle:hover {\n         background-color: ' + this.props.secondary + ';\n       }\n       @media (max-width: 767px) {\n         .skin-' + this.props.name + ' .main-header .navbar .dropdown-menu li.divider {\n           background-color: rgba(0, 0, 0, 0.1);\n         }\n         .skin-' + this.props.name + ' .main-header .navbar .dropdown-menu li a {\n           color: #333;\n         }\n       }\n       .skin-' + this.props.name + ' .main-header .logo {\n         background-color: ' + this.props.secondary + ';\n         color: ' + (this.props.hasDarkText ? '#333' : '#fff') + ';\n         border-bottom: 0 solid transparent;\n       }\n       .skin-' + this.props.name + ' .main-header .logo:hover {\n         background-color: ' + this.darkenColor(this.props.secondary) + ';\n       }\n       .skin-' + this.props.name + ' .main-header li.user-header {\n         background-color: ' + this.props.primary + ';\n       }\n       .skin-' + this.props.name + ' .content-header {\n         background: transparent;\n       }\n       .skin-' + this.props.name + ' .wrapper,\n       .skin-' + this.props.name + ' .main-sidebar,\n       .skin-' + this.props.name + ' .left-side {\n         background-color: #222d32;\n       }\n       .skin-' + this.props.name + ' .user-panel > .info,\n       .skin-' + this.props.name + ' .user-panel > .info > a {\n         color: ' + (this.props.hasDarkText ? '#333' : '#fff') + ';\n       }\n       .skin-' + this.props.name + ' .sidebar-menu > li.header {\n         color: #4b646f;\n         background: #1a2226;\n       }\n       .skin-' + this.props.name + ' .sidebar-menu > li > a {\n         border-left: 3px solid transparent;\n       }\n       .skin-' + this.props.name + ' .sidebar-menu > li:hover > a,\n       .skin-' + this.props.name + ' .sidebar-menu > li.active > a {\n         color: #fff;\n         background: #1e282c;\n         border-left-color: ' + this.props.primary + ';\n       }\n       .skin-' + this.props.name + ' .main-sidebar-light { background-color: #f9f9f9; }\n       .skin-' + this.props.name + ' .main-sidebar-light > .sidebar .sidebar-menu > li a:hover,\n       .skin-' + this.props.name + ' .main-sidebar-light > .sidebar .sidebar-menu > li.treeview.active a {\n         border-left-color: ' + this.props.primary + ';\n       }\n       .skin-' + this.props.name + ' .sidebar-menu > li > .treeview-menu {\n         margin: 0 1px;\n         background: #2c3b41;\n       }\n       .skin-' + this.props.name + ' .sidebar a {\n         color: #b8c7ce;\n       }\n       .skin-' + this.props.name + ' .sidebar a:hover {\n         text-decoration: none;\n       }\n       .skin-' + this.props.name + ' .treeview-menu > li > a {\n         color: #8aa4af;\n       }\n       .skin-' + this.props.name + ' .treeview-menu > li.active > a,\n       .skin-' + this.props.name + ' .treeview-menu > li > a:hover {\n         color: #fff;\n       }\n       .skin-' + this.props.name + ' .sidebar-form {\n         border-radius: 3px;\n         border: 1px solid #374850;\n         margin: 10px 10px;\n       }\n       .skin-' + this.props.name + ' .sidebar-form input[type="text"],\n       .skin-' + this.props.name + ' .sidebar-form .btn {\n         box-shadow: none;\n         background-color: #374850;\n         border: 1px solid transparent;\n         height: 35px;\n       }\n       .skin-' + this.props.name + ' .sidebar-form input[type="text"] {\n         color: #666;\n         border-top-left-radius: 2px;\n         border-top-right-radius: 0;\n         border-bottom-right-radius: 0;\n         border-bottom-left-radius: 2px;\n       }\n       .skin-' + this.props.name + ' .sidebar-form input[type="text"]:focus,\n       .skin-' + this.props.name + ' .sidebar-form input[type="text"]:focus + .input-group-btn .btn {\n         background-color: #fff;\n         color: #666;\n       }\n       .skin-' + this.props.name + ' .sidebar-form input[type="text"]:focus + .input-group-btn .btn {\n         border-left-color: #fff;\n       }\n       .skin-' + this.props.name + ' .sidebar-form .btn {\n         color: #999;\n         border-top-left-radius: 0;\n         border-top-right-radius: 2px;\n         border-bottom-right-radius: 2px;\n         border-bottom-left-radius: 0;\n       }\n       ' + this.props.specialStyles + '\n    ';
      document.head.appendChild(styleRef);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Theme;
}(_react2.default.Component);

Theme.propTypes = {
  name: _propTypes2.default.string.isRequired,
  primary: _propTypes2.default.string,
  secondary: _propTypes2.default.string,
  hasDarkText: _propTypes2.default.bool,
  specialStyles: _propTypes2.default.string
};

Theme.defaultProps = {
  hasDarkText: false,
  primary: '#3c8dbc',
  secondary: '#357ca5',
  specialStyles: ''
};

exports.default = Theme;
module.exports = exports['default'];
//# sourceMappingURL=theme.js.map
