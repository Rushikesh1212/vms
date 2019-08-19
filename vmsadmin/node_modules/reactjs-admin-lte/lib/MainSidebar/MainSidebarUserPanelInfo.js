"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var classNames = require("classnames");
;
var propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
var MainSidebarUserPanelInfo = function (_a) {
    var children = _a.children, className = _a.className;
    var classes = {
        info: true,
        'pull-left': true,
    };
    return (React.createElement("div", { className: classNames(className, classes) }, children));
};
MainSidebarUserPanelInfo.propTypes = propTypes;
exports.default = MainSidebarUserPanelInfo;
//# sourceMappingURL=MainSidebarUserPanelInfo.js.map