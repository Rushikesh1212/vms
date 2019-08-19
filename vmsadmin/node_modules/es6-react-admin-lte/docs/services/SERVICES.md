# Services and Common Functions for this AdminLTE Template
> ./src/js/services/

## Purpose
These are files that are called by multiple components or integral to the component's performance in a broader sense.


## Important Items

- common-functions.js


---
---


### common-functions.js - _common-functions.js_

### Purpose
For altering display of AdminLTE components, particularly the Box component and other components that use a close, minimize, and expand button


### Callable Functions
__findClosestElement__

* Functionality - _Finds and sends back the containing element of the element interacted. A presumption of this function is that the interacted-with component will be changed or disappear in some way._
* Parameters -
  * _box_ - An element you want to find the containing element of.
  * _className_ - The class of the interacted-with element that will eventually disappear in favor of its parent.

__toggleBoxCollapse__

* Functionality - _Collapses and Relapses a component, assuming it has the ability to be collapsible._
* Parameters -
  * _box_ - An element, likely passed back from `findClosestElement`, that acts as the container
  * _boxBody_ - The content of that container / box
  * _icon_ - The icon (for example a close button), that was interacted with.

__removeBox__

* Functionality - _Closes a component, assuming it has the ability to be closed_
* Parameters -
  * _box_ - An element, likely passed back from `findClosestElement`, that acts as the container

__toggleDropdown__

* Functionality - _Toggles a dropdown menu item_
* Parameters -
  * _selector_ - The item interacted with.
  * _classes_ - The classes of the selector to be toggled that allow for drop-downage.


### Example
```
import { findClosestElement, toggleBoxCollapse, removeBox, initialate, toggleDropdown } from './src/js/services/common-functions.js';
```

---
