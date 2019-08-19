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

var ProfileInfoList = function (_React$Component) {
  _inherits(ProfileInfoList, _React$Component);

  function ProfileInfoList() {
    _classCallCheck(this, ProfileInfoList);

    return _possibleConstructorReturn(this, (ProfileInfoList.__proto__ || Object.getPrototypeOf(ProfileInfoList)).apply(this, arguments));
  }

  _createClass(ProfileInfoList, [{
    key: 'render',
    value: function render() {
      var dataList = this.props.list.map(function (info, i) {
        return _react2.default.createElement(
          'li',
          { key: i },
          _react2.default.createElement(
            'a',
            {
              href: info.link,
              onClick: info.onClick ? function (e) {
                e.preventDefault();
                e.stopPropagation();
                info.onClick();
              } : function () {}
            },
            info.description,
            _react2.default.createElement(
              'span',
              { className: "pull-right badge " + info.badgeTheme },
              info.stats
            )
          )
        );
      });
      return _react2.default.createElement(
        'ul',
        { className: 'nav nav-stacked' },
        dataList
      );
    }
  }]);

  return ProfileInfoList;
}(_react2.default.Component);

ProfileInfoList.propTypes = {
  list: _propTypes2.default.array
};

ProfileInfoList.defaultProps = {
  list: []
};

exports.default = ProfileInfoList;
module.exports = exports['default'];
//# sourceMappingURL=profile-info-list.js.map
