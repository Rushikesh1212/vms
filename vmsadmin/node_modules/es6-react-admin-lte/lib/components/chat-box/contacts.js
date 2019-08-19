"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contacts = function (_React$Component) {
  _inherits(Contacts, _React$Component);

  function Contacts() {
    _classCallCheck(this, Contacts);

    return _possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).apply(this, arguments));
  }

  _createClass(Contacts, [{
    key: "render",
    value: function render() {
      var contacts = this.props.contacts.map(function (contactDetails, i) {
        return _react2.default.createElement(
          "li",
          { key: "contact" + i },
          _react2.default.createElement(
            "a",
            {
              href: contactDetails.link,
              onClick: contactDetails.onClick ? function (e) {
                e.preventDefault();
                e.stopPropagation();
                contactDetails.onClick();
              } : function () {}
            },
            _react2.default.createElement("img", { className: "contacts-list-img", src: contactDetails.img, alt: contactDetails.name + " User Image" }),
            _react2.default.createElement(
              "div",
              { className: "contacts-list-info" },
              _react2.default.createElement(
                "span",
                { className: "contacts-list-name" },
                contactDetails.name,
                _react2.default.createElement(
                  "small",
                  { className: "contacts-list-date pull-right" },
                  contactDetails.date
                )
              ),
              _react2.default.createElement(
                "span",
                { className: "contacts-list-msg" },
                contactDetails.message
              )
            )
          )
        );
      });
      return _react2.default.createElement(
        "div",
        { className: "direct-chat-contacts" },
        _react2.default.createElement(
          "ul",
          { className: "contacts-list" },
          contacts
        )
      );
    }
  }]);

  return Contacts;
}(_react2.default.Component);

exports.default = Contacts;
module.exports = exports["default"];
//# sourceMappingURL=contacts.js.map
