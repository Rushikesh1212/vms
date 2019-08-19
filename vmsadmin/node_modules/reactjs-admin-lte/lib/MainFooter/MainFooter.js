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
var MainFooter = function (_a) {
    var children = _a.children, className = _a.className;
    var classes = {
        'main-footer': true,
    };
    return (React.createElement("footer", { className: classNames(className, classes) }, children));
};
MainFooter.propTypes = propTypes;
exports.default = MainFooter;
//# sourceMappingURL=MainFooter.js.map