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
var DirectChatContactList = function (_a) {
    var children = _a.children, className = _a.className;
    var classes = {
        'direct-chat-contacts': true,
    };
    return (React.createElement("div", { className: classNames(className, classes) },
        React.createElement("ul", { className: "contacts-list" }, children)));
};
DirectChatContactList.propTypes = propTypes;
exports.default = DirectChatContactList;
//# sourceMappingURL=DirectChatContactList.js.map