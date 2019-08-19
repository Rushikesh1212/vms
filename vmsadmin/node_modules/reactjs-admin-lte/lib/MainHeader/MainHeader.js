"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var MainHeaderLogo_1 = require("./MainHeaderLogo");
var MainHeaderSidebarToggle_1 = require("./MainHeaderSidebarToggle");
var MainHeaderNavbar_1 = require("./MainHeaderNavbar");
;
var propTypes = {
    children: PropTypes.node,
};
var MainHeader = (function (_a) {
    var children = _a.children;
    return (React.createElement("header", { className: "main-header" }, children));
});
MainHeader.propTypes = propTypes;
MainHeader.Logo = MainHeaderLogo_1.default;
MainHeader.SidebarToggle = MainHeaderSidebarToggle_1.default;
MainHeader.Navbar = MainHeaderNavbar_1.default;
exports.default = MainHeader;
//# sourceMappingURL=MainHeader.js.map