"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var propTypes = {
    children: PropTypes.node,
};
var MailboxReadMessage = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "mailbox-read-message" }, children));
};
MailboxReadMessage.propTypes = propTypes;
exports.default = MailboxReadMessage;
//# sourceMappingURL=MailboxReadMessage.js.map