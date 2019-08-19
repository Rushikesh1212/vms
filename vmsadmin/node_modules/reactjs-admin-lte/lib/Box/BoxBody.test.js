"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var renderer = require("react-test-renderer");
var BoxBody_1 = require("./BoxBody");
test('Renders default', function () {
    var component = renderer.create(React.createElement(BoxBody_1.default, null));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders without padding', function () {
    var component = renderer.create(React.createElement(BoxBody_1.default, { noPadding: true }));
    expect(component.toJSON()).toMatchSnapshot();
});
//# sourceMappingURL=BoxBody.test.js.map