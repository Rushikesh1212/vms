"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var MailboxAttachment_1 = require("./MailboxAttachment");
;
var propTypes = {
    children: PropTypes.node,
};
var MailboxAttachments = (function (_a) {
    var children = _a.children;
    return (React.createElement("ul", { className: "mailbox-attachments clearfix" }, children));
});
MailboxAttachments.propTypes = propTypes;
MailboxAttachments.Item = MailboxAttachment_1.default;
exports.default = MailboxAttachments;
//# sourceMappingURL=MailboxAttachments.js.map