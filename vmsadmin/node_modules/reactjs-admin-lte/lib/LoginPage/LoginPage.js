"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var LoginLogo_1 = require("./LoginLogo");
var LoginBody_1 = require("./LoginBody");
;
var propTypes = {
    children: PropTypes.node,
};
var LoginPage = (function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "hold-transition login-page", style: { minHeight: '100vh' } },
        React.createElement("div", { className: "login-box", style: { marginTop: '0', marginBottom: '0', paddingTop: '7vh' } }, children)));
});
LoginPage.propTypes = propTypes;
LoginPage.Logo = LoginLogo_1.default;
LoginPage.Body = LoginBody_1.default;
exports.default = LoginPage;
//# sourceMappingURL=LoginPage.js.map