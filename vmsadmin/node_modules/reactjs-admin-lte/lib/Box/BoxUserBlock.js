"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
;
var propTypes = {
    image: PropTypes.node,
    username: PropTypes.string,
    href: PropTypes.string,
    description: PropTypes.string,
    className: PropTypes.string,
};
var BoxUserBlock = function (_a) {
    var image = _a.image, username = _a.username, href = _a.href, description = _a.description, className = _a.className;
    return (React.createElement("div", { className: "user-block" },
        image,
        React.createElement("span", { className: "username" },
            React.createElement("a", { href: href }, username)),
        React.createElement("span", { className: "description" }, description)));
};
BoxUserBlock.propTypes = propTypes;
exports.default = BoxUserBlock;
//# sourceMappingURL=BoxUserBlock.js.map