"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var renderer = require("react-test-renderer");
var Label_1 = require("./Label");
test('Renders default', function () {
    var component = renderer.create(React.createElement(Label_1.default, null, "old"));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders with background color', function () {
    var component = renderer.create(React.createElement(Label_1.default, { background: "green" }, "old"));
    expect(component.toJSON()).toMatchSnapshot();
});
//# sourceMappingURL=Label.test.js.map