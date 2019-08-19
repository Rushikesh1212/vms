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
var Layout_1 = require("../Layout");
var MainSidebar_1 = require("../MainSidebar");
test('Layout notified when collapsed value changes', function () {
    var receivedVal = null;
    ;
    var LayoutFake = /** @class */ (function (_super) {
        __extends(LayoutFake, _super);
        function LayoutFake(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                collapsed: true,
            };
            return _this;
        }
        LayoutFake.prototype.getChildContext = function () {
            return {
                $adminlte_layout: {
                    setMainSidebarCollapsed: function (val) { return receivedVal = val; },
                },
            };
        };
        LayoutFake.prototype.render = function () {
            return React.createElement("div", null,
                React.createElement(MainSidebar_1.default, { collapsed: this.state.collapsed }));
        };
        LayoutFake.propTypes = {
            children: PropTypes.node,
        };
        LayoutFake.childContextTypes = Layout_1.default.childContextTypes;
        return LayoutFake;
    }(React.Component));
    var wrapper = enzyme_1.mount(React.createElement(LayoutFake, null));
    wrapper.setState({
        collapsed: false,
    });
    expect(receivedVal).toEqual(false);
    wrapper.setState({
        collapsed: true,
    });
    expect(receivedVal).toEqual(true);
});
//# sourceMappingURL=MainSidebar.test.js.map