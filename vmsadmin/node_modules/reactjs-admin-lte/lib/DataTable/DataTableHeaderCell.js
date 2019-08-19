"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var classNames = require("classnames");
;
var propTypes = {
    sorted: PropTypes.oneOf(['asc', 'desc']),
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
};
var defaultProps = {
    onClick: function () { },
};
var DataTableHeaderCell = function (_a) {
    var children = _a.children, onClick = _a.onClick, sorted = _a.sorted;
    var classes = {
        sorting_asc: sorted === 'asc',
        sorting_desc: sorted === 'desc',
        sorting: !sorted,
    };
    return (React.createElement("th", { className: classNames(classes), onClick: onClick }, children));
};
DataTableHeaderCell.propTypes = propTypes;
DataTableHeaderCell.defaultProps = defaultProps;
exports.default = DataTableHeaderCell;
//# sourceMappingURL=DataTableHeaderCell.js.map