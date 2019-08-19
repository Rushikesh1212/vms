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

var TaskItem = function (_React$Component) {
  _inherits(TaskItem, _React$Component);

  function TaskItem() {
    _classCallCheck(this, TaskItem);

    return _possibleConstructorReturn(this, (TaskItem.__proto__ || Object.getPrototypeOf(TaskItem)).apply(this, arguments));
  }

  _createClass(TaskItem, [{
    key: 'render',
    value: function render() {
      var stylePercentage = {
        width: this.props.percentage + '%'
      };
      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: this.props.link, onClick: this.props.onClick },
          _react2.default.createElement(
            'h3',
            null,
            this.props.content,
            _react2.default.createElement(
              'small',
              { className: 'pull-right' },
              this.props.percentage + '%'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'progress xs' },
            _react2.default.createElement(
              'div',
              { className: 'progress-bar ' + this.props.theme, style: stylePercentage },
              _react2.default.createElement(
                'span',
                { className: 'sr-only' },
                this.props.percentage + ' % Complete'
              )
            )
          )
        )
      );
    }
  }]);

  return TaskItem;
}(_react2.default.Component);

TaskItem.propTypes = {
  percentage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  theme: _propTypes2.default.string,
  content: _propTypes2.default.string,
  link: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};
TaskItem.defaultProps = {
  percentage: 0,
  theme: 'bg-yellow',
  content: ''
};

exports.default = TaskItem;
module.exports = exports['default'];
//# sourceMappingURL=task-item.js.map
