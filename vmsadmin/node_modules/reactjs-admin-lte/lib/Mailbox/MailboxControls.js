"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var classNames = require("classnames");
;
var propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
var MailboxControls = function (_a) {
    var children = _a.children, className = _a.className;
    var classes = {
        'mailbox-controls': true,
    };
    return (React.createElement("div", { className: classNames(className, classes) }, children));
};
MailboxControls.propTypes = propTypes;
exports.default = MailboxControls;
//# sourceMappingURL=MailboxControls.js.map