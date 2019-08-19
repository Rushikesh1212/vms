"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var BoxCollapsedToggleButton_1 = require("./BoxCollapsedToggleButton");
test('Box notified when clicked', function () {
    var received = false;
    var wrapper = enzyme_1.shallow(React.createElement(BoxCollapsedToggleButton_1.default, null), {
        context: {
            $adminlte_box: {
                onCollapseToggle: function () { received = true; },
            },
        },
    });
    wrapper.simulate('click');
    expect(received).toEqual(true);
});
//# sourceMappingURL=BoxCollapsedToggleButton.test.js.map