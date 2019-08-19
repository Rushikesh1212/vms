'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findClosestElement = findClosestElement;
exports.toggleBoxCollapse = toggleBoxCollapse;
exports.removeBox = removeBox;
exports.initialate = initialate;
exports.toggleDropdown = toggleDropdown;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findClosestElement(box, className) {
  var regex = new RegExp('(^|\\s)' + className + '(\\s|$)', 'gi');
  while (!regex.test(box.className)) {
    box = box.parentNode;
    if (!box) {
      return null;
    }
  }
  return box;
}

function toggleBoxCollapse(box, boxBody, icon) {
  if (box.className.indexOf('collapsed-box') !== -1) {
    icon.className = icon.className.replace(/fa-plus/g, 'fa-minus');
    (0, _jquery2.default)(boxBody).slideDown(500, 'swing', function () {
      box.classList.remove('collapsed-box');
    });
  } else {
    icon.className = icon.className.replace(/fa-minus/g, 'fa-plus');
    (0, _jquery2.default)(boxBody).slideUp(500, 'swing', function () {
      box.classList.add('collapsed-box');
    });
  }
}

function removeBox(box) {
  (0, _jquery2.default)(box).slideUp(500, 'swing');
}

function initialate() {
  function bootstrapTooltips(selector) {
    (0, _jquery2.default)('body').tooltip({ selector: selector });
  }
  return { bootstrapTooltips: bootstrapTooltips };
}

function toggleDropdown(selector, classes) {
  selector.classList.toggle(classes);
}
//# sourceMappingURL=common-functions.js.map
