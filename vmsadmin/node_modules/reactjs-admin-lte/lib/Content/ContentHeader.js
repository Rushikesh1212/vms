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
var ContentHeader = function (_a) {
    var className = _a.className, children = _a.children;
    var classes = {
        'content-header': true,
    };
    return (React.createElement("div", { className: classNames(className, classes) }, children));
};
ContentHeader.propTypes = propTypes;
exports.default = ContentHeader;
//# sourceMappingURL=ContentHeader.js.map