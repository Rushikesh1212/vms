"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var MainSidebarUserPanel_1 = require("./MainSidebarUserPanel");
var MainSidebarMenu_1 = require("./MainSidebarMenu");
;
var propTypes = {
    children: PropTypes.node,
    collapsed: PropTypes.bool,
};
var defaultProps = {
    collapsed: false,
};
var contextTypes = {
    $adminlte_layout: PropTypes.shape({
        setMainSidebarCollapsed: PropTypes.func,
    }),
};
var MainSidebar = /** @class */ (function (_super) {
    __extends(MainSidebar, _super);
    function MainSidebar(props, context) {
        var _this = _super.call(this, props, context) || this;
        context.$adminlte_layout.setMainSidebarCollapsed(_this.props.collapsed);
        return _this;
    }
    MainSidebar.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        if (this.props.collapsed !== nextProps.collapsed) {
            nextContext.$adminlte_layout.setMainSidebarCollapsed(nextProps.collapsed);
        }
    };
    MainSidebar.prototype.render = function () {
        return (React.createElement("aside", { className: "main-sidebar" },
            React.createElement("section", { className: "sidebar" }, this.props.children)));
    };
    MainSidebar.propTypes = propTypes;
    MainSidebar.defaultProps = defaultProps;
    MainSidebar.contextTypes = contextTypes;
    return MainSidebar;
}(React.Component));
MainSidebar.UserPanel = MainSidebarUserPanel_1.default;
MainSidebar.Menu = MainSidebarMenu_1.default;
exports.default = MainSidebar;
//# sourceMappingURL=MainSidebar.js.map