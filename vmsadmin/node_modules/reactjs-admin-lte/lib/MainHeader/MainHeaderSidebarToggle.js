"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var contextTypes = {
    $adminlte_layout: PropTypes.shape({
        toggleMainSidebar: PropTypes.func,
    }),
};
var SidebarToggle = function (undefined, context) { return (React.createElement("a", { href: "#", onClick: context.$adminlte_layout.toggleMainSidebar, className: "sidebar-toggle" },
    React.createElement("span", { className: "sr-only" }, "Toggle navigation"))); };
SidebarToggle.contextTypes = contextTypes;
exports.default = SidebarToggle;
//# sourceMappingURL=MainHeaderSidebarToggle.js.map