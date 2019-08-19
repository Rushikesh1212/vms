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
var MainSidebarMenuHeader = function (_a) {
    var children = _a.children, className = _a.className;
    var classes = {
        header: true,
    };
    return (React.createElement("li", { className: classNames(className, classes) }, children));
};
MainSidebarMenuHeader.propTypes = propTypes;
exports.default = MainSidebarMenuHeader;
//# sourceMappingURL=MainSidebarMenuHeader.js.map