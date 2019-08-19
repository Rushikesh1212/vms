# DropdownList
> ./src/js/components/dropdown-list/dropdown-list.jsx

## Purpose
To display a dropdown menu list.


## Props
__headline__

* Required - _false_
* Data Type - _STRING || ELEMENT_
* Functionality - _Content or text to display as the default headliner item of the dropdown list._
* Default - _''_

__icon__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A Font Awesome icon class._
* Default - _''_

__iconRight__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Whether the icon displays to the right or the left of the headline._
* Default - _false_

__dropHeader__

* Required - _false_
* Data Type - _STRING || ARRAY || ELEMENT_
* Functionality - _A string, element, or array of elements that can be displayed in the header list item of the dropdown list._
* Default - _N/A_

__dropFooter__

* Required - _false_
* Data Type - _STRING || ARRAY || ELEMENT_
* Functionality - _A string, element, or array of elements that can be displayed in the footer list item of the dropdown list._
* Default - _N/A_

__dropContent__

* Required - _false_
* Data Type - _ARRAY || ELEMENT_
* Functionality - _An element, or array of elements that can be displayed in the dropdown list. It is assumed they will be `<li>`s_
* Default - _[]_

__Takes Children__

* Expected Type - _LI Element_
* Displays Inside - _A UL element with .dropdown-menu class_
* Displays After - _A LI element with a .header class_
* Displays Before - _A LI element with a .footer class_


## Example
```
import DropdownList from './src/js/components/dropdown-list/dropdown-list.jsx';

<DropdownList
  headline="Test Dropdown"
  icon="caret"
  dropHeader="Dropdown Header Content"
  dropFooter="Dropdown Footer Content"
>
  <li role="presentation" className="list-item"><a role="menuitem" tabIndex="-1" href="#">Action</a></li>
  <li role="presentation" className="list-item divider"></li>
  <li role="presentation" className="list-item"><a role="menuitem" tabIndex="-1" href="#">Separated link</a></li>
</DropdownList>
```
