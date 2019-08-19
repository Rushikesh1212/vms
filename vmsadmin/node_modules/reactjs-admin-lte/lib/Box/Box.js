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
var react_1 = require("react");
var classNames = require("classnames");
var FontAwesome = require("react-fontawesome");
var BoxHeader_1 = require("./BoxHeader");
var BoxTitle_1 = require("./BoxTitle");
var BoxTools_1 = require("./BoxTools");
var BoxCollapsedToggleButton_1 = require("./BoxCollapsedToggleButton");
var BoxRemoveButton_1 = require("./BoxRemoveButton");
var BoxBody_1 = require("./BoxBody");
var BoxFooter_1 = require("./BoxFooter");
;
;
var propTypes = {
    collapsed: PropTypes.bool,
    style: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'widget']),
    solid: PropTypes.bool,
    loading: PropTypes.bool,
    spinner: PropTypes.oneOf(['circle-o-notch', 'cog', 'gear', 'refresh', 'spinner']),
    className: PropTypes.string,
    children: PropTypes.node,
    onCollapseToggle: PropTypes.func,
};
var defaultProps = {
    collapsed: false,
    loading: false,
    spinner: 'refresh',
    solid: false,
};
var childContextTypes = {
    $adminlte_box: PropTypes.shape({
        collapsed: PropTypes.bool,
        onCollapseToggle: PropTypes.func,
        onRemove: PropTypes.func,
    }),
};
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            collapsed: props.collapsed,
            removed: false,
        };
        return _this;
    }
    Box.prototype.getChildContext = function () {
        var _this = this;
        return {
            $adminlte_box: {
                collapsed: this.state.collapsed,
                onCollapseToggle: function () {
                    _this.setState(function (state) {
                        return {
                            collapsed: !state.collapsed,
                        };
                    });
                },
                onRemove: function () {
                    _this.setState({
                        removed: true,
                    });
                },
            },
        };
    };
    Box.prototype.render = function () {
        if (this.state.removed) {
            return null;
        }
        var _a = this.props, className = _a.className, children = _a.children, style = _a.style, solid = _a.solid, loading = _a.loading, spinner = _a.spinner;
        var classes = {
            box: true,
        };
        if (this.state.collapsed) {
            classes['collapsed-box'] = true;
        }
        if (style) {
            classes["box-" + style] = true;
        }
        if (solid) {
            classes['box-solid'] = true;
        }
        var overlay = loading
            ? React.createElement("div", { className: "overlay" },
                React.createElement(FontAwesome, { name: "" + spinner, spin: true }))
            : null;
        return (React.createElement("div", { className: classNames(className, classes) },
            children,
            overlay));
    };
    Box.propTypes = propTypes;
    Box.defaultProps = defaultProps;
    Box.childContextTypes = childContextTypes;
    return Box;
}(react_1.Component));
;
Box.Header = BoxHeader_1.default;
Box.Title = BoxTitle_1.default;
Box.Tools = BoxTools_1.default;
Box.CollapsedToggleButton = BoxCollapsedToggleButton_1.default;
Box.RemoveButton = BoxRemoveButton_1.default;
Box.Body = BoxBody_1.default;
Box.Footer = BoxFooter_1.default;
exports.default = Box;
//# sourceMappingURL=Box.js.map