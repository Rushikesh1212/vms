"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var BoxRemoveButton_1 = require("./BoxRemoveButton");
test('Box notified when clicked', function () {
    var received = false;
    var wrapper = enzyme_1.shallow(React.createElement(BoxRemoveButton_1.default, null), {
        context: {
            $adminlte_box: {
                onRemove: function () { received = true; },
            },
        },
    });
    wrapper.simulate('click');
    expect(received).toEqual(true);
});
//# sourceMappingURL=BoxRemoveButton.test.js.map