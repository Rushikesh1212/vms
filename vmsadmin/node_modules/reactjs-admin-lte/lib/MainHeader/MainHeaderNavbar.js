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
var MainHeaderNavbar = function (_a) {
    var children = _a.children, className = _a.className;
    var classes = {
        navbar: true,
        'navbar-static-top': true,
    };
    return (React.createElement("nav", { className: classNames(className, classes) }, children));
};
MainHeaderNavbar.propTypes = propTypes;
exports.default = MainHeaderNavbar;
//# sourceMappingURL=MainHeaderNavbar.js.map