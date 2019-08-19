# The Box Component
> ./src/js/components/box/

This component is the generic catch-all for displaying boxes. If you want a box, but the component isn't already made, then this is the one for you!


## Important Items

- box.jsx
- box-tool.jsx


## Props
__width__

* Required - _false_
* Data Type - _NUMBER || STRING_
* Functionality - _A Bootstrap grid width class for the component to be displayed at all screen widths._
* Default - _12_

__widthXS__

* Required - _false_
* Data Type - _NUMBER || STRING_
* Functionality - _A Bootstrap grid 'col-xs-' width class for the component._

__widthSM__

* Required - _false_
* Data Type - _NUMBER || STRING_
* Functionality - _A Bootstrap grid 'col-sm-' width class for the component._

__widthMD__

* Required - _false_
* Data Type - _NUMBER || STRING_
* Functionality - _A Bootstrap grid 'col-md-' width class for the component._

__widthLG__

* Required - _false_
* Data Type - _NUMBER || STRING_
* Functionality - _A Bootstrap grid 'col-lg-' width class for the component._

__widthXL__

* Required - _false_
* Data Type - _NUMBER || STRING_
* Functionality - _A Bootstrap grid 'col-xl-' width class for the component._

__collapsed__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _The component initially displays as collapsed_
* Default - _false_

__theme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Takes an AdminLTE Bootstrap-style class to determine the theme-color of the component_
* Choices -
  * _'' (results in plain white)_
  * _'box-default'_
  * _'box-primary'_
  * _'box-warning'_
  * _'box-danger'_
  * _'box-success'_
* Default - _''_

__loading__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Displays a loading status on the component_
* Default - _false_

__solid__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Gives component a a solid-colored header and surrounds component with a border of the same color class_
* Default - _false_

__border__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Applies a border to the bottom of the component's header_
* Default - _false_

__noPadding__
* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Removes the padding for the Box's body content area._
* Default - _false_

__title__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Gives the component its own personal headline text_
* Default - _''_

__content__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Body text for the box_
* Default - _''_

__footer__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Footer text for the box_

__boxTools__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _An array of possible actions one can take on the box, displaying the appropriate buttons_
* Choices - _['collapse', 'expand', 'remove']_

__Takes Children__

* Displays After - _this.props.content_
* Modified - _false_

## Example
```
import Box from './src/js/components/box/box.jsx';

<Box
  theme="box-success"
  width="12"
  title="Started Collapsed"
  content="But now I'm whole again!"
  collapsed
/>
```
