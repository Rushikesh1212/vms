"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var FontAwesome = require("react-fontawesome");
var react_bootstrap_1 = require("react-bootstrap");
var BoxToolButton_1 = require("../Box/BoxToolButton");
var contextTypes = {
    $adminlte_directchat: PropTypes.shape({
        toggleContacts: PropTypes.func,
    }),
};
var DirectChatToggleContactsButton = function (undefined, context) {
    var tooltip = (React.createElement(react_bootstrap_1.Tooltip, { id: "direct-chat-contacts-tooltip" }, "Contacts"));
    return (React.createElement(react_bootstrap_1.OverlayTrigger, { overlay: tooltip, placement: "top", trigger: ['focus', 'hover'] },
        React.createElement("span", null,
            React.createElement(BoxToolButton_1.default, { onClick: context.$adminlte_directchat.toggleContacts },
                React.createElement(FontAwesome, { name: "comments" })))));
};
DirectChatToggleContactsButton.contextTypes = contextTypes;
exports.default = DirectChatToggleContactsButton;
//# sourceMappingURL=DirectChatToggleContactsButton.js.map