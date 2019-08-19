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

var SimpleTable = function (_React$Component) {
  _inherits(SimpleTable, _React$Component);

  function SimpleTable() {
    _classCallCheck(this, SimpleTable);

    return _possibleConstructorReturn(this, (SimpleTable.__proto__ || Object.getPrototypeOf(SimpleTable)).apply(this, arguments));
  }

  _createClass(SimpleTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var striped = this.props.striped ? ' table-striped' : '';
      var condensed = this.props.condensed ? ' table-condensed' : '';
      var bordered = this.props.bordered ? ' table-bordered' : '';
      var hovers = this.props.hovers ? ' table-hover' : '';
      var headers = this.props.headers.length > 0 ? _react2.default.createElement(
        'tr',
        null,
        this.props.headers.map(function (header, h) {
          return _react2.default.createElement(
            'th',
            {
              key: h,
              style: typeof header === 'string' || Object.keys(header).indexOf('width') < 0 ? null : {
                width: header.width
              }
            },
            typeof header === 'string' ? header : header.content
          );
        })
      ) : null;
      var content = this.props.data.length > 0 ? this.props.data.map(function (dataset, ds) {
        var cells = _this2.props.headers.length !== 0 ? _this2.props.headers.map(function (header, h) {
          var cellDatum = dataset[header.id] || null;
          return _react2.default.createElement(
            'td',
            { key: h },
            cellDatum
          );
        }) : Object.keys(dataset).map(function (datum, d) {
          return _react2.default.createElement(
            'td',
            { key: d },
            dataset[datum]
          );
        });
        return _react2.default.createElement(
          'tr',
          { key: ds },
          cells
        );
      }) : null;
      return _react2.default.createElement(
        'table',
        { className: 'table' + striped + condensed + bordered + hovers },
        _react2.default.createElement(
          'tbody',
          null,
          headers,
          content
        )
      );
    }
  }]);

  return SimpleTable;
}(_react2.default.Component);

SimpleTable.propTypes = {
  striped: _propTypes2.default.bool,
  condensed: _propTypes2.default.bool,
  bordered: _propTypes2.default.bool,
  hovers: _propTypes2.default.bool,
  headers: _propTypes2.default.array,
  data: _propTypes2.default.array
};

SimpleTable.defaultProps = {
  striped: false,
  condensed: false,
  bordered: false,
  hovers: false,
  headers: [],
  data: []
};

exports.default = SimpleTable;
module.exports = exports['default'];
//# sourceMappingURL=simple-table.js.map
