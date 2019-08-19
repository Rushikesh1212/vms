"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var MainSidebarMenuHeader_1 = require("./MainSidebarMenuHeader");
var MainSidebarMenuItem_1 = require("./MainSidebarMenuItem");
;
var propTypes = {
    children: PropTypes.node,
};
var MainSidebarMenu = (function (_a) {
    var children = _a.children;
    return (React.createElement("ul", { className: "sidebar-menu" }, children));
});
MainSidebarMenu.propTypes = propTypes;
MainSidebarMenu.Header = MainSidebarMenuHeader_1.default;
MainSidebarMenu.Item = MainSidebarMenuItem_1.default;
exports.default = MainSidebarMenu;
//# sourceMappingURL=MainSidebarMenu.js.map