"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var renderer = require("react-test-renderer");
var BoxFooter_1 = require("./BoxFooter");
test('Renders default', function () {
    var component = renderer.create(React.createElement(BoxFooter_1.default, null));
    expect(component.toJSON()).toMatchSnapshot();
});
//# sourceMappingURL=BoxFooter.test.js.map