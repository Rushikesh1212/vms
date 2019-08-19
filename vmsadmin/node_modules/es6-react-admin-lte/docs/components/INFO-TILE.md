# InfoTile
> ./src/js/components/info-tile/info-tile.jsx

## Purpose
A little box to display stat data in. It allows the option for accepting and displaying a progress bar for its stats.


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

__icon__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A Font Awesome icon class to display with the component._
* Default - _'fa-star-o'_

__stats__

* Required - _false_
* Data Type - _NUMBER || STRING_
* Functionality - _A cool stat to display in the component._
* Default - _0_

__subject__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The header text for the component stat being displayed._
* Default - _''_

__percent__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _A number to represent the percentage width of a progress bar. Also gives the component the OK to display a progress bar._

__content__

* Required - _false_
* Data Type - _STIRNG_
* Functionality - _Extra text content to display with the component or under a progress bar._
* Default - _''_

__theme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _What color class you want the component to be displayed as, specifically at the icon_
* Default - _'bg-yellow'_

__progressTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _What color class you want the progress bar in the component to be displayed as_
* Default - _'bg-white'_

__Takes Children__

* Expected Type - _ELEMENT, ProgressBar specifically_
* Displays Inside - _'.info-box-content' div_
* Displays After - _'.info-box-number' span_


## Example
```
import InfoTile from './src/js/components/info-tile/info-tile.jsx';

<InfoTile
  width={3}
  icon="fa-envelope-o"
  stats={4}
  subject="Messages"
  theme="bg-yellow"
/>
```
