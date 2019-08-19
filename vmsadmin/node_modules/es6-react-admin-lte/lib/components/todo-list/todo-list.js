'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _label = require('../utilities/label.js');

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoList = function (_React$Component) {
  _inherits(TodoList, _React$Component);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
  }

  _createClass(TodoList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'box ' + this.props.theme },
        _react2.default.createElement(
          'div',
          { className: 'box-header' },
          _react2.default.createElement(
            'h3',
            { className: 'box-title' },
            this.props.headline
          ),
          this.props.paginate ? _react2.default.createElement(
            'div',
            { className: 'box-tools pull-right' },
            _react2.default.createElement('ul', { className: 'pagination pagination-sm inline' })
          ) : ''
        ),
        _react2.default.createElement(
          'div',
          { className: 'box-body' },
          _react2.default.createElement(
            'ul',
            { className: 'todo-list' },
            this.props.todos.length > 0 ? this.props.todos.map(function (todo, td) {
              return _react2.default.createElement(
                'li',
                { key: td },
                todo.complete ? _react2.default.createElement('i', { className: 'fa ' + (todo.check || 'fa-check') + ' ' + (todo.checkColor || 'text-muted') }) : _react2.default.createElement('input', {
                  type: 'checkbox',
                  value: todo.value || '',
                  onChange: function onChange() {
                    _this2.props.onUpdate(td);
                  }
                }),
                _react2.default.createElement(
                  'span',
                  { className: 'text' },
                  todo.content
                ),
                !todo.complete && todo.due ? _react2.default.createElement(_label2.default, {
                  theme: todo.theme || 'label-warning',
                  icon: 'fa-clock-o',
                  align: '',
                  stat: todo.due
                }) : '',
                _react2.default.createElement(
                  'div',
                  { className: 'tools' },
                  _this2.props.canEdit ? _react2.default.createElement('i', { className: 'fa fa-edit', onClick: function onClick() {
                      _this2.props.onEdit(td);
                    } }) : '',
                  _this2.props.canDelete ? _react2.default.createElement('i', { className: 'fa fa-trash-o', onClick: function onClick() {
                      _this2.props.onDelete(td);
                    } }) : ''
                )
              );
            }) : ''
          )
        ),
        this.props.canAdd ? _react2.default.createElement(
          'div',
          { className: 'box-footer clearfix no-border' },
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: 'btn btn-default pull-right',
              onClick: this.props.onAdd
            },
            _react2.default.createElement('i', { className: 'fa fa-plus' }),
            this.props.addText ? ' ' : '',
            this.props.addText
          )
        ) : ''
      );
    }
  }]);

  return TodoList;
}(_react2.default.Component);

TodoList.propTypes = {
  theme: _propTypes2.default.string,
  headline: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  addText: _propTypes2.default.string,
  paginate: _propTypes2.default.bool,
  todos: _propTypes2.default.array,
  canAdd: _propTypes2.default.bool,
  canEdit: _propTypes2.default.bool,
  canDelete: _propTypes2.default.bool,
  onAdd: _propTypes2.default.func,
  onEdit: _propTypes2.default.func,
  onDelete: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func
};

TodoList.defaultProps = {
  theme: 'box-default',
  headline: '',
  addText: '',
  paginate: false,
  todos: [],
  canAdd: false,
  canEdit: false,
  canDelete: false,
  onAdd: function onAdd() {},
  onEdit: function onEdit() {},
  onDelete: function onDelete() {},
  onUpdate: function onUpdate() {}
};

exports.default = TodoList;
module.exports = exports['default'];
//# sourceMappingURL=todo-list.js.map
