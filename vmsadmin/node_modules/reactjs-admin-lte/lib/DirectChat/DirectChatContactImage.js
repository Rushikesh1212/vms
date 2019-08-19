"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var classNames = require("classnames");
;
var propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
};
var DirectChatContactImage = function (_a) {
    var className = _a.className, src = _a.src, alt = _a.alt;
    return React.createElement("img", { alt: alt, className: classNames(className, { 'contacts-list-img': true }), src: src });
};
DirectChatContactImage.propTypes = propTypes;
exports.default = DirectChatContactImage;
//# sourceMappingURL=DirectChatContactImage.js.map