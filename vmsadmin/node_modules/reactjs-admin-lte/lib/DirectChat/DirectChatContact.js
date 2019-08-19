"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
;
var propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
var DirectChatContact = function (_a) {
    var children = _a.children, className = _a.className, onClick = _a.onClick;
    return React.createElement("li", { className: className, onClick: onClick, role: "button" }, children);
};
DirectChatContact.propTypes = propTypes;
exports.default = DirectChatContact;
//# sourceMappingURL=DirectChatContact.js.map