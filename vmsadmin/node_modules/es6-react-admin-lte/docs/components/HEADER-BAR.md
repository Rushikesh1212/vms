# HeaderBar Components
> ./src/js/components/header-bar/
Notes

## Purpose
A group of components that comprise what can and do make the header bar of your AdminLTE page awesome.


## Important Items

* header-tasks.jsx
* header-sidebar-toggle/header-sidebar-toggle.jsx
* header-user-menu/header-user-menu.jsx
* header-tasks/header-tasks.jsx
* header-notifications/header-notifications.jsx
* header-messages/header-messages.jsx


---
---


## HeaderBar - _header-tasks.jsx_
### Purpose
Is the entirety of the headerbar, which holds all of its child components.

### Props
__clientName__

* Required - _false_
* Data Type - _STRING | JSX_
* Functionality - _A textual display of the client's logo. Can be a string or a stylish element insert_
* Default - _`<span><b>Admin</b>LTE</span>`_

__clientNameAbbr__

* Required - _false_
* Data Type - _STRING | JSX_
* Functionality - _A textual display of a miniaturized or abbreviated version of the client's logo. Can be a string or a stylish element insert_
* Default - _`<span><b>A</b>LT</span>`_

__clientLogo__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A string link to a logo file_
* Default - _''_

__clientLogoMini__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A string link to a miniaturized version of a logo file_
* Default - _''_

