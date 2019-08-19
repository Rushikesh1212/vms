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
var DirectChatMessageList = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement("div", { className: classNames(className, { 'direct-chat-messages': true }) }, children);
};
DirectChatMessageList.propTypes = propTypes;
exports.default = DirectChatMessageList;
//# sourceMappingURL=DirectChatMessageList.js.map