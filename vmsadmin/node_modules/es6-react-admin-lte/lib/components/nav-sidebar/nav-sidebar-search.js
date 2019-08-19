'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavSidebarSearch = function (_React$Component) {
  _inherits(NavSidebarSearch, _React$Component);

  function NavSidebarSearch(props) {
    _classCallCheck(this, NavSidebarSearch);

    var _this = _possibleConstructorReturn(this, (NavSidebarSearch.__proto__ || Object.getPrototypeOf(NavSidebarSearch)).call(this, props));

    _this.state = {
      searchFor: ''
    };
    _this.invokeFormPowers = _this.invokeFormPowers.bind(_this);
    _this.handleSearchDataChange = _this.handleSearchDataChange.bind(_this);
    return _this;
  }

  _createClass(NavSidebarSearch, [{
    key: 'handleSearchDataChange',
    value: function handleSearchDataChange(e) {
      this.setState({ searchFor: e.currentTarget.value });
    }
  }, {
    key: 'invokeFormPowers',
    value: function invokeFormPowers(e) {
      e.preventDefault();
      var searchData = this.state.searchFor;
      /*
        TODO:
        Activate some sort of form function call.
        Probably passed through props. Sees value of input
        Get this junk && achieve a greatness no man before has ever dared to dream of
      */
      console.log("Hi, I'm a Form Action.\nI don't know what I'll do yet, but\nI have potential to achieve great things!");
      console.log("I know that you want to do something about " + searchData);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { className: 'sidebar-form' },
        _react2.default.createElement(
          'div',
          { className: 'input-group' },
          _react2.default.createElement('input', { type: 'text', name: 'q', className: 'form-control', placeholder: 'Search...', value: this.state.searchFor, onChange: this.handleSearchDataChange }),
          _react2.default.createElement(
            'span',
            { className: 'input-group-btn' },
            _react2.default.createElement(
              'button',
              { type: 'submit', name: 'search', id: 'search-btn', className: 'btn btn-flat', onClick: this.invokeFormPowers },
              _react2.default.createElement('i', { className: 'fa fa-search' })
            )
          )
        )
      );
    }
  }]);

  return NavSidebarSearch;
}(_react2.default.Component);

exports.default = NavSidebarSearch;
module.exports = exports['default'];
//# sourceMappingURL=nav-sidebar-search.js.map
