"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var renderer = require("react-test-renderer");
var DataTableHeaderCell_1 = require("./DataTableHeaderCell");
test('calls onClick', function () {
    var called = false;
    var wrapper = enzyme_1.shallow(React.createElement(DataTableHeaderCell_1.default, { onClick: function () { called = true; } }));
    wrapper.simulate('click');
    expect(called).toEqual(true);
});
test('Renders default', function () {
    var component = renderer.create(React.createElement(DataTableHeaderCell_1.default, { onClick: function () { } }));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders ascending', function () {
    var component = renderer.create(React.createElement(DataTableHeaderCell_1.default, { sorted: "asc", onClick: function () { } }));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders descending', function () {
    var component = renderer.create(React.createElement(DataTableHeaderCell_1.default, { sorted: "desc", onClick: function () { } }));
    expect(component.toJSON()).toMatchSnapshot();
});
//# sourceMappingURL=DataTableHeaderCell.test.js.map