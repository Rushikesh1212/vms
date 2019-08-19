"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var FontAwesome = require("react-fontawesome");
var react_bootstrap_1 = require("react-bootstrap");
;
var propTypes = {
    name: PropTypes.node,
    size: PropTypes.string,
    img: PropTypes.node,
    icon: PropTypes.string,
    onNameClick: PropTypes.func,
    onDownloadClick: PropTypes.func,
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
var MailboxAttachment = function (_a) {
    var name = _a.name, size = _a.size, img = _a.img, icon = _a.icon, onNameClick = _a.onNameClick, onDownloadClick = _a.onDownloadClick;
    var span;
    var preview;
    if (img) {
        span = "mailbox-attachment-icon has-img";
        preview = img;
    }
    else if (icon) {
        span = "mailbox-attachment-icon";
        preview = React.createElement(FontAwesome, { name: icon });
    }
    else {
        span = "mailbox-attachment-icon";
        preview = React.createElement(FontAwesome, { name: "file-o" });
    }
    return (React.createElement("li", null,
        React.createElement("span", { className: span }, preview),
        React.createElement("div", { className: "mailbox-attachment-info" },
            React.createElement("a", { onClick: onNameClick, className: "mailbox-attachment-name" }, name),
            React.createElement("span", { className: "mailbox-attachment-size" },
                size,
                React.createElement(react_bootstrap_1.Button, { onClick: handleClick(onDownloadClick), className: "btn-xs pull-right" },
                    React.createElement(FontAwesome, { name: "cloud-download" }))))));
};
MailboxAttachment.propTypes = propTypes;
exports.default = MailboxAttachment;
//# sourceMappingURL=MailboxAttachment.js.map