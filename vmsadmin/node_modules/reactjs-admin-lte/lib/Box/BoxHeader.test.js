"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var renderer = require("react-test-renderer");
var BoxHeader_1 = require("./BoxHeader");
test('Renders default', function () {
    var component = renderer.create(React.createElement(BoxHeader_1.default, null));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders bordered', function () {
    var component = renderer.create(React.createElement(BoxHeader_1.default, { border: true }));
    expect(component.toJSON()).toMatchSnapshot();
});
//# sourceMappingURL=BoxHeader.test.js.map