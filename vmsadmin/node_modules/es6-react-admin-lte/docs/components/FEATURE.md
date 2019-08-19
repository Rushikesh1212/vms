# Feature
> ./src/js/components/feature/feature.jsx

## Purpose
Sometimes you want to feature things among other stuff, while still maintaining a classy marketer's standard. This is the component for you, my friend!~


## Props
__headline__

* Required - _false_
* Data Type - _STRING || ELEMENT_
* Functionality - _The text or element to display in the component headline_
* Default - _''_

__img__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The URL to the image that displays with this component._
* Default - _''_

__imgAlt__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The alt property text for the image_
* Default - _''_

__imgLink__

* Required - _false_
* Data Type - _TYPE_
* Functionality - _A URL to send a user to upon clicking the image link_

__imgOnClick__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function to activate instead of a link upon clicking the associated image link_
* Default - _`() => {}`_

__cta__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The text on the call to action button of the component. The button is not rendered if this is not here._

__ctaLink__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The url to send a user to upon clicking the item_

__ctaOnClick__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function to activate instead of a link upon clicking the call to action button_
* Default - _`() => {}`_

__ctaTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The Bootstrap color theme for the call to action button._
* Default - _btn-success_

__content__

* Required - _false_
* Data Type - _STRING || ELEMENT_
* Functionality - _Displays textual or elemental(the markup-type, not the table-top-type) content in the description area_
* Default - _''_

__Takes Children__

* Expected Type - _Elements of all types and sorts_
* Displays Inside - _a .media-body <div>_
* Displays After - _The content prop_


## Example
```
import Feature from './src/js/components/feature/feature.jsx';

<Feature
  headline="New Feature"
  img="#"
  imgLink="https://example.com"
  cta="Check it~"
  ctaOnClick={() => { alert("You are interested in this feature!"); }}
  content="This feature is baller---"
/>
```
