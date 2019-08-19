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
var BoxTools = function (_a) {
    var className = _a.className, children = _a.children;
    var classes = {
        'box-tools': true,
    };
    return (React.createElement("div", { className: classNames(className, classes) }, children));
};
BoxTools.propTypes = propTypes;
exports.default = BoxTools;
//# sourceMappingURL=BoxTools.js.map