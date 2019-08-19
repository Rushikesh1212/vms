# Accordian
> ./src/js/components/accordion/accordion.jsx


## Purpose
Displays an accordion styled dropdown.


## Props
__id__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A string to act as the components id for your own reference as well as for the functionality reference for the component to function._


__panels__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _An array of objects that hold the content of each of the accordion component's panel items._
* Expected Data -

        [
          {
            id: 'id-of-the-panel-contents',
            theme: 'box-info',  // color class
            open: false, // Is this panel open at mount?
            hasBorder: true,  //  Does the header have one?
            header: 'String or JSX to display in panel\'s header',
            body: 'String or JSX to display in panel\'s body'
          }  
        ]

* Default - _[]_


## Example
```
import Accordion from './src/js/components/accordian/accordian.jsx';

<Accordion
  id="test-accordion"
  panels={[
    {
      id: 'test1',
      theme: 'box-success',
      hasBorder: true,
      open: true,
      header: 'Accordion item 1',
      body: 'Cat ipsum dolor sit amet, behind the couch. Who\'s the baby have secret plans i cry and cry and cry unless you pet me, and then maybe i cry just for fun mark territory. Cough furball kitty scratches couch bad kitty or ears back wide eyed for purrrrrr i could pee on this if i had the energy i could pee on this if i had the energy kitty power.'
    },
    {
      id: 'test2',
      theme: 'box-info',
      hasBorder: true,
      header: 'Accordion item 2',
      body: 'Shorter text!'
    },
    {
      id: 'test3',
      theme: 'box-primary',
      hasBorder: true,
      header: (
        <span>
          <i className="fa fa-circle-o" />
          &nbsp;
          Accordion with markup header!
        </span>
      ),
      body: (
        <div>
          <h5>More markup in the body</h5>
          <p>That is <strong>SO</strong> cool!</p>
        </div>
      )
    }
  ]}
/>
```
