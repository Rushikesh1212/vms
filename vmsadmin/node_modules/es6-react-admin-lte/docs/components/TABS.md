# Tabs
> ./src/js/components/tabs/

## Purpose
Displays a cute little boxlet that has tabbing where you can click a button and display a linked section of content while hiding the others.


## Important Items

- tabs.jsx


## Props
__width__

* Required - _false_
* Data Type - _NUMBER || STRING_
* Functionality - _A Bootstrap grid width class for the component to be displayed at all screen widths._
* Default - _3_

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

__pullRight__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Adds a class to the tab list, pulling it to the right of the component_
* Default - _false_

__defaultTab__

* Required - _false_
* Data Type - _STRING || NUMBER_
* Functionality - _Determines which tab to display as the default active item. Numbers indicate the index of the array of tab content, strings indicate the id of the tab content._
* Default - _0_

__tabs__

* Required - _false_
* Data Type - _ARRAY of OBJECTS_
* Functionality - _An array of necessary tab content data in order to display tab content and the buttons for tabbing to that content._
* Expected Data -

        [
          {
            id: 'tab-id',
            subject: 'Tab Button Text',
            content: 'String or JSX of tab content to display'
          }
        ]

* Default - _[]_

__Takes Children__

* Expected Type - _Elements or Text_
* Displays Inside - _A UL .nav-tabs element_
* Displays After - _The list of tab buttons_


## Example
```
import Tabs from './src/js/components/tabs/tabs.jsx';

<Tabs
  widthMD={6}
  tabs={[
    {
      id: 'tab-1',
      subject: 'Tab 1',
      content: 'This is example of a tab\'s textural content',
      onClick: () => { console.log("You just clicked this tab!"); }
    },
    {
      id: 'tab-2',
      subject: 'Tab 2',
      content: 'Exampling this item\'s text content too.'
    },
    {
      id: 'tab-3',
      subject: 'Tab 3',
      content: (<div>
        <h3>WOAH!</h3>
        <p>This item has elements for its content. Sweet!</p>
      </div>)
    }
  ]}
  defaultTab={'tab-2'}
  pullRight
/>
```
