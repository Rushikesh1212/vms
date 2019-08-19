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

var ImageCarousel = function (_React$Component) {
  _inherits(ImageCarousel, _React$Component);

  function ImageCarousel() {
    _classCallCheck(this, ImageCarousel);

    return _possibleConstructorReturn(this, (ImageCarousel.__proto__ || Object.getPrototypeOf(ImageCarousel)).apply(this, arguments));
  }

  _createClass(ImageCarousel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var content = this.props.slides.map(function (slide, s) {
        return _react2.default.createElement(
          'div',
          { className: 'item' + (s === _this2.props.defaultSlide ? ' active' : ''), key: s },
          _react2.default.createElement('img', { src: slide.image, alt: 'Slide ' + s }),
          _react2.default.createElement(
            'div',
            { className: 'carousel-caption' },
            slide.caption
          )
        );
      });
      var slideIndices = this.props.slides.map(function (slide, s) {
        return _react2.default.createElement('li', {
          key: s,
          className: s === _this2.props.defaultSlide ? 'active' : '',
          'data-target': '#' + _this2.props.id,
          'data-slide-to': s
        });
      });
      var leftButt = !this.props.hideButtons ? _react2.default.createElement(
        'a',
        { className: 'left carousel-control', href: '#' + this.props.id, 'data-slide': 'prev' },
        _react2.default.createElement('span', { className: 'fa fa-angle-left' })
      ) : '';
      var rightButt = !this.props.hideButtons ? _react2.default.createElement(
        'a',
        { className: 'right carousel-control', href: '#' + this.props.id, 'data-slide': 'next' },
        _react2.default.createElement('span', { className: 'fa fa-angle-right' })
      ) : '';
      return _react2.default.createElement(
        'div',
        { id: this.props.id, className: 'carousel slide', 'data-ride': 'carousel' },
        !this.props.hideIndicators ? _react2.default.createElement(
          'ol',
          { className: 'carousel-indicators' },
          slideIndices
        ) : '',
        _react2.default.createElement(
          'div',
          { className: 'carousel-inner' },
          content
        ),
        leftButt,
        rightButt
      );
    }
  }]);

  return ImageCarousel;
}(_react2.default.Component);

ImageCarousel.propTypes = {
  id: _propTypes2.default.string.isRequired,
  slides: _propTypes2.default.array,
  defaultSlide: _propTypes2.default.number,
  hideIndicators: _propTypes2.default.bool,
  hideButtons: _propTypes2.default.bool
};

ImageCarousel.defaultProps = {
  slides: [],
  defaultSlide: 0,
  hideIndicators: false,
  hideButtons: false
};

exports.default = ImageCarousel;
module.exports = exports['default'];
//# sourceMappingURL=image-carousel.js.map