__logoBackgroundColor__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A color string for the color the header bar will be when in smaller or miniaturized forms_
* Default - _'' (NOTE: Will default to whatever the panel's theme decrees it to be)_

__logoLink__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A url that can be opened upon clicking the logo._

__onLogoClick__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function that can be alternatively executed when the provided logoLink prop is clicked._

__Takes Children__

* Expected Type - _A `<li>` element_
* Displays Inside - _A `<ul>` element_


### Example
```
import HeaderBar from './src/js/components/header-bar/header-bar.jsx';

<HeaderBar
  clientName={<span><strong>YOUR</strong> BRAND HERE</span>}
  clientNameAbbr="BRAND"
>
  <li>Header Item</li>
</HeaderBar>
```


---


## HeaderSidebarToggle - _header-sidebar-toggle.jsx_
### Purpose
Is a little button on the right side of the header that is used in tandem with, to open, the [ControlsMenu](CONTROLS-MENU.md) component. Should be inserted as a child of HeaderBar_


### Example
```
import HeaderBar from './src/js/components/header-bar/header-bar.jsx';
import HeaderSidebarToggle from './src/js/components/header-bar/header-sidebar-toggle/header-sidebar-toggle.jsx';

<HeaderBar>
  <HeaderSidebarToggle />
</HeaderBar>
```


---


## HeaderUserMenu - _header-user-menu.jsx_
### Purpose
A basic drop-down to display logged-in user data.


### Props
__username__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The user's username detail_
* Default - _''_

__name__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The user's name detail to accompany user name._
* Default - _''_

__jobTitle__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A quick synopsis of the user's job title. For show._

__img__

* Required - _false_
* Data Type - _STRING_
* Functionality - _An image link to display the user's profile image / avatar._

__profileLink__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A url whose function should be evident by the prop name._

__profileOnClick__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function called upon clicking the profile link_

__followersLink__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A url to a followers page, assuming there is one. If its not there, this wont display._

__followersOnClick__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function called upon clicking the followers link_

__salesLink__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A url to a sales page, assuming there is one. If its not there, this wont display._

__salesOnClick__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function called upon clicking the sales link_

__friendsLink__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A url to a friends page, assuming there is one. If its not there, this wont display._

__friendsOnClick__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function called upon clicking the friends link_

__joined__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A string to a date of the user's joinage to the application._
* Default - _''_

__signOut__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function called upon clicking a sign-out button._
* Default - _() => {}_

__Takes Children__

* Displays Inside - _A `<li className="user-body">` element_


### Example
```
import HeaderBar from './src/js/components/header-bar/header-bar.jsx';
import HeaderSidebarToggle from './src/js/components/header-bar/header-user-menu/header-user-menu.jsx';

<HeaderBar>
  <HeaderUserMenu
    name="Brucey C."
    username="eljef"
    jobTitle="Deadite Slayer"
    joined="1 Jan 2017"
  />
</HeaderBar>
```


---


## HeaderTasks - _header-tasks.jsx_
### Purpose
A simple dropdown-toggle that displays a list of remaining tasks linked to a user.


### Props
__count__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _The amount of items you want to show on the list._

__tasks__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _A list of task data to be displayed in the component._
* Expected Data -

        [{
          subject: '',
          percentage: 0,
          link: '#',
          onClick: () => { /* Alternative for clicking the link */ }
        }]

* Default - _[]_

__clickHandler__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function that assumably takes user to a task-viewing / list page. A button appears in footer of the list if used._


### Example
```
import HeaderBar from './src/js/components/header-bar/header-bar.jsx';
import HeaderTasks from './src/js/components/header-bar/header-tasks/header-tasks.jsx';

<HeaderBar>
  <HeaderTasks
    tasks={[
      {
        subject: '9 Slam Dunks',
        percentage: 75,
        link: '#',
        onClick: () => { // Alternative for clicking the link }
      },
      {
        subject: '52 Emails Responded',
        percentage: 0,
        onClick: () => { // Alternative for clicking the link }
      },
      {
        subject: '42 Meanings Found',
        percentage: 100
      }
    ]}
  />
</HeaderBar>
```


---


## HeaderNotifications - _header-notifications.jsx_
### Purpose
A simple dropdown-toggle that displays a list of notifications a user should see.


### Props
__count__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _The amount of items you want to show on the list._

__notifications__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _A list of notification data to be displayed in the component._
* Expected Data -

        [{
          content: '',
          icon: '',
          link: '',
          onClick: () => { /* Alternative for clicking the link */ }
        }]

* Default - _[]_

__clickHandler__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function that assumably takes user to a task-viewing / list page. A button appears in footer of the list if used._


### Example
```
import HeaderBar from './src/js/components/header-bar/header-bar.jsx';
import HeaderNotifications from './src/js/components/header-bar/header-notifications/header-notifications.jsx';

<HeaderBar>
  <HeaderNotifications
    notifications={[
      {
        content: 'You\'ve got mail!',
        theme: 'bg-yellow',
        link: '#',
        onClick: () => { // Alternative for clicking the link }
      },
      {
        content: 'Janet says "Hi".',
        theme: 'bg-green',
        link: '#',
        onClick: () => { // Alternative for clicking the link }
      },
      {
        content: '...7 Days...',
        theme: 'bg-blue',
        link: '#',
        onClick: () => { // Alternative for clicking the link }
      }
    ]}
  />
</HeaderBar>
```


---


## HeaderMessages - _header-messages.jsx_
### Purpose
A simple dropdown-toggle that displays a list of recent messages a user has.


### Props
__count__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _The amount of items you want to show on the list._

__messages__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _A list of message data to be displayed in the component._
* Expected Data -

        [{
          title: '',
          displayImg: '',
          content: '',
          time: '',
          link: '',
          onClick: () => { /* Alternative for clicking the link */ }
        }]

* Default - _[]_

__clickHandler__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function that assumably takes user to a task-viewing / list page. A button appears in footer of the list if used._


### Example
```
import HeaderBar from './src/js/components/header-bar/header-bar.jsx';
import HeaderMessages from './src/js/components/header-bar/header-messages/header-messages.jsx';

<HeaderBar>
  <HeaderMessages
    messages={[
      {
        title: 'Shanaya Twain',
        displayImg: '',
        content: 'I have transcended time.',
        time: '1 Jan 1947, 6:53pm',
        link: '#',
        onClick: () => { // Alternative for clicking the link }
      },
      {
        title: 'Jennisica Johnson',
        displayImg: '',
        content: 'How have you been',
        time: '1 Jan 2017, 8:42 am'
      },
      {
        title: 'Brucey C.',
        displayImg: '',
        content: 'Groovey...',
        time: '9:45 pm'
      }
    ]}
  />
</HeaderBar>
```
