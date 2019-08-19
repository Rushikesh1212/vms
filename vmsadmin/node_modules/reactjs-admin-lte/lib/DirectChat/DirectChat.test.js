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
var enzyme_1 = require("enzyme");
var renderer = require("react-test-renderer");
var DirectChat_1 = require("./DirectChat");
var DirectChatMessage_1 = require("./DirectChatMessage");
var DirectChatMessageList_1 = require("./DirectChatMessageList");
var DirectChatImage_1 = require("./DirectChatImage");
var DirectChatText_1 = require("./DirectChatText");
var DirectChatContact_1 = require("./DirectChatContact");
var DirectChatContactList_1 = require("./DirectChatContactList");
var DirectChatContactImage_1 = require("./DirectChatContactImage");
var DirectChatContactInfo_1 = require("./DirectChatContactInfo");
test('Passes message on form submit', function () {
    var message = 'hey!';
    var received = '';
    var wrapper = enzyme_1.shallow(React.createElement(DirectChat_1.default, { style: "primary", onSubmitMessage: function (val) { received = val; } }));
    wrapper.find('[name="message"]').simulate('change', {
        target: {
            value: message,
        },
    });
    wrapper.find('Form').simulate('submit', {
        preventDefault: function () { },
    });
    expect(received).toEqual(message);
});
;
var ToggleContacts = /** @class */ (function (_super) {
    __extends(ToggleContacts, _super);
    function ToggleContacts(props, context) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            toggle: context.$adminlte_directchat.toggleContacts,
        };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }
    ToggleContacts.prototype.componentDidMount = function () {
        this.state.toggle();
    };
    ToggleContacts.prototype.toggle = function () {
        this.state.toggle();
    };
    ToggleContacts.prototype.render = function () {
        return React.createElement("a", { onClick: this.toggle });
    };
    ToggleContacts.contextTypes = {
        $adminlte_directchat: PropTypes.shape({
            toggleContacts: PropTypes.func,
        }),
    };
    return ToggleContacts;
}(React.Component));
test('Shown on toggle', function () {
    var wrapper = enzyme_1.mount(React.createElement(DirectChat_1.default, { style: "primary" },
        React.createElement(ToggleContacts, null)));
    expect(wrapper.state('contactsOpen')).toEqual(true);
});
test('Hidden on toggle', function () {
    var wrapper = enzyme_1.mount(React.createElement(DirectChat_1.default, { style: "primary" },
        React.createElement(ToggleContacts, null)));
    wrapper.find(ToggleContacts).find('a').simulate('click');
    expect(wrapper.render().hasClass('direct-chat-contacts-open')).toEqual(false);
});
test('Renders default', function () {
    var component = renderer.create(React.createElement(DirectChat_1.default, { onSubmitMessage: function () { }, messageNumber: 3, style: "primary", title: "Direct chat" },
        React.createElement(DirectChatMessageList_1.default, null,
            React.createElement(DirectChatMessage_1.default, { name: "Alexander Pierce", timestamp: "23 Jan 2:00 pm" },
                React.createElement(DirectChatImage_1.default, { src: "alexander.jpg", alt: "Message User Image" }),
                React.createElement(DirectChatText_1.default, null, "Is this really for free? That's unbelievable!")),
            React.createElement(DirectChatMessage_1.default, { name: "Sarah Bullock", timestamp: "23 Jan 2:05 pm" },
                React.createElement(DirectChatImage_1.default, { src: "sarah.jpg", alt: "Message User Image" }),
                React.createElement(DirectChatText_1.default, null, "You better believe it!"))),
        React.createElement(DirectChatContactList_1.default, null,
            React.createElement(DirectChatContact_1.default, { onClick: function () { } },
                React.createElement(DirectChatContactImage_1.default, { src: "alexander.jpg", alt: "User Image" }),
                React.createElement(DirectChatContactInfo_1.default, { name: "Count Dracula", date: "2/28/2015" }, "How have you been? I was...")))));
    expect(component.toJSON()).toMatchSnapshot();
});
//# sourceMappingURL=DirectChat.test.js.map