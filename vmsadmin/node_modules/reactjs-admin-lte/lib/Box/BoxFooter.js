"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var classNames = require("classnames");
;
var propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
var BoxFooter = (function (_a) {
    var className = _a.className, children = _a.children;
    var classes = {
        'box-footer': true,
    };
    return (React.createElement("div", { className: classNames(className, classes) }, children));
});
BoxFooter.propTypes = propTypes;
exports.default = BoxFooter;
//# sourceMappingURL=BoxFooter.js.map