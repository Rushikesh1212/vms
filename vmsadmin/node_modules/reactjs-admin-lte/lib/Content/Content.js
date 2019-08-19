"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var classNames = require("classnames");
var ContentHeader_1 = require("./ContentHeader");
var ContentBody_1 = require("./ContentBody");
;
var propTypes = {
    className: PropTypes.string
};
;
var Content = (function (_a) {
    var className = _a.className, children = _a.children;
    var classes = {
        'content-wrapper': true,
    };
    return (React.createElement("div", { className: classNames(className, classes) }, children));
});
Content.propTypes = propTypes;
Content.Header = ContentHeader_1.default;
Content.Body = ContentBody_1.default;
exports.default = Content;
//# sourceMappingURL=Content.js.map