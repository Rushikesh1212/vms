# The Profile Card
> ./src/js/components/profile-card/

## Purpose
The components for displaying a boxlet of brief user information.


## Important Items

- profile-card.jsx
- profile-info-blocks.jsx
- profile-info-list.jsx


---
---


### ProfileCard - _profile-card.jsx_

### Purpose
A little box that displays user profile information.


### Props
__width__

* Required - _false_
* Data Type - _STRING || NUMBER_
* Functionality - _The bootstrap grid width class number for 'col-md-'_
* Default - _0_

__theme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A color theme class for the component_
* Default - _'bg-yellow'_

__imgAlignment__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The justification of the user image displayed in the component._
* Default - _'center'_

__name__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The user's name or username. Something they can be displayed in this component as._
* Default - _''_

__description__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A text description to display for / about the user._
* Default - _''_

__img__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A profile image to display as an avatar on the component._

__coverImg__

* Required - _false_
* Data Type - _STRING_
* Functionality - _An image used for the background of the displayed component._

__date__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A joined date of the user._

__Takes Children__

* Expected Type - _ELEMENT, ProfileInfoBlocks, ProfileInfoList_
* Displays Inside - _'.box-footer'_
* Displays After - _The user information_


---


### ProfileInfoBlocks - _profile-info-blocks.jsx_

### Purpose
Displays informational data blocks below the user's information.


### Props
__blocks__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _Information to display in the blocks._
* Expected Data -

        const infoB = [
          {
            stats: 550,
            description: 'Wheels on the bus.'
          }
        ];



### Example
```
import _ from './src/js/components/profile-card/profile-card.jsx';
import _ from './src/js/components/profile-card/profile-info-blocks.jsx';

<ProfileCard
  width = {3}
  theme = 'bg-aqua'
  displayName = 'El Jefe'
  description = 'Deadite Thrasher'
  displayPicture = ''
  coverPicture = ''
>
  <ProfileInfoBlocks blocks={infoB} />
</ProfileCard>
```


---


### ProfileInfoList - _profile-info-list.jsx_

### Purpose
Displays informational data as a stacked list below the user's information.


### Props
__list__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _Information to display in the blocks._
* Expected Data -

        const infoL = [
          {
            link: '#',
            onClick: () => { /* Alternative for clicking the link */ },
            description: 'Wheels on the bus.',
            stats: 550,
            badgeTheme: 'bg-yellow'
          }
        ];



### Example
```
import _ from './src/js/components/profile-card/profile-card.jsx';
import _ from './src/js/components/profile-card/profile-info-list.jsx';

<ProfileCard
  width = {3}
  theme = 'bg-red'
  displayName = 'Jane Doe'
  description = 'Lead Dev-Ops Coordinator Specialist'
  displayPicture = ''
  pictureAlignment = 'left'
>
  <ProfileInfoList list={infoL} />
</ProfileCard>
```
