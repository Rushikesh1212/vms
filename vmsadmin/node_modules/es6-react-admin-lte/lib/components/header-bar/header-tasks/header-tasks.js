'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _taskItem = require('./task-item.js');

var _taskItem2 = _interopRequireDefault(_taskItem);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderTasks = function (_React$Component) {
  _inherits(HeaderTasks, _React$Component);

  function HeaderTasks(props) {
    _classCallCheck(this, HeaderTasks);

    var _this = _possibleConstructorReturn(this, (HeaderTasks.__proto__ || Object.getPrototypeOf(HeaderTasks)).call(this, props));

    _this.state = { open: false };
    _this.toggleDropdown = _this.toggleDropdown.bind(_this);
    return _this;
  }

  _createClass(HeaderTasks, [{
    key: 'toggleDropdown',
    value: function toggleDropdown(e) {
      if (e.type === 'blur' && this.state.open || e.type !== 'blur') {
        this.setState({ open: !this.state.open });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var progressBarColor = void 0;
      var taskList = this.props.tasks.map(function (taskDetails, i) {
        if (taskDetails.percentage < 21) {
          progressBarColor = 'bg-red';
        } else if (taskDetails.percentage > 20 && taskDetails.percentage < 41) {
          progressBarColor = 'bg-yellow';
        } else if (taskDetails.percentage > 40 && taskDetails.percentage < 61) {
          progressBarColor = 'bg-green';
        } else if (taskDetails.percentage > 60) {
          progressBarColor = 'bg-aqua';
        }
        return _react2.default.createElement(_taskItem2.default, {
          key: i,
          percentage: taskDetails.percentage,
          content: taskDetails.subject,
          theme: progressBarColor,
          link: taskDetails.link,
          onClick: taskDetails.onClick
        });
      });
      return _react2.default.createElement(
        'li',
        { className: 'dropdown tasks-menu' + (this.state.open ? ' open' : ''), tabIndex: '0', onBlur: this.toggleDropdown },
        _react2.default.createElement(
          'a',
          { className: 'dropdown-toggle', 'data-toggle': 'dropdown-menu', onClick: this.toggleDropdown },
          _react2.default.createElement('i', { className: 'fa fa-flag-o' }),
          _react2.default.createElement(
            'span',
            { className: 'label label-danger' },
            this.props.count || this.props.tasks.length
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'dropdown-menu' },
          _react2.default.createElement(
            'li',
            { className: 'header' },
            'You have ',
            this.props.count || this.props.tasks.length,
            ' tasks.'
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'div',
              { className: 'slimScrollDiv' },
              _react2.default.createElement(
                'ul',
                { className: 'menu' },
                taskList
              ),
              _react2.default.createElement('div', { className: 'slimScrollBar' }),
              _react2.default.createElement('div', { className: 'slimScrollRail' })
            )
          ),
          this.props.clickHandler ? _react2.default.createElement(
            'li',
            { className: 'footer' },
            _react2.default.createElement(
              'a',
              { onClick: this.props.clickHandler },
              'View all tasks'
            )
          ) : ''
        )
      );
    }
  }]);

  return HeaderTasks;
}(_react2.default.Component);

HeaderTasks.propTypes = {
  count: _propTypes2.default.number,
  tasks: _propTypes2.default.array,
  clickHandler: _propTypes2.default.func
};

HeaderTasks.defaultProps = {
  tasks: []
};

exports.default = HeaderTasks;
module.exports = exports['default'];
//# sourceMappingURL=header-tasks.js.map
