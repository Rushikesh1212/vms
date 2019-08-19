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
var DirectChatImage = function (_a) {
    var className = _a.className, src = _a.src, alt = _a.alt;
    return React.createElement("img", { alt: alt, className: classNames(className, { 'direct-chat-img': true }), src: src });
};
DirectChatImage.propTypes = propTypes;
exports.default = DirectChatImage;
//# sourceMappingURL=DirectChatImage.js.map