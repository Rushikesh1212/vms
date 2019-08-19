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

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.state = { activeTab: _this.props.defaultTab };
    _this.changeTab = _this.changeTab.bind(_this);
    return _this;
  }

  _createClass(Tabs, [{
    key: 'changeTab',
    value: function changeTab(id) {
      this.setState({ activeTab: id });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var tabs = this.props.tabs.map(function (tab, t) {
        var activeness = '' + (typeof _this2.state.activeTab === 'number' && _this2.state.activeTab === t || typeof _this2.state.activeTab === 'string' && _this2.state.activeTab === tab.id ? ' active' : ' disabled');
        return _react2.default.createElement(
          'li',
          { className: activeness, key: 'tab-' + t },
          _react2.default.createElement(
            'a',
            {
              href: '#' + tab.id,
              'data-toggle': 'tab',
              onClick: function onClick() {
                _this2.changeTab(tab.id);
                if (tab.onClick) {
                  tab.onClick();
                }
              }
            },
            tab.subject
          )
        );
      });
      var content = this.props.tabs.map(function (tab, t) {
        var activeness = typeof _this2.state.activeTab === 'number' && _this2.state.activeTab === t || typeof _this2.state.activeTab === 'string' && _this2.state.activeTab === tab.id ? ' active' : '';
        return _react2.default.createElement(
          'div',
          { className: 'tab-pane' + activeness, id: tab.id, key: 'tab-pane-' + t },
          tab.content
        );
      });
      var xs = this.props.widthXS || this.props.width;
      var sm = this.props.widthSM || xs;
      var md = this.props.widthMD || sm;
      var lg = this.props.widthLG || md;
      var xl = this.props.widthXL || lg;
      return _react2.default.createElement(
        'div',
        { className: 'col-xs-' + xs + ' col-sm-' + sm + ' col-md-' + md + ' col-lg-' + lg + ' col-xl-' + xl },
        _react2.default.createElement(
          'div',
          { className: 'nav-tabs-custom' },
          _react2.default.createElement(
            'ul',
            { className: 'nav nav-tabs' + (this.props.pullRight ? ' pull-right' : '') + ' ' + this.props.tabTheme },
            tabs,
            this.props.children
          ),
          _react2.default.createElement(
            'div',
            { className: 'tab-content' },
            content
          )
        )
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  widthXS: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  widthSM: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  widthMD: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  widthLG: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  widthXL: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  pullRight: _propTypes2.default.bool,
  tabs: _propTypes2.default.array,
  defaultTab: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  tabTheme: _propTypes2.default.string
};

Tabs.defaultProps = {
  width: 12,
  pullRight: false,
  tabs: [],
  defaultTab: 0,
  tabTheme: 'tab-default'
};

exports.default = Tabs;
module.exports = exports['default'];
//# sourceMappingURL=tabs.js.map
