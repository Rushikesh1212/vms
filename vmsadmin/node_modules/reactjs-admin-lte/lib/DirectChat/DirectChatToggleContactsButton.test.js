"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var BoxToolButton_1 = require("../Box/BoxToolButton");
var DirectChatToggleContactsButton_1 = require("./DirectChatToggleContactsButton");
test('DirectChatToggleContactsButton notifies DirectChat when clicked', function () {
    var received = false;
    var wrapper = enzyme_1.shallow(React.createElement(DirectChatToggleContactsButton_1.default, null), {
        context: {
            $adminlte_directchat: {
                toggleContacts: function () { received = true; },
            },
        },
    });
    wrapper.find(BoxToolButton_1.default).simulate('click');
    expect(received).toEqual(true);
});
//# sourceMappingURL=DirectChatToggleContactsButton.test.js.map