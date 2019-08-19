# The Controls Menu
> ./src/js/components/controls-menu/

## Purpose
Displays a pop-out menu on the right side of the page that can be toggled on and off on a button click from the HeaderBar component.


## Important Items

- controls-menu.jsx
- controls-menu-tab.jsx
- controls-menu-tab-section.jsx

---
---

### ControlsMenu - _controls-menu.jsx_

### Purpose
The parent container for this component set. It contains everything you could ever imagine. Don't let your imagination be limited.


### Props
__theme__

* Required - _false_
* Data Type - _STIRNG_
* Functionality - _A color string class specifically for this sort of component._
* Choices -
    * _'control-sidebar-dark'_
    * _'control-sidebar-light'_
* Default - _'control-sidebar-dark'_

__tabs__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _A list of tab element information so that the component knows which tab to select and open with_
* Expected Data -

        const tabs = [
          {
            name: "control-sidebar-home-tab",
            icon: "fa-home"
          }
        ];


__Takes Children__

* Expected Type - _Element, ControlsMenuTab_


### Example
```
import ControlsMenu from './src/js/components/controls-menu/controls-menu.jsx';
import ControlsMenuTab from './src/js/components/controls-menu/controls-menu-tab.jsx';
import ControlsMenuTabSection from './src/js/components/controls-menu/concontrols-menu-tab-section.jsx';

<ControlsMenu tabs={tabs}>
  <ControlsMenuTab id="control-sidebar-home-tab">
    <ControlsMenuTabSection heading="Test Header 01">
      <li>
        <a href="#">
          <i className="menu-icon fa fa-birthday-cake bg-red" />
          <div className="menu-info">
            <h4 className="control-sidebar-subheading">Janets Birthday</h4>
            <p>Tonight we Cake!</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="menu-icon fa fa-user bg-yellow" />
          <div className="menu-info">
            <h4 className="control-sidebar-subheading">Frodo Gained 3 Friends</h4>
            <p>Janet, Kyle, Quelisha</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="menu-icon fa fa-envelope-o bg-light-blue"></i>
          <div className="menu-info">
            <h4 className="control-sidebar-subheading">You have 5 messages</h4>
            <p>They are all from Phelicia though.</p>
          </div>
        </a>
      </li>
    </ControlsMenuTabSection>
  </ControlsMenuTab>
</ControlsMenu>
```


---


### ControlsMenuTab - _controls-menu-tab.jsx_

### Purpose
A tab to switch between sections of the component.


### Props
__id__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Which id this tab should be referenced by_

__Takes Children__

* Expected Type - _Element, ControlsMenuTabSection_


---


### ControlsMenuTabSection - _controls-menu-tab-section.jsx_

### Purpose
Sections of the component with data. It can be switched between by a connected ControlsMenuTab component.


### Props
__heading__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A title header for the list of items to be displayed._
* Default - _''_

__content__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _A list of content details that are formatted in a specific way, where as passing children is more free-falling._
* Expected Data -

        const content = [
          {
            icon: '',
            theme: '',
            heading: '',
            description: '',
            link: '',
            onClick: () => { // Alternative for clicking the link },
            markup: null
          }
        ];

* Default - _[]_

__Takes Children__

* Expected Type - _Element, specifically a LI tag_
* Displays Inside - _A UL tag_
* Displays Below - _The 'content' prop_
