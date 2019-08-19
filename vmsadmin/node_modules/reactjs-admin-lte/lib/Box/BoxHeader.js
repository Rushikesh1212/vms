"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var classNames = require("classnames");
var BoxUserBlock_1 = require("./BoxUserBlock");
;
;
var propTypes = {
    border: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
};
var defaultProps = {
    border: false,
};
var BoxHeader = (function (_a) {
    var className = _a.className, children = _a.children, border = _a.border;
    var classes = {
        'box-header': true,
        'with-border': border,
    };
    return (React.createElement("div", { className: classNames(className, classes) }, children));
});
BoxHeader.propTypes = propTypes;
BoxHeader.defaultProps = defaultProps;
BoxHeader.UserBlock = BoxUserBlock_1.default;
exports.default = BoxHeader;
//# sourceMappingURL=BoxHeader.js.map