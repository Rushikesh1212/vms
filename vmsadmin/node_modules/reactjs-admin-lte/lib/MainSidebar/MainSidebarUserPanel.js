"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var MainSidebarUserPanelImage_1 = require("./MainSidebarUserPanelImage");
var MainSidebarUserPanelInfo_1 = require("./MainSidebarUserPanelInfo");
;
var propTypes = {
    children: PropTypes.node,
};
var MainSidebarUserPanel = (function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "user-panel" }, children));
});
MainSidebarUserPanel.propTypes = propTypes;
MainSidebarUserPanel.Image = MainSidebarUserPanelImage_1.default;
MainSidebarUserPanel.Info = MainSidebarUserPanelInfo_1.default;
exports.default = MainSidebarUserPanel;
//# sourceMappingURL=MainSidebarUserPanel.js.map