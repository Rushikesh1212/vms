"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var classNames = require("classnames");
var react_bootstrap_1 = require("react-bootstrap");
;
var propTypes = {
    background: PropTypes.oneOf(['light-blue', 'red', 'green', 'yellow']),
    className: PropTypes.string,
    children: PropTypes.node,
};
var Label = function (_a) {
    var background = _a.background, className = _a.className, children = _a.children;
    var classes = {};
    if (background) {
        classes["bg-" + background] = true;
    }
    return (React.createElement(react_bootstrap_1.Label, { className: classNames(className, classes) }, children));
};
Label.propTypes = propTypes;
exports.default = Label;
//# sourceMappingURL=Label.js.map