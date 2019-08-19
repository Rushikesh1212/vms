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
var MainHeaderMiniLogo = function (_a) {
    var children = _a.children, className = _a.className;
    var classes = {
        'logo-mini': true,
    };
    return (React.createElement("span", { className: classNames(className, classes) }, children));
};
MainHeaderMiniLogo.propTypes = propTypes;
exports.default = MainHeaderMiniLogo;
//# sourceMappingURL=MainHeaderMiniLogo.js.map