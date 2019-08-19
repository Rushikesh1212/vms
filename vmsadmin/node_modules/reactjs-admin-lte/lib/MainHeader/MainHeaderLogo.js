"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var classNames = require("classnames");
var MainHeaderMiniLogo_1 = require("./MainHeaderMiniLogo");
var MainHeaderLargeLogo_1 = require("./MainHeaderLargeLogo");
;
;
var propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
};
var MainHeaderLogo = (function (_a) {
    var children = _a.children, className = _a.className, href = _a.href, onClick = _a.onClick;
    var classes = {
        logo: true,
    };
    return (React.createElement("a", { className: classNames(className, classes), href: href, onClick: onClick }, children));
});
MainHeaderLogo.propTypes = propTypes;
MainHeaderLogo.Mini = MainHeaderMiniLogo_1.default;
MainHeaderLogo.Large = MainHeaderLargeLogo_1.default;
exports.default = MainHeaderLogo;
//# sourceMappingURL=MainHeaderLogo.js.map