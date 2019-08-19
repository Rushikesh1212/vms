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

var InfoTile = function (_React$Component) {
  _inherits(InfoTile, _React$Component);

  function InfoTile() {
    _classCallCheck(this, InfoTile);

    return _possibleConstructorReturn(this, (InfoTile.__proto__ || Object.getPrototypeOf(InfoTile)).apply(this, arguments));
  }

  _createClass(InfoTile, [{
    key: 'render',
    value: function render() {
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
          { className: 'info-box' + (this.props.percent ? ' ' + this.props.theme : '') },
          _react2.default.createElement(
            'span',
            { className: 'info-box-icon' + (this.props.percent ? '' : ' ' + this.props.theme) },
            _react2.default.createElement('i', { className: 'fa ' + this.props.icon })
          ),
          _react2.default.createElement(
            'div',
            { className: 'info-box-content' },
            _react2.default.createElement(
              'span',
              { className: 'info-box-text' },
              this.props.subject
            ),
            _react2.default.createElement(
              'span',
              { className: 'info-box-number' },
              this.props.stats
            ),
            this.props.percent ? _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                { className: 'progress' },
                _react2.default.createElement('div', {
                  className: 'progress-bar ' + this.props.progressTheme,
                  style: { width: this.props.percent + '%' }
                })
              ),
              _react2.default.createElement(
                'span',
                { className: 'progress-description' },
                this.props.content
              )
            ) : this.props.content
          )
        )
      );
    }
  }]);

  return InfoTile;
}(_react2.default.Component);

InfoTile.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  widthXS: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  widthSM: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  widthMD: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  widthLG: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  widthXL: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  icon: _propTypes2.default.string,
  stats: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  percent: _propTypes2.default.number,
  content: _propTypes2.default.string,
  subject: _propTypes2.default.string,
  theme: _propTypes2.default.string,
  progressTheme: _propTypes2.default.string
};
InfoTile.defaultProps = {
  width: 12,
  content: '',
  icon: 'fa-star-o',
  stats: 0,
  subject: '',
  theme: 'bg-yellow',
  progressTheme: 'bg-white'
};

exports.default = InfoTile;
module.exports = exports['default'];
//# sourceMappingURL=info-tile.js.map
