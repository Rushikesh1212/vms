"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var classNames = require("classnames");
;
var propTypes = {
    className: PropTypes.string
};
var ContentBody = function (_a) {
    var className = _a.className, children = _a.children;
    var classes = {
        'content': true,
    };
    return (React.createElement("div", { className: classNames(className, classes) }, children));
};
ContentBody.propTypes = propTypes;
exports.default = ContentBody;
//# sourceMappingURL=ContentBody.js.map