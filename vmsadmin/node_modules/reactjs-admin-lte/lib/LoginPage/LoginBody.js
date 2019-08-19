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
var LoginBody = function (_a) {
    var children = _a.children, className = _a.className;
    var classes = {
        "login-box-body": true,
    };
    return (React.createElement("div", { className: classNames(className, classes) }, children));
};
LoginBody.propTypes = propTypes;
exports.default = LoginBody;
//# sourceMappingURL=LoginBody.js.map