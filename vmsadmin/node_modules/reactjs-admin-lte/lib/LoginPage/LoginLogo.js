"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var classNames = require("classnames");
;
var propTypes = {
    children: PropTypes.node,
    className: PropTypes.node,
};
var LoginLogo = function (_a) {
    var children = _a.children, className = _a.className;
    var classes = {
        "login-logo": true,
    };
    return (React.createElement("div", { className: classNames(className, classes) }, children));
};
LoginLogo.propTypes = propTypes;
exports.default = LoginLogo;
//# sourceMappingURL=LoginLogo.js.map