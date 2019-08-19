"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var classNames = require("classnames");
;
var propTypes = {
    noPadding: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
};
var defaultProps = {
    noPadding: false,
};
var BoxBody = (function (_a) {
    var className = _a.className, children = _a.children, noPadding = _a.noPadding;
    var classes = {
        'box-body': true,
        'no-padding': noPadding,
    };
    return (React.createElement("div", { className: classNames(className, classes) }, children));
});
BoxBody.propTypes = propTypes;
BoxBody.defaultProps = defaultProps;
exports.default = BoxBody;
//# sourceMappingURL=BoxBody.js.map