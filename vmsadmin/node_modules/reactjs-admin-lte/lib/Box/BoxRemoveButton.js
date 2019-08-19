"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var FontAwesome = require("react-fontawesome");
var BoxToolButton_1 = require("./BoxToolButton");
var contextTypes = {
    $adminlte_box: PropTypes.shape({
        onRemove: PropTypes.func,
    }),
};
var BoxRemoveButton = function (undefined, context) {
    return (React.createElement(BoxToolButton_1.default, { onClick: context.$adminlte_box.onRemove },
        React.createElement(FontAwesome, { name: "times" })));
};
BoxRemoveButton.contextTypes = contextTypes;
exports.default = BoxRemoveButton;
//# sourceMappingURL=BoxRemoveButton.js.map