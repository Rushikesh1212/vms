"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var FontAwesome = require("react-fontawesome");
var classNames = require("classnames");
var MainSidebarMenuItemAddonList_1 = require("./MainSidebarMenuItemAddonList");
var MainSidebarMenuItemAddon_1 = require("./MainSidebarMenuItemAddon");
;
;
var propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    href: PropTypes.string,
    iconName: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string,
};
var MainSidebarMenuItem = (function (_a) {
    var active = _a.active, children = _a.children, href = _a.href, iconName = _a.iconName, onClick = _a.onClick, title = _a.title;
    var classes = {
        active: active,
    };
    var icon = iconName
        ? React.createElement(FontAwesome, { name: iconName, tag: "i" })
        : null;
    return (React.createElement("li", { className: classNames(classes) },
        React.createElement("a", { href: href, onClick: onClick },
            icon,
            React.createElement("span", null, title),
            children)));
});
MainSidebarMenuItem.propTypes = propTypes;
MainSidebarMenuItem.AddonList = MainSidebarMenuItemAddonList_1.default;
MainSidebarMenuItem.Addon = MainSidebarMenuItemAddon_1.default;
exports.default = MainSidebarMenuItem;
//# sourceMappingURL=MainSidebarMenuItem.js.map