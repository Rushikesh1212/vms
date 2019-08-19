# NavSidebar & Companions
> ./src/js/components/nav-sidebar/

## Purpose
The NavSidebar displays navigation and other items you want to use on the left side of the page.


## Important Items

- nav-sidebar.jsx
- nav-sidebar-menu.jsx
- nav-sidebar-menu-item.jsx
- nav-sidebar-user-panel.jsx


---
---


### NavSidebar - _nav-sidebar.jsx_

### Purpose
Holding other components that fill the left sidebar.


### Props
__Takes Children__

* Expected Type - _Components within the nav-sidebar folder._

### Example
_(See examples in below items)_


---


### NavSidebarMenu - _nav-sidebar-menu.jsx_

### Purpose
Placing a navigation menu within the NavSidebar component.


### Props
__lightTheme__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Sets the color scheme to a light grey instead of a dark grey._
* Default - _false_

__Takes Children__

* Expected Type - _<NavSidebarMenuItem> || <li>_


### Example
```
import NavSidebar from './src/js/components/nav-sidebar/nav-sidebar.jsx';
import NavSidebarMenu from './src/js/components/nav-sidebar/nav-sidebar-menu.jsx';

<NavSidebar>
  <NavSidebarMenu>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </NavSidebarMenu>
</NavSidebar>
```


---


### NavSidebarMenuItem - _nav-sidebar-menu-item.jsx_

### Purpose
Display menu items inside the NavSidebarMenu inside the NavSidebar.


### Props
__heading__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Text that the nav item will display_
* Default - _''_

__link__

* Required - _false_
* Data Type - _STRING_
* Functionality - _url to where you want the item to link_

__icon__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A font awesome icon to display next to the heading, as well as in the minimized form of the NavSidebar_
* Default - _''_

__labels__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _A list of `<Label />` components to display in the menu._
* Default - _[]_

__isHeader__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Categorizes, stylistically, the item as a section header item_
* Default - _false_

__onClick__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _When the menu item is clicked, do a thing._

__Takes Children__

* Expected Type - _<NavSidebarMenuItem> || <li>_
* Displays Inside - _An inner <ul> that acts as a dropdown menu_


### Example
```
import NavSidebar from './src/js/components/nav-sidebar/nav-sidebar.jsx';
import NavSidebarMenu from './src/js/components/nav-sidebar/nav-sidebar-menu.jsx';
import NavSidebarMenuItem from './src/js/components/nav-sidebar/nav-sidebar-menu-item.jsx';

<NavSidebar>
  <NavSidebarMenu>
    <NavSidebarMenuItem
      heading="Section #1"
      icon=""
      isHeader
    />
    <NavSidebarMenuItem
      heading="Item #A"
      icon="fa-asterisk"
    />
    <NavSidebarMenuItem heading="Item #B" />
    <NavSidebarMenuItem
      heading="Item #C"
      isHeader={true}
    />
    <NavSidebarMenuItem>
      <NavSidebarMenuItem
        heading="Sub A"
        link="http://something.dev/suba"
      />
      <NavSidebarMenuItem
        heading="Sub B"
        onClick={() => { console.log("You clicked Sub B menu item!"); }}
      />
    </NavSidebarMenuItem>
  </NavSidebarMenu>
</NavSidebar>
```


---


### NavSidebarUserPanel - _nav-sidebar-user-panel.jsx_

### Purpose
Displays a user detail component item on the sidebar navigation menu.


### Props
__name__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The user's name or username_
* Default - _''_

__img__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Link to an image URL to display as the user's avatar in the component._
* Default - _''_

__link__

* Required - _false_
* Data Type - _STRING_
* Functionality - _URL to guide a component click to._

__onLinkClick__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function that can be alternatively executed when the provided link prop is clicked._

__isOnline__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Displays whether a user is online or not._
* Default - _false_


### Example
```
import NavSidebar from './src/js/components/nav-sidebar/nav-sidebar.jsx';
import NavSidebarMenu from './src/js/components/nav-sidebar/nav-sidebar-menu.jsx';
import NavSidebarUserPanel from './src/js/components/nav-sidebar/nav-sidebar-user-panel.jsx';

<NavSidebar>
  <NavSidebarMenu>
    <NavSidebarUserPanel
      name="El Jeffe"
      link="#"
      isOnline
    />
  </NavSidebarMenu>
</NavSidebar>
```
