"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var pagination_1 = require("@react-bootstrap/pagination");
var renderer = require("react-test-renderer");
var DataTable_1 = require("./DataTable");
test('calls onPageClick', function () {
    var called = false;
    var wrapper = enzyme_1.shallow(React.createElement(DataTable_1.default, { pageSize: 10, totalItems: 10, onPageClick: function () { called = true; } }));
    wrapper.find(pagination_1.Pagination).simulate('select');
    expect(called).toEqual(true);
});
test('Renders no items', function () {
    var component = renderer.create(React.createElement(DataTable_1.default, { totalItems: 0, currentPage: 1, pageSize: 10, onPageClick: function () { } },
        React.createElement("tbody", null,
            React.createElement("tr", null,
                React.createElement("td", null, "The goods")))));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders first page', function () {
    var component = renderer.create(React.createElement(DataTable_1.default, { totalItems: 40, currentPage: 1, pageSize: 10, onPageClick: function () { } },
        React.createElement("tbody", null,
            React.createElement("tr", null,
                React.createElement("td", null, "The goods")))));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders intermediary page', function () {
    var component = renderer.create(React.createElement(DataTable_1.default, { totalItems: 40, currentPage: 2, pageSize: 10, onPageClick: function () { } },
        React.createElement("tbody", null,
            React.createElement("tr", null,
                React.createElement("td", null, "The goods")))));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders total items less than page count', function () {
    var component = renderer.create(React.createElement(DataTable_1.default, { totalItems: 33, currentPage: 4, pageSize: 10, onPageClick: function () { } },
        React.createElement("tbody", null,
            React.createElement("tr", null,
                React.createElement("td", null, "The goods")))));
    expect(component.toJSON()).toMatchSnapshot();
});
test('Renders total items equal to page count', function () {
    var component = renderer.create(React.createElement(DataTable_1.default, { totalItems: 40, currentPage: 4, pageSize: 10, onPageClick: function () { } },
        React.createElement("tbody", null,
            React.createElement("tr", null,
                React.createElement("td", null, "The goods")))));
    expect(component.toJSON()).toMatchSnapshot();
});
//# sourceMappingURL=DataTable.test.js.map