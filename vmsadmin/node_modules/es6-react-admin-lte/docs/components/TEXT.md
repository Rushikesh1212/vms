# Special Text Components
> ./src/js/components/text/

## Purpose
These are components that allow easier display special text elements with multiple parts to them like blockquotes and lists.


## Important Items

- blockquote.jsx
- list.jsx
- d-list.jsx


---
---


### Blockquote - _blockquote.jsx_

### Purpose
Displays a blockquote element, complete with source and citations if needed.


### Props
__quote__

* Required - _false_
* Data Type - _STRING || ELEMENT_
* Functionality - _The quote content you want to display in the component. Takes text or inline elements that belong in a <p>_
* Default - _''_

__quoteTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A Bootstrap text format class like 'text-red'_
* Default - _''_

__source__

* Required - _false_
* Data Type - _STRING || ELEMENT_
* Functionality - _Whom or what did the quote come from? This is the place to put that info._
* Default - _''_

__sourceTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A Bootstrap text format class like 'text-red'_
* Default - _''_

__cite__

* Required - _false_
* Data Type - _STRING || ELEMENT_
* Functionality - _A subset of the source prop; this can display extra information like what book the quote was in or something like that._
* Default - _''_

__citeTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A Bootstrap text format class like 'text-red'_
* Default - _''_

__pullRight__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Shows the quote justified to the right._
* Default - _false_


### Example
```
import Blockquote from './src/js/components/text/blockquote.jsx';

<Blockquote
  quote="It requires more courage to suffer than to die."
  quoteTheme="text-light-blue"
  source="Napoleon Bonaparte"
  sourceTheme="text-aqua"
  cite="Historical figure"
  citeTheme="text-muted"
  pullRight
/>
```


---


### List - _list.jsx_

### Purpose
To display `<ul>` and `<ol>` components and their contents.


### Props
__id__

* Required - _false_
* Data Type - _STRING_
* Functionality - _If you want to give the list element a special id_

__theme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _If you want to apply special classes to the list, such as 'text-red' or things like that._

__items__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _An array that can take strings, objects, or `<li>` elements as content for the list._
* Expected Data -

        [
          'A string to place in a LI element',
          <li>Your own preformatted <strong>LI</strong></li>,
          {
            theme: 'text-red',
            content: 'Content you want to place in a LI'
          },
          {
            theme: 'text-red',
            content: <span>Also does <em>elements</em></span>
          }
        ]

* Default - _[]_

__ordered__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Makes the list an ordered list_
* Default - _false_

__unstyle__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Takes away the styling for unordered lists_
* Default - _false_

__inline__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Sets the list to an inline list._
* Default - _false_


### Example
```
import List from './src/js/components/text/list.jsx';

<List
  id="this-list"
  theme="text-green"
  items={[
    { content: 'Item 1', theme: 'text-aqua' },
    { content: <span>Item <strong>2</strong></span>, theme: 'text-light-blue' },
    { content: 'Item 3', theme: 'text-muted' }
  ]}
  ordered
/>
```


---


### DList - _d-list.jsx_

### Purpose
Displays a description/definition list and its contents.


### Props
__id__

* Required - _false_
* Data Type - _STRING_
* Functionality - _If you want to give the list element a special id_

__theme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _If you want to apply special classes to the list, such as 'text-red' or things like that._

__items__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _An array that can take strings, objects, or `<li>` elements as content for the list._
* Expected Data -

        [
          <dt>Your own preformatted DT</dt>,
          <dd>Your own preformatted DD</dd>,
          {
            theme: 'text-red',
            dt: 'Content you want to place in a DT'
          },
          {
            dd: <span>Content you want to display in a <em>DD</em> as well. <strong>DTs can also take elements.</strong></span>
          }
        ]

* Default - _[]_

__horizontal__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Makes the list a horizontal one._
* Default - _false_


### Example
```
import DList from './src/js/components/text/d-list.jsx';

<DList
  id="test-dlist-1"
  theme="text-green"
  horizontal
  items={[
    <dt key="1">DT 1</dt>,
    <dd key="2">DD 1 - a definitive description</dd>,
    <dt key="3">DT 2</dt>,
    <dd key="4">DD 2 - a definitive description</dd>
  ]}
/>
```
