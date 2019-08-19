"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var propTypes = {
    children: PropTypes.node,
};
var MailboxMessages = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "table-responsive mailbox-messages" }, children));
};
MailboxMessages.propTypes = propTypes;
exports.default = MailboxMessages;
//# sourceMappingURL=MailboxMessages.js.map