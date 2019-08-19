'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loadStatus = require('../utilities/load-status.js');

var _loadStatus2 = _interopRequireDefault(_loadStatus);

var _select = require('./pieces/select.js');

var _select2 = _interopRequireDefault(_select);

var _datePicker = require('./pieces/date-picker.js');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.state = {
      data: _this.props.data
    };
    _this.loadForm = _this.loadForm.bind(_this);
    _this.changeHandler = _this.changeHandler.bind(_this);
    _this.clickHandler = _this.clickHandler.bind(_this);
    _this.convertToDataType = _this.convertToDataType.bind(_this);
    return _this;
  }

  _createClass(Form, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        data: nextProps.data
      });
    }
  }, {
    key: 'loadForm',
    value: function loadForm() {
      var _this2 = this;

      return this.props.fields.map(function (field, i) {
        var required = field.required || false;
        var disabled = field.disabled || false;
        var fieldVal = _this2.state.data && _this2.state.data[field.id.replace(/-/g, '_')] !== null ? _this2.state.data[field.id.replace(/-/g, '_')] : '';
        var fieldElement = void 0;
        switch (field.type) {
          case 'uncertain-radio':
            fieldElement = _react2.default.createElement(
              'div',
              { id: field.id, className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4 col-sm-3' },
                _react2.default.createElement('input', {
                  type: 'radio',
                  className: 'form-check-input',
                  name: field.id,
                  value: 0,
                  checked: fieldVal !== null && fieldVal !== undefined ? Number(fieldVal) === 0 : true,
                  onChange: _this2.changeHandler,
                  required: required,
                  disabled: field.disabled
                }),
                '\xA0Undecided'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4 col-sm-3 col-md-2' },
                _react2.default.createElement('input', {
                  type: 'radio',
                  className: 'form-check-input',
                  name: field.id,
                  value: 1,
                  checked: Number(fieldVal) === 1,
                  onChange: _this2.changeHandler,
                  required: required,
                  disabled: field.disabled
                }),
                '\xA0Yes'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4 col-sm-3 col-md-2' },
                _react2.default.createElement('input', {
                  type: 'radio',
                  className: 'form-check-input',
                  name: field.id,
                  value: -1,
                  checked: Number(fieldVal) === -1,
                  onChange: _this2.changeHandler,
                  required: required,
                  disabled: field.disabled
                }),
                '\xA0No'
              )
            );
            break;
          case 'certain-radio':
            fieldElement = _react2.default.createElement(
              'div',
              { id: field.id, className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4 col-sm-3 col-md-2' },
                _react2.default.createElement('input', {
                  type: 'radio',
                  className: 'form-check-input',
                  name: field.id,
                  value: 1,
                  checked: Number(fieldVal) === 1,
                  onChange: _this2.changeHandler,
                  required: required,
                  disabled: field.disabled
                }),
                '\xA0Yes'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4 col-sm-3 col-md-2' },
                _react2.default.createElement('input', {
                  type: 'radio',
                  className: 'form-check-input',
                  name: field.id,
                  value: 0,
                  checked: fieldVal !== null && fieldVal !== undefined ? Number(fieldVal) === 0 : true,
                  onChange: _this2.changeHandler,
                  required: required,
                  disabled: field.disabled
                }),
                '\xA0No'
              )
            );
            break;
          case 'textarea':
            fieldElement = _react2.default.createElement('textarea', {
              className: 'form-control',
              id: field.id,
              name: field.id,
              onChange: _this2.changeHandler,
              required: required,
              value: fieldVal,
              placeholder: field.placeholder || null,
              disabled: field.disabled
            });
            break;
          case 'number':
            fieldElement = _react2.default.createElement('input', {
              className: 'form-control',
              type: field.type,
              id: field.id,
              name: field.id,
              value: fieldVal,
              onChange: _this2.changeHandler,
              required: required,
              min: field.min || 0,
              placeholder: field.placeholder || null,
              disabled: field.disabled
            });
            break;
          case 'checkbox':
            fieldElement = _react2.default.createElement('input', {
              className: 'form-check-input',
              style: { marginLeft: '1em' },
              type: field.type,
              id: field.id,
              name: field.id,
              checked: fieldVal,
              onChange: _this2.changeHandler,
              required: required,
              min: field.min || 0,
              disabled: field.disabled
            });
            break;
          case 'dropdown':
            fieldElement = _react2.default.createElement(_select2.default, {
              id: field.id,
              options: field.options,
              error: field.error,
              loading: field.loading,
              emptyValue: field.name,
              value: Boolean(fieldVal) ? fieldVal : field.name,
              onChange: _this2.changeHandler,
              required: required,
              disabled: disabled,
              valueProperty: field.valueProperty,
              displayProperty: field.displayProperty
            });
            break;
          case 'date':
            var val = fieldVal ? moment.unix(fieldVal).format('MMMM, DD, YYYY') : '';
            fieldElement = _react2.default.createElement(_datePicker2.default, {
              id: field.id,
              onChange: _this2.changeHandler,
              value: val,
              required: required,
              disabled: disabled
            });
            break;
          default:
            fieldElement = _react2.default.createElement('input', {
              className: 'form-control',
              type: field.type,
              id: field.id,
              name: field.id,
              value: fieldVal,
              onChange: _this2.changeHandler,
              required: required,
              placeholder: field.placeholder || null,
              'data-confirms': field.confirms || null,
              disabled: field.disabled
            });
            break;
        }
        return _react2.default.createElement(
          'div',
          {
            className: 'form-group' + (field.hidden ? ' hidden' : ''),
            key: i,
            style: { clear: 'both' }
          },
          _react2.default.createElement(
            'label',
            { htmlFor: field.id, style: { color: '#848484' } },
            field.name
          ),
          fieldElement
        );
      });
    }
  }, {
    key: 'convertToDataType',
    value: function convertToDataType(data, toType) {
      switch (toType) {
        case 'number':
          return Number(data);
        case 'boolean':
          return Boolean(data);
        case 'binary':
          return Boolean(data) === true ? 1 : 0;
        case 'object':
          return (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' ? data : JSON.parse(data);
        default:
          return (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' ? JSON.stringify(data) : '' + data;
      }
    }
  }, {
    key: 'clickHandler',
    value: function clickHandler(e) {
      var _this3 = this;

      e.preventDefault();
      var submitData = this.state.data;
      for (var i = 0; i < this.props.fields.length; i++) {
        if (this.props.fields[i].id.indexOf('ignore-') >= 0) {
          delete submitData[this.props.fields[i].id.replace(/-/g, '_')];
        }
      }
      var requiredErrs = this.props.fields.filter(function (field) {
        return field.required && !submitData[field.id.replace(/-/g, '_')];
      }).map(function (reqfield) {
        return reqfield.name;
      });
      var confirmErrs = this.props.fields.filter(function (field) {
        var confirms = field.confirms !== null && field.confirms !== undefined && field.confirms !== '';
        var matchesCounterpart = true;
        if (confirms) {
          matchesCounterpart = submitData[field.confirms.replace(/-/g, '_')] === submitData[field.id.replace(/-/g, '_')];
        }
        return confirms && !matchesCounterpart;
      }).map(function (reqfield) {
        var shouldMatch = _this3.props.fields.find(function (field) {
          return field.id === reqfield.confirms;
        });
        return '\'' + reqfield.name + '\' & \'' + shouldMatch.name + '\' do not match.';
      });

      var _loop = function _loop(dp) {
        if (Object.prototype.hasOwnProperty.call(submitData, dp)) {
          var dataType = _this3.props.fields.filter(function (field) {
            return field.id === dp.replace(/_/g, '-');
          });
          if (dataType[0] !== undefined && dataType[0] !== null) {
            submitData[dp] = submitData[dp] === null || submitData[dp] === undefined || submitData[dp] === '' ? null : _this3.convertToDataType(submitData[dp], dataType[0].validate ? dataType[0].validate : '');
          }
        }
      };

      for (var dp in submitData) {
        _loop(dp);
      }
      this.props.clickHandler(submitData, requiredErrs, confirmErrs);
    }
  }, {
    key: 'changeHandler',
    value: function changeHandler(e) {
      var formData = this.state.data;
      var value = e.currentTarget.type !== 'checkbox' ? e.currentTarget.value : e.currentTarget.checked;
      if (e.currentTarget.id.indexOf('datepickerator-') >= 0) {
        value = moment(value, 'MMMM, DD, YYYY').valueOf() / 1000;
      }
      var fieldId = Boolean(e.currentTarget.id) ? e.currentTarget.id.replace('datepickerator-', '').replace(/-/g, '_') : e.currentTarget.name.replace('datepickerator-', '').replace(/-/g, '_');
      var fieldDetails = this.props.fields.filter(function (field) {
        return field.id === fieldId.replace(/_/g, '-');
      });
      var isString = fieldDetails[0].validate === 'string' && typeof value === 'string';
      var isNum = fieldDetails[0].validate === 'number' && !isNaN(value);
      var isBool = (fieldDetails[0].validate === 'boolean' || fieldDetails[0].validate === 'binary') && (value === true || value === false || value === 'true' || value === 'false' || value === 0 || value === 1);
      if (isString || isNum || isBool) {
        formData[fieldId] = value;
        this.setState({ data: formData });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      //  A field object in the fields prop takes 6 properties (*required):
      //  *id, name, *type, required, validate
      //  Otherwise you can place children to fill the form; or both!
      var fields = this.props.fields ? this.loadForm() : '';
      return _react2.default.createElement(
        'form',
        { role: 'form', id: this.props.id, noValidate: true },
        _react2.default.createElement(
          'div',
          { className: 'box-body' },
          !this.props.loading ? _react2.default.createElement(
            'div',
            null,
            fields,
            this.props.children,
            _react2.default.createElement(
              'div',
              { className: 'text-right' },
              this.props.moreButtons,
              this.props.hideMainButton ? '' : _react2.default.createElement(
                'button',
                {
                  id: 'btn-modder',
                  className: 'btn ' + (this.props.submitTheme || 'btn-success'),
                  onClick: this.clickHandler,
                  style: { margin: '0 0 0 1em' }
                },
                this.props.submitIcon ? _react2.default.createElement('i', { className: 'fa ' + this.props.submitIcon }) : '',
                this.props.submitIcon && this.props.submitHeader ? _react2.default.createElement(
                  'span',
                  null,
                  '\xA0'
                ) : '',
                this.props.submitHeader || 'Submit'
              )
            )
          ) : _react2.default.createElement(
            'div',
            { className: 'text-center' },
            _react2.default.createElement(_loadStatus2.default, { size: '3em', color: '#848484', spins: true })
          )
        )
      );
    }
  }]);

  return Form;
}(_react2.default.Component);

Form.propTypes = {
  loading: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  fields: _propTypes2.default.array,
  data: _propTypes2.default.object,
  clickHandler: _propTypes2.default.func,
  submitIcon: _propTypes2.default.string,
  submitHeader: _propTypes2.default.string,
  submitTheme: _propTypes2.default.string,
  hideMainButton: _propTypes2.default.bool,
  moreButtons: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.element])
};
Form.defaultProps = {
  hideMainButton: false
};

exports.default = Form;
module.exports = exports['default'];
//# sourceMappingURL=form.js.map
