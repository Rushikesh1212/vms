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
var BoxTitle = function (_a) {
    var children = _a.children, className = _a.className;
    var classes = {
        "box-title": true,
    };
    return (React.createElement("h3", { className: classNames(className, classes) }, children));
};
BoxTitle.propTypes = propTypes;
exports.default = BoxTitle;
//# sourceMappingURL=BoxTitle.js.map