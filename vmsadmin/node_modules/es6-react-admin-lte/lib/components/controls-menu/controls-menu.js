'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _controlsMenuTab = require('./controls-menu-tab.js');

var _controlsMenuTab2 = _interopRequireDefault(_controlsMenuTab);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlsMenu = function (_React$Component) {
  _inherits(ControlsMenu, _React$Component);

  function ControlsMenu(props) {
    _classCallCheck(this, ControlsMenu);

    var _this = _possibleConstructorReturn(this, (ControlsMenu.__proto__ || Object.getPrototypeOf(ControlsMenu)).call(this, props));

    _this.navHandler = _this.navHandler.bind(_this);
    return _this;
  }

  _createClass(ControlsMenu, [{
    key: 'navHandler',
    value: function navHandler(e) {
      var thisTab = e.currentTarget;
      var allTabs = _reactDom2.default.findDOMNode(this).children[0].children;
      if (thisTab.className.indexOf('active') === -1) {
        thisTab.className = 'active';
        for (var i = 0; i < allTabs.length; i++) {
          if (allTabs[i] !== thisTab) {
            allTabs[i].className = '';
          }
        }
        this.props.children.forEach(function (child, i) {
          if (child.props.id === thisTab.firstElementChild.getAttribute('href').replace('#', '')) {
            document.getElementById(child.props.id).classList.add('active');
          } else {
            document.getElementById(child.props.id).classList.remove('active');
          }
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      for (var i = 0; i < this.props.children.length; i++) {
        if (this.props.children[i].props.id === this.props.tabs[0].name) {
          document.getElementById(this.props.children[i].props.id).classList.add('active');
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var tabNames = this.props.tabs.map(function (tab, i) {
        var tabClass = i === 0 ? 'active' : '';
        return _react2.default.createElement(
          'li',
          { key: tab.name, onClick: _this2.navHandler, className: tabClass },
          _react2.default.createElement(
            'a',
            { href: '#' + tab.name, 'data-toggle': 'tab' },
            _react2.default.createElement('i', { className: 'fa ' + tab.icon })
          )
        );
      });
      return _react2.default.createElement(
        'aside',
        { className: 'control-sidebar ' + this.props.theme },
        _react2.default.createElement(
          'ul',
          { className: 'nav nav-tabs nav-justified control-sidebar-tabs' },
          tabNames
        ),
        _react2.default.createElement(
          'div',
          { className: 'tab-content' },
          this.props.children
        )
      );
    }
  }]);

  return ControlsMenu;
}(_react2.default.Component);

ControlsMenu.propTypes = {
  theme: _propTypes2.default.string,
  tabs: _propTypes2.default.array
};
ControlsMenu.defaultProps = {
  theme: 'control-sidebar-dark',
  tabs: []
};

exports.default = ControlsMenu;
module.exports = exports['default'];
//# sourceMappingURL=controls-menu.js.map
