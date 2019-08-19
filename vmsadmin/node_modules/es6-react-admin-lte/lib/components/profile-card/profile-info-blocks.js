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

var ProfileInfoBlocks = function (_React$Component) {
  _inherits(ProfileInfoBlocks, _React$Component);

  function ProfileInfoBlocks() {
    _classCallCheck(this, ProfileInfoBlocks);

    return _possibleConstructorReturn(this, (ProfileInfoBlocks.__proto__ || Object.getPrototypeOf(ProfileInfoBlocks)).apply(this, arguments));
  }

  _createClass(ProfileInfoBlocks, [{
    key: 'render',
    value: function render() {
      var descriptionBlocks = this.props.blocks.map(function (info, i) {
        return _react2.default.createElement(
          'div',
          { className: 'col-sm-4 border-right', key: i },
          _react2.default.createElement(
            'div',
            { className: 'description-block' },
            _react2.default.createElement(
              'h5',
              { className: 'description-header' },
              info.stats
            ),
            _react2.default.createElement(
              'span',
              { className: 'description-text' },
              info.description
            )
          )
        );
      });
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        descriptionBlocks
      );
    }
  }]);

  return ProfileInfoBlocks;
}(_react2.default.Component);

ProfileInfoBlocks.propTypes = {
  blocks: _propTypes2.default.array
};

ProfileInfoBlocks.defaultProps = {
  blocks: []
};

exports.default = ProfileInfoBlocks;
module.exports = exports['default'];
//# sourceMappingURL=profile-info-blocks.js.map
