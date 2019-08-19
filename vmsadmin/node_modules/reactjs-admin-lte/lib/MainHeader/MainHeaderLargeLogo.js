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
var MainHeaderLargeLogo = function (_a) {
    var children = _a.children, className = _a.className;
    var classes = {
        'logo-lg': true,
    };
    return (React.createElement("span", { className: classNames(className, classes) }, children));
};
MainHeaderLargeLogo.propTypes = propTypes;
exports.default = MainHeaderLargeLogo;
//# sourceMappingURL=MainHeaderLargeLogo.js.map