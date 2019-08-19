"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var bootstrapUtils_1 = require("react-bootstrap/lib/utils/bootstrapUtils");
bootstrapUtils_1.addStyle(react_bootstrap_1.Button, 'box-tool');
;
var propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
var handleClick = function (cb) {
    return function (event) {
        if (cb) {
            var target = event.target;
            cb({
                altKey: event.altKey,
                bubbles: event.bubbles,
                button: event.button,
                buttons: event.buttons,
                cancelable: event.cancelable,
                clientX: event.clientX,
                clientY: event.clientY,
                ctrlKey: event.ctrlKey,
                currentTarget: target,
                defaultPrevented: event.defaultPrevented,
                eventPhase: event.eventPhase,
                getModifierState: event.getModifierState,
                isDefaultPrevented: event.isDefaultPrevented,
                isPropagationStopped: event.isPropagationStopped,
                isTrusted: event.isTrusted,
                metaKey: event.metaKey,
                nativeEvent: event.nativeEvent,
                pageX: event.pageX,
                pageY: event.pageY,
                persist: event.persist,
                preventDefault: event.preventDefault,
                relatedTarget: event.relatedTarget,
                screenX: event.screenX,
                screenY: event.screenY,
                shiftKey: event.shiftKey,
                stopPropagation: event.stopPropagation,
                target: event.target,
                timeStamp: event.timeStamp,
                type: event.type,
            });
        }
    };
};
var BoxToolButton = function (_a) {
    var children = _a.children, className = _a.className, onClick = _a.onClick;
    return React.createElement(react_bootstrap_1.Button, { bsStyle: "box-tool", className: className, onClick: handleClick(onClick) }, children);
};
BoxToolButton.propTypes = propTypes;
exports.default = BoxToolButton;
//# sourceMappingURL=BoxToolButton.js.map