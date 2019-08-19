"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var classNames = require("classnames");
;
var propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    name: PropTypes.string,
    right: PropTypes.bool,
    timestamp: PropTypes.string,
};
var defaultProps = {
    right: false,
};
var DirectChatMessage = function (_a) {
    var children = _a.children, className = _a.className, name = _a.name, right = _a.right, timestamp = _a.timestamp;
    var classes = {
        'direct-chat-msg': true,
        right: right,
    };
    return (React.createElement("div", { className: classNames(className, classes) },
        React.createElement("div", { className: "direct-chat-info clearfix" },
            React.createElement("span", { className: "direct-chat-name pull-left" }, name),
            React.createElement("span", { className: "direct-chat-timestamp pull-right" }, timestamp)),
        children));
};
DirectChatMessage.propTypes = propTypes;
DirectChatMessage.defaultProps = defaultProps;
exports.default = DirectChatMessage;
//# sourceMappingURL=DirectChatMessage.js.map