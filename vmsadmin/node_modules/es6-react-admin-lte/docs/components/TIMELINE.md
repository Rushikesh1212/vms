# The Timeline
> ./src/js/components/timeline/

## Purpose
The set of components that work together to display a timeline structure.


## Important Items

- timeline.jsx
- timeline-label.jsx
- /timeline-item/timeline-item.jsx


---
---


### Timeline - _timeline.jsx_

### Purpose
The father component that holds the rest of them via children or a timelineInfo prop


### Props
__timelineInfo__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _An array of a lot of data for the timeline component to render out inside of it._
* Expected Data -

        const timelineData = [
          {
            startDate: '1 January 2017',
            endDate: '9 January 2017',
            items: [
              {
                icon: 'fa fa-coment',
                iconTheme: 'bg-blue',
                time: '14:20',
                header: {
                  url: '#',
                  onClick: () => { /* Alternative for clicking the url link */ },
                  title: 'Jennifer',
                  content: 'commented your post.'
                },
                body: {
                  content: 'This is some comment text, yo...',
                },
                footer: {
                  content: '',
                  markup: <a className="btn btn-warning btn-flat btn-xs">View comment</a>
                }
              }
            ]
          }
        ];

* Default - _[]_

__Takes Children__

* Expected Type - _TimelineItem and TimelineLabel components, <li>_
* Displays Inside - _'ul.timeline'_


### Example
```
import Timeline from './src/js/components/timeline/timeline.jsx';

<Timeline timelineInfo={timelineData}/>
```


---


### TimelineLabel - _timeline-label.jsx_

### Purpose
Displays a timestamp for the start or end of a timeline section.


### Props
__theme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The label's color theme_
* Default - _'bg-yellow'_

__content__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Displays text content you'd like to show, and in this case, times._
* Default - _'Default content'_


---


### TimelineItem - _/timeline-item/timeline-item.jsx_

### Purpose
Contains the meat of the timeline content. It takes the liberty of generating the header, body, and footer from organized data objects.


### Props
__icon__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A FontAwesome icon class._
* Default - _'fa fa-coffee'_

__iconTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A bg color class_
* Default - _'bg-blue_

__time__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A written out string to display a time of item._
* Default - _''_

__header__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _Content for the timeline body's header._
* Expected Data -

        {
          url: '#',
          onClick: () => { /* Alternative for clicking the url link */ },
          title: 'Title of timeline item',
          content: "Text content",
          markup: <p>If there is any.</p>
        }


__body__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _Content for the timeline item's body_
* Expected Data -

        {
          content: "Text body content",
          markup: <p>If there is any.</p>
        }


__footer__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _Content for the timeline body's footer_
* Expected Data -

        {
          content: "Text content for footer",
          markup: <p>If there is any.</p>
        }



### Example
```
import Timeline from './src/js/components/timeline/timeline.jsx';
import TimelineLabel from './src/js/components/timeline/timeline-label.jsx';
import TimelineItem from './src/js/components/timeline/timeline-item.jsx';

<Timeline>
  <TimelineLabel
    theme="bg-red"
    content="9 January 2017"
  />
  <TimelineItem
    icon="fa fa-comment"
    iconTheme="bg-red"
    time="14:41"
    header={{
      url: '#',
      title: 'Post 001',
      markup: <p>Look! Markup!</p>
    }}
    body={{
      content: "Text body content 001",
    }}
    footer={{
      markup: <p className="text-right">Righty</p>
    }}
  />
  <TimelineItem
    icon="fa fa-email"
    iconTheme="bg-blue"
    time="04:20"
    header={{
      url: '#',
      title: 'Post 002',
      content: "Text in the header? Preposterous!!",
    }}
    body={{
      content: "Text body content 002",
    }}
    footer={
      markup: <p className="text-center">Centered</p>}
  />
  <TimelineLabel
    theme="bg-blue"
    content="1 January 2017"
  />
<Timeline>
```
