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
    date: PropTypes.string,
};
var DirectChatContactInfo = function (_a) {
    var children = _a.children, className = _a.className, name = _a.name, date = _a.date;
    var classes = {
        'contacts-list-info': true,
    };
    return (React.createElement("div", { className: classNames(className, classes) },
        React.createElement("div", { className: "contacts-list-name" },
            name,
            React.createElement("div", { className: "contacts-list-date pull-right" }, date)),
        React.createElement("div", { className: "contacts-list-msg" }, children)));
};
DirectChatContactInfo.propTypes = propTypes;
exports.default = DirectChatContactInfo;
//# sourceMappingURL=DirectChatContactInfo.js.map