"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var FontAwesome = require("react-fontawesome");
var BoxToolButton_1 = require("./BoxToolButton");
var contextTypes = {
    $adminlte_box: PropTypes.shape({
        collapsed: PropTypes.bool,
        onCollapseToggle: PropTypes.func,
    }),
};
var BoxCollapsedToggleButton = function (undefined, context) {
    var name = (context.$adminlte_box.collapsed)
        ? 'plus'
        : 'minus';
    return (React.createElement(BoxToolButton_1.default, { onClick: context.$adminlte_box.onCollapseToggle },
        React.createElement(FontAwesome, { name: name })));
};
BoxCollapsedToggleButton.contextTypes = contextTypes;
exports.default = BoxCollapsedToggleButton;
//# sourceMappingURL=BoxCollapsedToggleButton.js.map