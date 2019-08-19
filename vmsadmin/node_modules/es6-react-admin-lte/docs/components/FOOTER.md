# The Footer
> ./src/js/components/footer/footer.jsx
Notes

## Purpose
This component is a footer that displays at the bottom of your page, displaying pertinent copyright information that your users probably already knew about.


## Important Items

* footer.jsx


## Props
__copyright__

* Required - _false_
* Data Type - _STRING_
* Functionality - _For displaying a date of copyright. It could benefit you to understand [proper copywriting date formatting](https://en.wikipedia.org/wiki/Copyright_notice) as well!_
* Default - _''_

__company__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Displays your company name_
* Default - _''_

__link__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Applies a link to your company name_

__onLinkClick__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function that can be alternatively executed when the provided link prop is clicked._

__content__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Extra text content you want to display on the right side of the footer_
* Default - _''_


## Example
```
import Footer from './src/js/components/footer/footer.jsx';

<Footer
  content="Some kind of text"
  copyright="2017"
  company="YOUR BRAND HERE"
/>
```
