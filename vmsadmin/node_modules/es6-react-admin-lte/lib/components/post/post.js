'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _comment = require('./comment.js');

var _comment2 = _interopRequireDefault(_comment);

var _attachment = require('./attachment.js');

var _attachment2 = _interopRequireDefault(_attachment);

var _commonFunctions = require('../../services/common-functions');

var commonFuncs = _interopRequireWildcard(_commonFunctions);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_React$Component) {
  _inherits(Post, _React$Component);

  function Post(props) {
    _classCallCheck(this, Post);

    var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

    _this.state = { message: '' };
    _this.toggleCollapse = _this.toggleCollapse.bind(_this);
    _this.removeBox = _this.removeBox.bind(_this);
    _this.onSendMessage = _this.onSendMessage.bind(_this);
    return _this;
  }

  _createClass(Post, [{
    key: 'toggleCollapse',
    value: function toggleCollapse(e) {
      var box = _reactDom2.default.findDOMNode(this).children[0];
      var boxBody = _reactDom2.default.findDOMNode(this).children[0].children[1];
      var icon = e.currentTarget.children[0];
      commonFuncs.toggleBoxCollapse(box, boxBody, icon);
    }
  }, {
    key: 'removeBox',
    value: function removeBox(e) {
      var box = _reactDom2.default.findDOMNode(this).children[0];
      commonFuncs.removeBox(box);
    }
  }, {
    key: 'onSendMessage',
    value: function onSendMessage(e) {
      e.preventDefault();
      e.stopPropagation();
      this.props.onSubmit(this.state.message);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var comments = this.props.postData.comments ? this.props.postData.comments.map(function (commentDetails, i) {
        return _react2.default.createElement(_comment2.default, { key: i, name: commentDetails.name, img: commentDetails.img, date: commentDetails.date, content: commentDetails.content });
      }) : [];
      var postImg = this.props.postData.postImg ? _react2.default.createElement('img', { className: 'img-responsive pad', src: this.props.postData.postImg, alt: 'Photo' }) : '';
      var attachments = this.props.postData.attachments ? this.props.postData.attachments.map(function (attachmentDetails, i) {
        return _react2.default.createElement(
          _attachment2.default,
          {
            key: i,
            title: attachmentDetails.title,
            img: attachmentDetails.img,
            link: attachmentDetails.link,
            onClick: attachmentDetails.onClick,
            content: attachmentDetails.content
          },
          attachmentDetails.markup
        );
      }) : [];
      return _react2.default.createElement(
        'div',
        { className: "col-md-" + this.props.width },
        _react2.default.createElement(
          'div',
          { className: 'box box-widget' },
          _react2.default.createElement(
            'div',
            { className: 'box-header with-border' },
            _react2.default.createElement(
              'div',
              { className: 'user-block' },
              _react2.default.createElement('img', { className: 'img-circle', src: this.props.postData.displayImg, alt: 'User image' }),
              _react2.default.createElement(
                'span',
                { className: 'username' },
                _react2.default.createElement(
                  'a',
                  {
                    href: this.props.postData.link,
                    onClick: this.props.postData.onClick ? function (e) {
                      e.preventDefault();
                      e.stopPropagation();
                      _this2.props.postData.onClick();
                    } : function () {}
                  },
                  this.props.postData.displayName
                )
              ),
              _react2.default.createElement(
                'span',
                { className: 'description' },
                this.props.postData.status,
                this.props.postData.status && this.props.postData.date ? ' - ' : '',
                this.props.postData.date
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'box-tools' },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-box-tool', 'data-widget': 'collapse', onClick: this.toggleCollapse },
                _react2.default.createElement('i', { className: 'fa fa-minus' })
              ),
              _react2.default.createElement(
                'button',
                { className: 'btn btn-box-tool', 'data-widget': 'remove', onClick: this.removeBox },
                _react2.default.createElement('i', { className: 'fa fa-times' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'box-body' },
            postImg,
            _react2.default.createElement(
              'p',
              null,
              this.props.postData.content
            ),
            attachments,
            this.props.children
          ),
          _react2.default.createElement(
            'div',
            { className: 'box-footer box-comments' },
            comments
          ),
          _react2.default.createElement(
            'div',
            { className: 'box-footer' },
            _react2.default.createElement(
              'form',
              { noValidate: true, onSubmit: this.onSendMessage },
              this.props.userImg ? _react2.default.createElement('img', { className: 'img-responsive img-circle img-sm', src: this.props.userImg, alt: 'alt text' }) : '',
              _react2.default.createElement(
                'div',
                { className: this.props.userImg ? 'img-push' : '' },
                _react2.default.createElement('input', {
                  type: 'text',
                  className: 'form-control input-sm',
                  placeholder: 'Press enter to post comment',
                  onChange: function onChange(e) {
                    _this2.setState({ message: e.currentTarget.value });
                  }
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Post;
}(_react2.default.Component);

Post.propTypes = {
  userImg: _propTypes2.default.string,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  postData: _propTypes2.default.object,
  onSubmit: _propTypes2.default.func
};
Post.defaultProps = {
  width: 3,
  onSubmit: function onSubmit() {}
};

exports.default = Post;
module.exports = exports['default'];
//# sourceMappingURL=post.js.map
