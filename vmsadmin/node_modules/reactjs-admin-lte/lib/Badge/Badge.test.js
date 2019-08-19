"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var renderer = require("react-test-renderer");
var Badge_1 = require("./Badge");
test('Renders default', function () {
    var component = renderer.create(React.createElement(Badge_1.default, null, "14"));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders background color', function () {
    var component = renderer.create(React.createElement(Badge_1.default, { background: "red" }, "18"));
    expect(component.toJSON()).toMatchSnapshot();
});
//# sourceMappingURL=Badge.test.js.map