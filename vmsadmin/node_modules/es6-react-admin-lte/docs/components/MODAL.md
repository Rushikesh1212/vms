# Modal
> ./src/js/components/modal/modal.jsx

## Purpose
To display a button that opens up a modal filled with your content of choice.


## Props
__id__

* Required - _true_
* Data Type - _STRING_
* Functionality - _The id you want to give the modal. This is necessary for the modal to function as desired between potential multiple modals_

__theme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The Bootstrap class theme to display the modal as._
* Default - _'modal-default'_

__fades__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Allow the modal a smooth animated transition to appearance or not._
* Default - _false_

__inline__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Allow the component, particularly for the launcher, to be displayed inline_
* Default - _false_

__hideLauncher__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Hides the modal launcher button. You never know when you may need to be sneaky!~_
* Default - _false_

__launcherIsLink__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Places modal launching button as a link instead of a button._
* Default - _false_

__loading__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Is the modal displayed in a loading state or not? The loading state hides the CTA buttons in the modal footer._
* Default - _false_

__hideCTAButton__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Removes the CTA button from render. Usually for you to add your own footer version or content._
* Default - _false_

__hideCloseButton__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Removes the close button in the footer from render. Usually for you to add your own footer version or content._
* Default - _false_

__customButtons__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _A list of details used to make custom buttons in the footer if you so choose. These buttons are able to be passed the ability to close the modal, which is less then possible otherwise._
* Expected Data -

        [{
          //  NOTE: 'btn-modal-cta' is a reserved name and renders this button's action worthless.
          name: 'special-class-name-for-that-button',
          theme: 'btn-success',
          icon: 'fa-download text-red',
          text: 'Button Text Content',
          action: closeFunc => {
            // A function that can accept a function parameter to close the modal.
          }
        }]

* Default - _[]_

__launderId__

* Required - _false_
* Data Type - _STRING_
* Functionality - _An id you want to give to the launcher button._

__launcherTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A Bootstrap button class to apply to the modal launcher button._
* Default - _'btn-default'_

__closeButtonTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A Bootstrap button class to apply to the modal close button located in the modal's footer_
* Default - _'btn-default'_

__ctaButtonTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A Bootstrap button class to apply to the CTA button located in the modal's footer_
* Default - _'btn-default'_

__icon__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A Font Awesome icon class. to apply to the modal's launcher button_
* Default - _''_

__launcherText__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Text you want the modal launcher button to display._
* Default - _'Launch'_

__action__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function that executes when the modal's CTA is clicked. It can accept a function that closes the modal as a parameter._
* Expected Data -

        closeModalFunction => {
          //  Stuff, including close the modal with closeModalFunction();
        }


__modalHeadline__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Text to display in the modal's header. It is the headline that tells the user what this modal is all about!_

__modalSubheadline__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Text to accompany the modal's header headline. It is smaller, more descriptive text to further establish the headline._

__ctaButtonText__

* Required - _false_
* Data Type - _STIRNG_
* Functionality - _Text to display on the CTA button in the modal's footer._
* Default - _'Ok'_

__launchAction__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function you want to execute as a secondary action when the modal is launched._
* Default - _`() => {}`_

__closeAction__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function you want to execute whenever the modal is closed._
* Default - _`() => {}`_

__modalContent__

* Required - _false_
* Data Type - _STRING || ELEMENT_
* Functionality - _Content you want to place in the modal's body._

__modalFooter__

* Required - _false_
* Data Type - _STRING || ELEMENT_
* Functionality - _Content you want to display in the modal's footer._

__Takes Children__

* Expected Type - _STRING || ELEMENT_
* Displays Inside - _The .modal-body DIV_
* Displays After - _Items passed in the modalContent prop_


## Example
```
import Modal from './src/js/components/modal/modal.jsx';

<Modal
  id="modal1"
  launcherId="modal-opener1"
  launcherText="Launch Modal 1"
  launcherTheme="btn-success"
  modalHeadline="Modal's headline"
  modalSubheadline="Modal's subheadline"
  closeAction={() => { alert("Closing modal!"); }}
  loading
  fades
>
  <div>Child JSX content inside a modal.</div>
</Modal>
```
