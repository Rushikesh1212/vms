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
var Box_1 = require("./Box");
;
var ToggleCollapse = /** @class */ (function (_super) {
    __extends(ToggleCollapse, _super);
    function ToggleCollapse(props, context) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            collapse: context.$adminlte_box.onCollapseToggle,
        };
        return _this;
    }
    ToggleCollapse.prototype.componentDidMount = function () {
        this.state.collapse();
    };
    ToggleCollapse.prototype.render = function () {
        return null;
    };
    ToggleCollapse.contextTypes = {
        $adminlte_box: PropTypes.shape({
            onCollapseToggle: PropTypes.func,
        }),
    };
    return ToggleCollapse;
}(React.Component));
test('Collapses on toggle', function () {
    var wrapper = enzyme_1.mount(React.createElement(Box_1.default, null,
        React.createElement(ToggleCollapse, null)));
    expect(wrapper.render().hasClass('collapsed-box')).toEqual(true);
});
test('Expands on toggle', function () {
    var wrapper = enzyme_1.mount(React.createElement(Box_1.default, { collapsed: true },
        React.createElement(ToggleCollapse, null)));
    expect(wrapper.render().hasClass('collapsed-box')).toEqual(false);
});
;
var Remove = /** @class */ (function (_super) {
    __extends(Remove, _super);
    function Remove(props, context) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            remove: context.$adminlte_box.onRemove,
        };
        return _this;
    }
    Remove.prototype.componentDidMount = function () {
        this.state.remove();
    };
    Remove.prototype.render = function () {
        return null;
    };
    Remove.contextTypes = {
        $adminlte_box: PropTypes.shape({
            onRemove: PropTypes.func,
        }),
    };
    return Remove;
}(React.Component));
test('Render null when removed', function () {
    var wrapper = enzyme_1.mount(React.createElement(Box_1.default, null,
        React.createElement(Remove, null)));
    expect(wrapper.html()).toEqual(null);
});
test('Renders default', function () {
    var component = renderer.create(React.createElement(Box_1.default, null));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders with style', function () {
    var component = renderer.create(React.createElement(Box_1.default, { style: "primary" }));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders solid', function () {
    var component = renderer.create(React.createElement(Box_1.default, { solid: true }));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders loading', function () {
    var component = renderer.create(React.createElement(Box_1.default, { loading: true }));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders loading with "spinner" icon', function () {
    var component = renderer.create(React.createElement(Box_1.default, { loading: true, spinner: "spinner" }));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders collapsed', function () {
    var component = renderer.create(React.createElement(Box_1.default, { collapsed: true }));
    expect(component.toJSON()).toMatchSnapshot();
});
//# sourceMappingURL=Box.test.js.map