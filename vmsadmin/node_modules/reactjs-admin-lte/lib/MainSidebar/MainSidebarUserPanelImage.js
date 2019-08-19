"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var classNames = require("classnames");
;
var propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    src: PropTypes.string,
};
var MainSidebarUserPanelImage = function (_a) {
    var alt = _a.alt, className = _a.className, src = _a.src;
    var classes = {
        image: true,
        'pull-left': true,
    };
    return (React.createElement("div", { className: classNames(className, classes) },
        React.createElement("img", { alt: alt, src: src, className: "img-circle" })));
};
MainSidebarUserPanelImage.propTypes = propTypes;
exports.default = MainSidebarUserPanelImage;
//# sourceMappingURL=MainSidebarUserPanelImage.js.map