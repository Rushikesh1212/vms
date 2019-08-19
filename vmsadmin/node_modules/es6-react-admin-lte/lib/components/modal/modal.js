'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loadStatus = require('../utilities/load-status.js');

var _loadStatus2 = _interopRequireDefault(_loadStatus);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.state = {
      open: false
    };
    _this.clickHandler = _this.clickHandler.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'clickHandler',
    value: function clickHandler(e) {
      var _this2 = this;

      if (e.currentTarget.className.indexOf('btn-modal-cta') >= 0 && this.props.action) {
        this.props.action(function () {
          _this2.closeModal(true);
        });
      }
      if (e.currentTarget.className.indexOf('btn-modal-cta') < 0) {
        this.props.customButtons.forEach(function (button) {
          if (e.currentTarget.className.indexOf(button.name) >= 0 && button.action) {
            button.action(function () {
              _this2.closeModal(true);
            });
          }
        });
      }
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      var _this3 = this;

      var outsideJob = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.setState({ open: false }, function () {
        if (outsideJob === true) {
          document.getElementById(_this3.props.id + '_close-btn').click();
        }
        _this3.props.closeAction();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var launcher = this.props.launcherIsLink ? _react2.default.createElement(
        'a',
        {
          id: this.props.launcherId,
          className: '' + this.props.launcherTheme + (this.props.hideLauncher ? ' hidden' : ''),
          onClick: function onClick() {
            _this4.setState({ open: true });
            _this4.props.launchAction();
          },
          'data-toggle': 'modal',
          'data-target': '#' + this.props.id
        },
        _react2.default.createElement('i', { className: 'fa ' + this.props.icon }),
        _react2.default.createElement(
          'span',
          null,
          this.props.icon && this.props.launcherText ? ' ' : '',
          this.props.launcherText
        )
      ) : _react2.default.createElement(
        'button',
        {
          id: this.props.launcherId,
          type: 'button',
          className: 'btn button-modal-launcher ' + this.props.launcherTheme + (this.props.hideLauncher ? ' hidden' : ''),
          style: { margin: '0 0.5em 0 0' },
          onClick: function onClick() {
            _this4.setState({ open: true });
            _this4.props.launchAction();
          },
          'data-toggle': 'modal',
          'data-target': '#' + this.props.id
        },
        _react2.default.createElement('i', { className: 'fa ' + this.props.icon }),
        _react2.default.createElement(
          'span',
          null,
          this.props.icon && this.props.launcherText ? ' ' : '',
          this.props.launcherText
        )
      );
      return _react2.default.createElement(
        'div',
        { className: this.props.inline ? 'd-inline' : null },
        launcher,
        _react2.default.createElement(
          'div',
          { id: this.props.id, className: 'modal ' + this.props.theme + (this.props.fades ? ' fade' : ''), role: 'dialog' },
          _react2.default.createElement(
            'div',
            { className: 'modal-dialog' },
            _react2.default.createElement(
              'div',
              { className: 'modal-content row' },
              _react2.default.createElement(
                'div',
                { className: 'modal-header col-xs-12' },
                _react2.default.createElement(
                  'button',
                  { id: this.props.id + '_close-btn', type: 'button', className: 'close', 'data-dismiss': 'modal', onClick: this.closeModal },
                  '\xD7'
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'modal-title' },
                  this.props.modalHeadline,
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'small',
                    null,
                    this.props.modalSubheadline
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'modal-body col-xs-12' },
                this.state.open ? !this.props.loading ? _react2.default.createElement(
                  'div',
                  null,
                  this.props.modalContent,
                  this.props.children
                ) : _react2.default.createElement(
                  'div',
                  {
                    id: this.props.id + '-load-status-container',
                    className: 'text-center align-middle',
                    style: {
                      backgroundColor: 'rgba(150, 150, 150, 0.05)',
                      position: 'absolute',
                      borderRadius: '5px',
                      top: 0, right: '10px', bottom: 0, left: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }
                  },
                  _react2.default.createElement(_loadStatus2.default, { size: '3em', color: '#848484', spins: true })
                ) : ''
              ),
              _react2.default.createElement(
                'div',
                { className: 'modal-footer col-xs-12' },
                this.state.open && !this.props.loading ? _react2.default.createElement(
                  'div',
                  null,
                  this.props.modalFooter,
                  this.props.hideCloseButton ? '' : _react2.default.createElement(
                    'button',
                    {
                      className: 'btn-modal-cancel btn ' + this.props.closeButtonTheme,
                      'data-dismiss': 'modal',
                      onClick: this.closeModal,
                      style: { margin: '0 0.5em 0 0' }
                    },
                    'Cancel'
                  ),
                  this.props.customButtons.length > 0 ? this.props.customButtons.map(function (btn, b) {
                    return _react2.default.createElement(
                      'button',
                      {
                        key: b,
                        type: 'button',
                        className: 'btn ' + (btn.name || 'undefined-btn-modal-action') + ' ' + (btn.theme || 'btn-default'),
                        style: { margin: '0 0.5em 0 0' },
                        onClick: _this4.clickHandler
                      },
                      btn.icon ? _react2.default.createElement('i', { className: 'fa ' + btn.icon }) : '',
                      btn.icon && btn.text ? ' ' : '',
                      btn.text || ''
                    );
                  }) : '',
                  this.props.hideCTAButton ? '' : _react2.default.createElement(
                    'button',
                    {
                      className: 'btn-modal-cta btn ' + this.props.ctaButtonTheme,
                      style: { margin: '0 0.5em 0 0' },
                      onClick: this.clickHandler
                    },
                    this.props.ctaButtonText
                  )
                ) : ''
              )
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.propTypes = {
  theme: _propTypes2.default.string,
  fades: _propTypes2.default.bool,
  inline: _propTypes2.default.bool,
  hideLauncher: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  launcherId: _propTypes2.default.string,
  id: _propTypes2.default.string.isRequired,
  launcherTheme: _propTypes2.default.string,
  hideCloseButton: _propTypes2.default.bool,
  closeButtonTheme: _propTypes2.default.string,
  hideCTAButton: _propTypes2.default.bool,
  ctaButtonTheme: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  launcherText: _propTypes2.default.string,
  launcherIsLink: _propTypes2.default.bool,
  action: _propTypes2.default.func,
  modalHeadline: _propTypes2.default.string,
  modalSubheadline: _propTypes2.default.string,
  ctaButtonText: _propTypes2.default.string,
  launchAction: _propTypes2.default.func,
  closeAction: _propTypes2.default.func,
  customButtons: _propTypes2.default.array,
  modalContent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  modalFooter: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
};
Modal.defaultProps = {
  theme: 'modal-default',
  fades: false,
  inline: false,
  hideLauncher: false,
  loading: false,
  hideCTAButton: false,
  hideCloseButton: false,
  closeButtonTheme: 'btn-default',
  ctaButtonTheme: 'btn-default',
  launcherTheme: 'btn-default',
  launcherIsLink: false,
  launcherText: 'Launch',
  icon: '',
  ctaButtonText: 'Ok',
  customButtons: [],
  launchAction: function launchAction() {},
  closeAction: function closeAction() {}
};

exports.default = Modal;
module.exports = exports['default'];
//# sourceMappingURL=modal.js.map
