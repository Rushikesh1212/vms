"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var MainSidebarMenuItem_1 = require("./MainSidebarMenuItem");
test('calls onClick', function () {
    var called = false;
    var wrapper = enzyme_1.shallow(React.createElement(MainSidebarMenuItem_1.default, { onClick: function () { called = true; } }));
    wrapper.find('a').simulate('click');
    expect(called).toEqual(true);
});
//# sourceMappingURL=MainSidebarMenuItem.test.js.map