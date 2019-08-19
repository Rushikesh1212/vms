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

var ProfileCard = function (_React$Component) {
  _inherits(ProfileCard, _React$Component);

  function ProfileCard() {
    _classCallCheck(this, ProfileCard);

    return _possibleConstructorReturn(this, (ProfileCard.__proto__ || Object.getPrototypeOf(ProfileCard)).apply(this, arguments));
  }

  _createClass(ProfileCard, [{
    key: 'render',
    value: function render() {
      var coverPic = this.props.coverImg ? {
        background: 'url(' + this.props.coverImg + ') center'
      } : {};
      var alignmentType = this.props.imgAlignment === 'left' ? 'widget-user-2' : 'widget-user';
      var footerPadding = this.props.imgAlignment === 'left' ? 'no-padding' : '';

      return _react2.default.createElement(
        'div',
        { className: 'col-md-' + this.props.width },
        _react2.default.createElement(
          'div',
          { className: 'box box-widget ' + alignmentType },
          _react2.default.createElement(
            'div',
            { className: 'widget-user-header ' + this.props.theme, style: coverPic },
            this.props.img ? _react2.default.createElement(
              'div',
              { className: 'widget-user-image' },
              _react2.default.createElement('img', { className: 'img-circle', src: this.props.img, alt: 'User Avatar' })
            ) : '',
            _react2.default.createElement(
              'h3',
              { className: 'widget-user-username' },
              this.props.name
            ),
            _react2.default.createElement(
              'h5',
              { className: 'widget-user-desc' },
              this.props.description
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'box-footer ' + footerPadding },
            this.props.children
          )
        )
      );
    }
  }]);

  return ProfileCard;
}(_react2.default.Component);

ProfileCard.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  theme: _propTypes2.default.string,
  imgAlignment: _propTypes2.default.string,
  name: _propTypes2.default.string,
  description: _propTypes2.default.string,
  img: _propTypes2.default.string,
  coverImg: _propTypes2.default.string,
  date: _propTypes2.default.string
};

ProfileCard.defaultProps = {
  width: 3,
  theme: 'bg-yellow',
  imgAlignment: 'center',
  name: '',
  description: ''
};

exports.default = ProfileCard;
module.exports = exports['default'];
//# sourceMappingURL=profile-card.js.map
