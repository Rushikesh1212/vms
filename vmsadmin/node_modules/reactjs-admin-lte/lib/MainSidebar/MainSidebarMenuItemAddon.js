"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var classNames = require("classnames");
var Label_1 = require("../Label");
;
var propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
if (Label_1.default.propTypes) {
    propTypes['background'] = Label_1.default.propTypes.background;
}
var MainSidebarMenuItemAddon = function (_a) {
    var background = _a.background, children = _a.children, className = _a.className;
    var classes = {
        'pull-right': true,
    };
    return (React.createElement(Label_1.default, { background: background, className: classNames(className, classes) }, children));
};
MainSidebarMenuItemAddon.propTypes = propTypes;
exports.default = MainSidebarMenuItemAddon;
//# sourceMappingURL=MainSidebarMenuItemAddon.js.map