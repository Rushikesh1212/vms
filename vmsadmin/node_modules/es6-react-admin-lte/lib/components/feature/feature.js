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

var Feature = function (_React$Component) {
  _inherits(Feature, _React$Component);

  function Feature() {
    _classCallCheck(this, Feature);

    return _possibleConstructorReturn(this, (Feature.__proto__ || Object.getPrototypeOf(Feature)).apply(this, arguments));
  }

  _createClass(Feature, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'box box-solid' },
        _react2.default.createElement(
          'div',
          { className: 'box-body' },
          _react2.default.createElement(
            'h4',
            { className: 'feature-header' },
            this.props.headline
          ),
          _react2.default.createElement(
            'div',
            { className: 'media' },
            this.props.img ? _react2.default.createElement(
              'div',
              { className: 'media-left' },
              _react2.default.createElement(
                'a',
                { href: this.props.imgLink, onClick: this.props.imgOnClick },
                _react2.default.createElement('img', {
                  src: this.props.img,
                  alt: this.props.imgAlt,
                  className: 'media-object feature-img'
                })
              )
            ) : '',
            _react2.default.createElement(
              'div',
              { className: 'media-body' },
              _react2.default.createElement(
                'div',
                { className: 'clearfix' },
                this.props.cta ? _react2.default.createElement(
                  'p',
                  { className: 'pull-right' },
                  _react2.default.createElement(
                    'a',
                    {
                      href: this.props.ctaLink,
                      onClick: this.props.ctaOnClick,
                      className: 'btn btn-sm ' + this.props.ctaTheme
                    },
                    this.props.cta
                  )
                ) : '',
                this.props.content,
                this.props.children
              )
            )
          )
        )
      );
    }
  }]);

  return Feature;
}(_react2.default.Component);

Feature.propTypes = {
  headline: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  img: _propTypes2.default.string,
  imgLink: _propTypes2.default.string,
  imgOnClick: _propTypes2.default.func,
  imgAlt: _propTypes2.default.string,
  cta: _propTypes2.default.string,
  ctaLink: _propTypes2.default.string,
  ctaOnClick: _propTypes2.default.func,
  ctaTheme: _propTypes2.default.string,
  content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
};

Feature.defaultProps = {
  headline: '',
  img: '',
  imgOnClick: function imgOnClick() {},
  imgAlt: '',
  ctaOnClick: function ctaOnClick() {},
  ctaTheme: 'btn-success',
  content: ''
};

exports.default = Feature;
module.exports = exports['default'];
//# sourceMappingURL=feature.js.map
