# StatTile
> ./src/js/components/stat-tyle/stat-tile.jsx

## Purpose
A component that displays some quick-n-easy stats, along with a big icon to display with them and look pretty cool!


## Props
__width__

* Required - _false_
* Data Type - _STRING || NUMBER_
* Functionality - _A bootstrap 'col-md-' width class number._
* Default - _3_

__theme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The color theme of the component_
* Default - _'bg-yellow'_

__icon__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A Font Awesome icon class to display on the component_
* Default - _fa-user-plus_

__subject__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A header / description text to display with the stat you want to share_
* Default - _''_

__stats__

* Required - _false_
* Data Type - _NUMBER || STRING_
* Functionality - _Stat data to display with the subject._
* Default - _0_

__link__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A link to more information regarding this stat._

__onClick__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function that can be alternatively executed when the provided link prop is clicked._


## Example
```
import StatTile from './src/js/components/stat-tyle/stat-tile.jsx';

<StatTile
  width={3}
  theme="bg-yellow"
  icon="fa-user-plus"
  subject="User Registration"
  stats={44}
  link="#"
/>
```

---
