# ImageCarousel
> ./src/js/components/image-carousel/image-carousel.jsx

## Purpose
Displays a carousel that slides between slides, displaying some text over an image background.


## Props
__id__

* Required - _true_
* Data Type - _STRING_
* Functionality - _Sets the id of the component and which id the carousel sliding references while it occurs._

__defaultSlide__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _The index of the slide desired to be set as the default._
* Default - _0_

__hideIndicators__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Whether you want to display the little indicator buttons that allow you to switch between slides._
* Default - _false_

__hideButtons__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Whether you want to display the left and right slide navigation buttons._
* Default - _false_

__slides__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _An array of objects with details about each slide in the carousel._
* Expected Data -

        [
          {
            caption: 'Text to display on the cell.',
            image: 'URL to an image.'
          }
        ]

* Default - _[]_


## Example
```
import ImageCarousel from './src/js/components/image-carousel/image-carousel.jsx';

<ImageCarousel
  id="test-carousel"
  slides={[
    {
      caption: 'Item 1',
      image: 'http://placehold.it/900x500/39CCCC/ffffff&text=I+Love+Bootstrap'
    },
    {
      caption: 'Item 2',
      image: 'http://placehold.it/900x500/3c8dbc/ffffff&text=I+Love+Bootstrap'
    },
    {
      caption: 'Item 3',
      image: 'http://placehold.it/900x500/f39c12/ffffff&text=I+Love+Bootstrap'
    }
  ]}
/>
```
