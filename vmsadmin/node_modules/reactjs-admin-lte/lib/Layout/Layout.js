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
var classNames = require("classnames");
;
;
var propTypes = {
    boxed: PropTypes.bool,
    fixed: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    skin: PropTypes.oneOf([
        'blue', 'black', 'purple', 'green', 'red', 'yellow', 'blue-light', 'black-light',
        'purple-light', 'green-light', 'red-light', 'yellow-light',
    ]).isRequired,
};
var defaultProps = {
    boxed: false,
    fixed: false,
};
var childContextTypes = {
    $adminlte_layout: PropTypes.shape({
        toggleMainSidebar: PropTypes.func,
    }),
};
var contextTypes = {
    document: PropTypes.object,
};
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            document: context.document ? context.document : document,
        };
        return _this;
    }
    Layout.prototype.componentDidMount = function () {
        this.state.document.body.classList.toggle('sidebar-mini', true);
        this.state.document.body.classList.toggle("skin-" + this.props.skin, true);
        if (this.props.boxed) {
            this.state.document.body.classList.toggle('layout-boxed', true);
        }
        if (this.props.fixed) {
            this.state.document.body.classList.toggle('fixed', true);
        }
    };
    Layout.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.skin !== nextProps.skin) {
            this.state.document.body.classList.toggle("skin-" + nextProps.skin, true);
            this.state.document.body.classList.toggle("skin-" + this.props.skin, false);
        }
        this.state.document.body.classList.toggle('layout-boxed', nextProps.boxed);
        this.state.document.body.classList.toggle('fixed', nextProps.fixed);
    };
    Layout.prototype.componentWillUnmount = function () {
        this.state.document.body.classList.toggle('sidebar-mini', false);
        this.state.document.body.classList.toggle("skin-" + this.props.skin, false);
        this.state.document.body.classList.toggle('layout-boxed', false);
        this.state.document.body.classList.toggle('fixed', false);
        this.state.document.body.classList.toggle('sidebar-collapse', false);
    };
    Layout.prototype.getChildContext = function () {
        var _this = this;
        return {
            $adminlte_layout: {
                toggleMainSidebar: function () {
                    _this.state.document.body.classList.toggle('sidebar-collapse');
                },
                setMainSidebarCollapsed: function (val) {
                    _this.state.document.body.classList.toggle('sidebar-collapse', val);
                },
            },
        };
    };
    Layout.prototype.render = function () {
        var classes = {
            wrapper: true,
        };
        return (React.createElement("div", { className: classNames(this.props.className, classes) }, this.props.children));
    };
    Layout.propTypes = propTypes;
    Layout.defaultProps = defaultProps;
    Layout.childContextTypes = childContextTypes;
    Layout.contextTypes = contextTypes;
    return Layout;
}(React.Component));
exports.default = Layout;
//# sourceMappingURL=Layout.js.map