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

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this.invokeFormPowers = _this.invokeFormPowers.bind(_this);
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'invokeFormPowers',
    value: function invokeFormPowers(e) {
      e.preventDefault();
      e.stopPropagation();
      var searchQuery = document.getElementById(this.props.id + '-search-input').value;
      this.props.searchHandler(searchQuery);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { id: this.props.id + '-search-form', onSubmit: this.invokeFormPowers },
        _react2.default.createElement(
          'div',
          { className: 'input-group' },
          _react2.default.createElement('input', {
            type: 'text',
            id: this.props.id + '-search-input',
            name: this.props.id + '-search-input',
            className: 'form-control',
            placeholder: this.props.placeholder,
            disabled: this.props.disabled
          }),
          _react2.default.createElement(
            'span',
            { className: 'input-group-btn' },
            _react2.default.createElement(
              'button',
              {
                type: 'submit',
                name: this.props.id + '-btn',
                id: this.props.id + '-btn',
                className: 'btn btn-flat',
                onClick: this.invokeFormPowers,
                disabled: this.props.disabled
              },
              _react2.default.createElement('i', { className: 'fa fa-search' })
            )
          )
        )
      );
    }
  }]);

  return SearchBar;
}(_react2.default.Component);

SearchBar.propTypes = {
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  searchHandler: _propTypes2.default.func
};
SearchBar.defaultProps = {
  disabled: false,
  id: 'generic-searchbar',
  placeholder: 'Search...'
};

exports.default = SearchBar;
module.exports = exports['default'];
//# sourceMappingURL=search-bar.js.map
