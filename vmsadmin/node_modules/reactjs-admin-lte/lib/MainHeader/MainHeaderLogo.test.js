"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var MainHeaderLogo_1 = require("./MainHeaderLogo");
test('calls onClick', function () {
    var called = false;
    var wrapper = enzyme_1.shallow(React.createElement(MainHeaderLogo_1.default, { onClick: function () { called = true; } }));
    wrapper.simulate('click');
    expect(called).toEqual(true);
});
//# sourceMappingURL=MainHeaderLogo.test.js.map