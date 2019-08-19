"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var classNames = require("classnames");
var react_bootstrap_1 = require("react-bootstrap");
var Badge_1 = require("../Badge");
var Box_1 = require("../Box");
var DirectChatToggleContactsButton_1 = require("./DirectChatToggleContactsButton");
var DirectChatMessageList_1 = require("./DirectChatMessageList");
var DirectChatMessage_1 = require("./DirectChatMessage");
var DirectChatImage_1 = require("./DirectChatImage");
var DirectChatText_1 = require("./DirectChatText");
var DirectChatContactList_1 = require("./DirectChatContactList");
var DirectChatContact_1 = require("./DirectChatContact");
var DirectChatContactImage_1 = require("./DirectChatContactImage");
var DirectChatContactInfo_1 = require("./DirectChatContactInfo");
;
;
var propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    messageNumber: PropTypes.number,
    style: PropTypes.oneOf(['primary', 'success', 'warning', 'danger']).isRequired,
    onSubmitMessage: PropTypes.func,
    title: PropTypes.node,
};
var childContextTypes = {
    $adminlte_directchat: PropTypes.shape({
        toggleContacts: PropTypes.func,
    }),
};
var DirectChat = /** @class */ (function (_super) {
    __extends(DirectChat, _super);
    function DirectChat(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            contactsOpen: false,
            message: '',
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    DirectChat.prototype.getChildContext = function () {
        var _this = this;
        return {
            $adminlte_directchat: {
                toggleContacts: function () {
                    _this.setState(function (state) {
                        return {
                            contactsOpen: !state.contactsOpen,
                        };
                    });
                },
            },
        };
    };
    DirectChat.prototype.handleChange = function (e) {
        this.setState({
            message: e.target.value,
        });
    };
    DirectChat.prototype.handleSubmit = function (e) {
        e.preventDefault();
        if (this.props.onSubmitMessage) {
            this.props.onSubmitMessage(this.state.message);
        }
    };
    DirectChat.prototype.renderBadge = function () {
        var _a = this.props, messageNumber = _a.messageNumber, style = _a.style;
        switch (style) {
            case 'primary':
                return React.createElement(Badge_1.default, { background: "light-blue" }, messageNumber);
            case 'success':
                return React.createElement(Badge_1.default, { background: "green" }, messageNumber);
            case 'warning':
                return React.createElement(Badge_1.default, { background: "yellow" }, messageNumber);
            case 'danger':
                return React.createElement(Badge_1.default, { background: "red" }, messageNumber);
            default:
                return React.createElement(Badge_1.default, null, messageNumber);
        }
    };
    DirectChat.prototype.render = function () {
        var classes = {
            'direct-chat': true,
            'direct-chat-contacts-open': this.state.contactsOpen,
        };
        classes["direct-chat-" + this.props.style] = true;
        return (React.createElement(Box_1.default, { style: this.props.style, className: classNames(this.props.className, classes) },
            React.createElement(Box_1.default.Header, { border: true },
                React.createElement(Box_1.default.Title, null, this.props.title),
                React.createElement(Box_1.default.Tools, null,
                    React.createElement(react_bootstrap_1.OverlayTrigger, { overlay: React.createElement(react_bootstrap_1.Tooltip, { id: "direct-chat-messages-tooltip" },
                            this.props.messageNumber,
                            " New Messages"), placement: "top", trigger: ['focus', 'hover'] },
                        React.createElement("span", null, this.renderBadge())),
                    React.createElement(Box_1.default.CollapsedToggleButton, null),
                    React.createElement(DirectChatToggleContactsButton_1.default, null),
                    React.createElement(Box_1.default.RemoveButton, null))),
            React.createElement(Box_1.default.Body, null, this.props.children),
            React.createElement(Box_1.default.Footer, null,
                React.createElement(react_bootstrap_1.Form, { onSubmit: this.handleSubmit },
                    React.createElement(react_bootstrap_1.InputGroup, null,
                        React.createElement(react_bootstrap_1.FormControl, { name: "message", onChange: this.handleChange, placeholder: "Type Message...", type: "text", value: this.state.message }),
                        React.createElement(react_bootstrap_1.InputGroup.Button, null,
                            React.createElement(react_bootstrap_1.Button, { type: "submit", bsStyle: this.props.style }, "Send")))))));
    };
    DirectChat.propTypes = propTypes;
    DirectChat.childContextTypes = childContextTypes;
    return DirectChat;
}(React.Component));
DirectChat.MessageList = DirectChatMessageList_1.default;
DirectChat.Message = DirectChatMessage_1.default;
DirectChat.Image = DirectChatImage_1.default;
DirectChat.Text = DirectChatText_1.default;
DirectChat.ContactList = DirectChatContactList_1.default;
DirectChat.Contact = DirectChatContact_1.default;
DirectChat.ContactImage = DirectChatContactImage_1.default;
DirectChat.ContactInfo = DirectChatContactInfo_1.default;
exports.default = DirectChat;
//# sourceMappingURL=DirectChat.js.map