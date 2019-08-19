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
var enzyme_1 = require("enzyme");
var renderer = require("react-test-renderer");
var Layout_1 = require("./Layout");
test('Layout sets body classes on mount', function () {
    enzyme_1.mount(React.createElement(Layout_1.default, { skin: "blue" }));
    expect(document.body.classList.contains('skin-blue')).toEqual(true);
    expect(document.body.classList.contains('sidebar-mini')).toEqual(true);
});
test('Layout sets boxed class on body', function () {
    enzyme_1.mount(React.createElement(Layout_1.default, { skin: "blue", boxed: true }));
    expect(document.body.classList.contains('layout-boxed')).toEqual(true);
});
test('Layout sets fixed class on body', function () {
    enzyme_1.mount(React.createElement(Layout_1.default, { skin: "blue", fixed: true }));
    expect(document.body.classList.contains('fixed')).toEqual(true);
});
test('Layout sets body classes on receiving props', function () {
    var wrapper = enzyme_1.mount(React.createElement(Layout_1.default, { skin: "blue", boxed: true }));
    wrapper.setProps({ skin: 'red', boxed: false, fixed: false });
    expect(document.body.classList.contains('skin-blue')).toEqual(false);
    expect(document.body.classList.contains('skin-red')).toEqual(true);
    expect(document.body.classList.contains('layout-boxed')).toEqual(false);
    expect(document.body.classList.contains('fixed')).toEqual(false);
});
test('Layout keeps same skin on receiving props', function () {
    var wrapper = enzyme_1.mount(React.createElement(Layout_1.default, { skin: "blue" }));
    wrapper.setProps({ skin: 'blue' });
    expect(document.body.classList.contains('skin-blue')).toEqual(true);
});
test('Layout removes body classes on unmount', function () {
    var wrapper = enzyme_1.mount(React.createElement(Layout_1.default, { skin: "blue", boxed: true, fixed: true }));
    document.body.classList.add('sidebar-collapse');
    wrapper.unmount();
    expect(document.body.classList.contains('sidebar-mini')).toEqual(false);
    expect(document.body.classList.contains('sidebar-collapse')).toEqual(false);
    expect(document.body.classList.contains('skin-blue')).toEqual(false);
    expect(document.body.classList.contains('layout-boxed')).toEqual(false);
    expect(document.body.classList.contains('fixed')).toEqual(false);
});
;
var SetCollapse = /** @class */ (function (_super) {
    __extends(SetCollapse, _super);
    function SetCollapse(props, context) {
        var _this = _super.call(this, props) || this;
        context.$adminlte_layout.setMainSidebarCollapsed(props.collapsed);
        return _this;
    }
    SetCollapse.prototype.render = function () {
        return null;
    };
    SetCollapse.propTypes = {
        collapsed: PropTypes.bool.isRequired,
    };
    SetCollapse.contextTypes = {
        $adminlte_layout: PropTypes.shape({
            setMainSidebarCollapsed: PropTypes.func,
        }),
    };
    return SetCollapse;
}(React.Component));
test('Collapses sidebar on set', function () {
    enzyme_1.mount(React.createElement(Layout_1.default, { skin: "blue" },
        React.createElement(SetCollapse, { collapsed: true })));
    expect(document.body.classList.contains('sidebar-collapse')).toEqual(true);
});
test('Expands sidebar on set', function () {
    document.body.classList.add('sidebar-collapse');
    enzyme_1.mount(React.createElement(Layout_1.default, { skin: "blue" },
        React.createElement(SetCollapse, { collapsed: false })));
    expect(document.body.classList.contains('sidebar-collapse')).toEqual(false);
});
var ToggleCollapse = /** @class */ (function (_super) {
    __extends(ToggleCollapse, _super);
    function ToggleCollapse(props, context) {
        var _this = _super.call(this, props) || this;
        context.$adminlte_layout.toggleMainSidebar();
        return _this;
    }
    ToggleCollapse.prototype.render = function () {
        return null;
    };
    ToggleCollapse.contextTypes = {
        $adminlte_layout: PropTypes.shape({
            toggleMainSidebar: PropTypes.func,
        }),
    };
    return ToggleCollapse;
}(React.Component));
test('Collapses sidebar on toggle', function () {
    enzyme_1.mount(React.createElement(Layout_1.default, { skin: "blue" },
        React.createElement(ToggleCollapse, null)));
    expect(document.body.classList.contains('sidebar-collapse')).toEqual(true);
});
test('Expands sidebar on toggle', function () {
    document.body.classList.add('sidebar-collapse');
    enzyme_1.mount(React.createElement(Layout_1.default, { skin: "blue" },
        React.createElement(ToggleCollapse, null)));
    expect(document.body.classList.contains('sidebar-collapse')).toEqual(false);
});
test('Renders default', function () {
    var component = renderer.create(React.createElement(Layout_1.default, { skin: "blue" }));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders boxed', function () {
    var component = renderer.create(React.createElement(Layout_1.default, { boxed: true, skin: "blue" }));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders fixed', function () {
    var component = renderer.create(React.createElement(Layout_1.default, { fixed: true, skin: "blue" }));
    expect(component.toJSON()).toMatchSnapshot();
});
//# sourceMappingURL=Layout.test.js.map