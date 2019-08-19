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
var MainSidebarMenuItemAddonList = function (_a) {
    var children = _a.children, className = _a.className;
    var classes = {
        'pull-right-container': true,
    };
    return (React.createElement("span", { className: classNames(className, classes) }, children));
};
MainSidebarMenuItemAddonList.propTypes = propTypes;
exports.default = MainSidebarMenuItemAddonList;
//# sourceMappingURL=MainSidebarMenuItemAddonList.js.map