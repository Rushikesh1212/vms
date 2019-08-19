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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavSidebarMenuItem = function (_React$Component) {
  _inherits(NavSidebarMenuItem, _React$Component);

  function NavSidebarMenuItem(props) {
    _classCallCheck(this, NavSidebarMenuItem);

    var _this = _possibleConstructorReturn(this, (NavSidebarMenuItem.__proto__ || Object.getPrototypeOf(NavSidebarMenuItem)).call(this, props));

    _this.state = { classes: '' };
    _this.checkHeaderType = _this.checkHeaderType.bind(_this);
    _this.generateContent = _this.generateContent.bind(_this);
    _this.dropHandler = _this.dropHandler.bind(_this);
    return _this;
  }

  _createClass(NavSidebarMenuItem, [{
    key: 'checkHeaderType',
    value: function checkHeaderType() {
      var multiViewer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (this.props.isHeader) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            null,
            this.props.heading
          ),
          multiViewer || this.props.labels.length <= 0 ? '' : _react2.default.createElement(
            'span',
            { className: 'pull-right-container' },
            this.props.labels
          ),
          multiViewer
        );
      }
      return _react2.default.createElement(
        'a',
        { href: this.props.link },
        _react2.default.createElement('i', { className: 'fa ' + this.props.icon + ' text-center' }),
        '\xA0',
        _react2.default.createElement(
          'span',
          null,
          this.props.heading
        ),
        multiViewer || this.props.labels.length <= 0 ? '' : _react2.default.createElement(
          'span',
          { className: 'pull-right-container' },
          this.props.labels
        ),
        multiViewer
      );
    }
  }, {
    key: 'generateContent',
    value: function generateContent() {
      var classType = [];
      var header = '';
      var content = '';
      if (this.props.isHeader) {
        classType.push('header');
      }
      if (this.props.children) {
        classType.push('treeview');
        var multiViewer = _react2.default.createElement(
          'span',
          { className: 'pull-right-container' },
          _react2.default.createElement('i', { className: 'fa fa-angle-left pull-right' })
        );
        header = this.checkHeaderType(multiViewer);
        content = _react2.default.createElement(
          'ul',
          { className: 'treeview-menu' },
          this.props.children
        );
      } else {
        header = this.checkHeaderType();
      }
      return {
        header: header,
        content: content,
        classType: classType
      };
    }
  }, {
    key: 'dropHandler',
    value: function dropHandler(e) {
      var thisList = _reactDom2.default.findDOMNode(this);
      var tabButton = thisList.children[0].children[thisList.children[0].children.length - 1].children[0];
      if (e.target === thisList.children[0] || e.target === thisList.children[0].children[thisList.children[0].children.length - 1].children[0]) {
        //  If what the user clicks is the same as the drop-down list item's header area, or it's first child's last child's child (the drop-down icon)
        if (thisList.className.indexOf('active') === -1) {
          tabButton.classList.remove('fa-angle-left');
          tabButton.classList.add('fa-angle-down');
          (0, _jquery2.default)(thisList.children[1]).slideDown(500, 'swing', function () {
            thisList.classList.add('active');
            thisList.children[1].classList.add('menu-open');
          });
        } else {
          tabButton.classList.remove('fa-angle-down');
          tabButton.classList.add('fa-angle-left');
          (0, _jquery2.default)(thisList.children[1]).slideUp(500, 'swing', function () {
            thisList.classList.remove('active');
            thisList.children[1].classList.remove('menu-open');
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var content = this.generateContent();
      var clickHandler = this.props.children ? this.dropHandler : this.props.onClick;
      return _react2.default.createElement(
        'li',
        { className: content.classType.join(' '), onClick: clickHandler },
        content.header,
        content.content
      );
    }
  }]);

  return NavSidebarMenuItem;
}(_react2.default.Component);

NavSidebarMenuItem.propTypes = {
  heading: _propTypes2.default.string,
  link: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  isHeader: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  labels: _propTypes2.default.array
};

NavSidebarMenuItem.defaultProps = {
  heading: '',
  isHeader: false,
  icon: '',
  onClick: function onClick() {},
  labels: []
};

exports.default = NavSidebarMenuItem;
module.exports = exports['default'];
//# sourceMappingURL=nav-sidebar-menu-item.js.map
