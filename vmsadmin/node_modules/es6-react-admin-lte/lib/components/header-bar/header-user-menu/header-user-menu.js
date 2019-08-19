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

var HeaderUserMenu = function (_React$Component) {
  _inherits(HeaderUserMenu, _React$Component);

  function HeaderUserMenu(props) {
    _classCallCheck(this, HeaderUserMenu);

    var _this = _possibleConstructorReturn(this, (HeaderUserMenu.__proto__ || Object.getPrototypeOf(HeaderUserMenu)).call(this, props));

    _this.state = { open: false };
    _this.toggleDropdown = _this.toggleDropdown.bind(_this);
    _this.clickLinks = _this.clickLinks.bind(_this);
    return _this;
  }

  _createClass(HeaderUserMenu, [{
    key: 'toggleDropdown',
    value: function toggleDropdown(e) {
      if (e.type === 'blur' && this.state.open || e.type !== 'blur') {
        this.setState({ open: !this.state.open });
      }
    }
  }, {
    key: 'clickLinks',
    value: function clickLinks(e) {
      e.preventDefault();
      e.stopPropagation();
      switch (e.currentTarget.id.replace('user-menu-', '')) {
        case 'followers':
          if (this.props.followersOnClick) {
            this.props.followersOnClick();
          }
          break;
        case 'sales':
          if (this.props.salesOnClick) {
            this.props.salesOnClick();
          }
          break;
        case 'friends':
          if (this.props.friendsOnClick) {
            this.props.friendsOnClick();
          }
          break;
        case 'profile':
          if (this.props.profileOnClick) {
            this.props.profileOnClick();
          }
          break;
        default:
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        { className: 'dropdown user user-menu' + (this.state.open ? ' open' : ''), tabIndex: '0', onBlur: this.toggleDropdown },
        _react2.default.createElement(
          'a',
          { className: 'dropdown-toggle', 'data-toggle': 'dropdown-menu', onClick: this.toggleDropdown },
          this.props.img ? _react2.default.createElement('img', { src: this.props.img, className: 'user-image', alt: 'User Avatar' }) : '',
          _react2.default.createElement(
            'span',
            { className: 'hidden-xs' },
            this.props.username
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'dropdown-menu' },
          _react2.default.createElement(
            'li',
            { className: 'user-header' },
            this.props.img ? _react2.default.createElement('img', { src: this.props.img, className: 'img-circle', alt: 'User Avatar' }) : '',
            _react2.default.createElement(
              'p',
              null,
              this.props.name,
              this.props.jobTitle ? ' - ' + this.props.jobTitle : '',
              _react2.default.createElement(
                'small',
                null,
                'Member since ',
                this.props.joined
              )
            )
          ),
          this.props.friendsLink || this.props.salesLink || this.props.followersLink || this.props.friendsOnClick || this.props.salesOnClick || this.props.followersOnClick || this.props.children ? _react2.default.createElement(
            'li',
            { className: 'user-body' },
            this.props.children,
            this.props.followersLink || this.props.followersOnClick ? _react2.default.createElement(
              'div',
              { className: 'col-xs-4 text-center' },
              _react2.default.createElement(
                'a',
                { id: 'user-menu-followers', href: this.props.followersLink, onClick: this.clickLinks },
                'Followers'
              )
            ) : '',
            this.props.salesLink || this.props.salesOnClick ? _react2.default.createElement(
              'div',
              { className: 'col-xs-4 text-center' },
              _react2.default.createElement(
                'a',
                { id: 'user-menu-sales', href: this.props.salesLink, onClick: this.clickLinks },
                'Sales'
              )
            ) : '',
            this.props.friendsLink || this.props.friendsOnClick ? _react2.default.createElement(
              'div',
              { className: 'col-xs-4 text-center' },
              _react2.default.createElement(
                'a',
                { id: 'user-menu-friends', href: this.props.friendsLink, onClick: this.clickLinks },
                'Friends'
              )
            ) : ''
          ) : '',
          _react2.default.createElement(
            'li',
            { className: 'user-footer' },
            this.props.profileLink || this.props.profileOnClick ? _react2.default.createElement(
              'div',
              { className: 'pull-left' },
              _react2.default.createElement(
                'a',
                { id: 'user-menu-profile', href: this.props.profileLink, onClick: this.clickLinks, className: 'btn btn-default btn-flat' },
                'Profile'
              )
            ) : '',
            this.props.signOut ? _react2.default.createElement(
              'div',
              { className: this.props.profileLink || this.props.profileOnClick ? 'pull-right' : 'text-center' },
              _react2.default.createElement(
                'a',
                { className: 'btn btn-default btn-flat', onClick: this.props.signOut },
                'Sign Out'
              )
            ) : ''
          )
        )
      );
    }
  }]);

  return HeaderUserMenu;
}(_react2.default.Component);

HeaderUserMenu.propTypes = {
  username: _propTypes2.default.string,
  name: _propTypes2.default.string,
  jobTitle: _propTypes2.default.string,
  img: _propTypes2.default.string,
  profileLink: _propTypes2.default.string,
  profileOnClick: _propTypes2.default.func,
  followersLink: _propTypes2.default.string,
  followersOnClick: _propTypes2.default.func,
  salesLink: _propTypes2.default.string,
  salesOnClick: _propTypes2.default.func,
  friendsLink: _propTypes2.default.string,
  friendsOnClick: _propTypes2.default.func,
  joined: _propTypes2.default.string,
  signOut: _propTypes2.default.func
};

HeaderUserMenu.defaultProps = {
  username: '',
  name: '',
  joined: ''
};

exports.default = HeaderUserMenu;
module.exports = exports['default'];
//# sourceMappingURL=header-user-menu.js.map
