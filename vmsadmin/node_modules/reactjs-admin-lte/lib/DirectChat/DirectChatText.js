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
var DirectChatText = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement("div", { className: classNames(className, { 'direct-chat-text': true }) }, children);
};
DirectChatText.propTypes = propTypes;
exports.default = DirectChatText;
//# sourceMappingURL=DirectChatText.js.map