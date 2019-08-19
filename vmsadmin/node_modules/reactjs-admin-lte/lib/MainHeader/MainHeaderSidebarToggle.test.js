"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var MainHeaderSidebarToggle_1 = require("./MainHeaderSidebarToggle");
test('MainHeaderSidebarToggle notifies when clicked', function () {
    var received = false;
    var wrapper = enzyme_1.shallow(React.createElement(MainHeaderSidebarToggle_1.default, null), {
        context: {
            $adminlte_layout: {
                toggleMainSidebar: function () {
                    received = true;
                },
            },
        },
    });
    wrapper.simulate('click');
    expect(received).toEqual(true);
});
//# sourceMappingURL=MainHeaderSidebarToggle.test.js.map