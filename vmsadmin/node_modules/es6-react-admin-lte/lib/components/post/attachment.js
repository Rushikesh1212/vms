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

var Attachment = function (_React$Component) {
  _inherits(Attachment, _React$Component);

  function Attachment() {
    _classCallCheck(this, Attachment);

    return _possibleConstructorReturn(this, (Attachment.__proto__ || Object.getPrototypeOf(Attachment)).apply(this, arguments));
  }

  _createClass(Attachment, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'attachment-block clearfix' },
        _react2.default.createElement('img', { className: 'attachment-img', src: this.props.img, alt: 'Attachment image' }),
        _react2.default.createElement(
          'div',
          { className: 'attachment-pushed' },
          _react2.default.createElement(
            'h4',
            { className: 'attachment-heading' },
            _react2.default.createElement(
              'a',
              {
                href: this.props.link,
                onClick: this.props.onClick ? function (e) {
                  e.preventDefault();
                  e.stopPropagation();
                  _this2.props.onClick();
                } : function () {}
              },
              this.props.title
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'attachment-text' },
            this.props.content,
            this.props.children,
            _react2.default.createElement(
              'a',
              {
                href: this.props.link,
                onClick: this.props.onClick ? function (e) {
                  e.preventDefault();
                  e.stopPropagation();
                  _this2.props.onClick();
                } : function () {}
              },
              'More...'
            )
          )
        )
      );
    }
  }]);

  return Attachment;
}(_react2.default.Component);

Attachment.propTypes = {
  title: _propTypes2.default.string,
  link: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  img: _propTypes2.default.string,
  content: _propTypes2.default.string
};
Attachment.defaultProps = {
  title: '',
  link: '',
  img: '',
  content: ''
};

exports.default = Attachment;
module.exports = exports['default'];
//# sourceMappingURL=attachment.js.map
