# The Chat Box
> ./src/js/components/chat-box/

## Purpose
To display a chatbox. That is it.


## Important Items

- chat-box.jsx
- contacts.jsx
- conversations.jsx

---
---

### ChatBox - _chat-box.jsx_

### Purpose
The container component for all that happens in the displayed chat box.


### Props
__width__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _A bootstrap 'col-md-' width class_
* Default - _3_

__border__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Does the component have a border or not._
* Default - _false_

__headerTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The 6 bootstrap color class appended by 'box-'_
* Default - _box-primary_

__notificationTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A color class for the notification section._
* Default - _'bg-light-blue'_

__chatTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The 6 bootstrap color class appended by 'direct-chat-'_
* Default - _'direct-chat-primary'_

__buttonTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The 6 bootstrap button color classes for the chat post button._
* Default - _'btn-primary'_

__title__

* Required - _false_
* Data Type - _STRING || NUMBER_
* Functionality - _The text in the title area of the chat box_
* Default - _'Chat Box'_

__notifications__

* Required - _false_
* Data Type - _STRING || NUMBER_
* Functionality - _The notification, usually number of unread messages, displayed for the chat._
* Default - _0_

__onSubmit__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function that can expect a message STRING parameter. Acts when the form submitted._
* Default - _() => {}_

__Takes Children__

* Expected Type - _Element, Conversations, Contacts_
* Displays Inside - _'.box-body'_
* Displays After - _A notifications bar_
* Displays Before - _A message form_


### Example
```
import ChatBox from './src/js/components/chat-box/chat-box.jsx';
import Contacts from './src/js/components/chat-box/contacts.jsx';
import Conversations from './src/js/components/chat-box/conversations.jsx';

<ChatBox
  width={3}
  buttonTheme="btn-primary btn-block"
  chatTheme="direct-chat-primary"
  headerTheme="box-primary"
  notificationTheme="bg-yellow"
  title="Direct Chat"
  notifications={2}
>
  <Conversations conversations={conversationData} />
  <Contacts contacts={contactMsgs} />
</ChatBox>
```

---

### Contacts - contacts.jsx_

### Purpose
A side-menu that lists all the contacts you have or can have conversations with.

### Props
__contacts__
* Required - _false_
* Data Type - _ARRAY_
* Functionality - _The contact information to display in the component._
* Expected Data -
  ```
  const contactMsgs = [
    {
      name: 'El Jeffe',
      img: '',
      link: '#',
      onClick: () => { // Alternative for clicking the link },
      date: '10/31/2015',
      message: 'Groovey...'
    }
  ]
  ```

---

### Conversations - conversations.jsx_

### Purpose
The conversation data to display in the chatbox.

### Props
__conversations__
* Required - _false_
* Data Type - _ARRAY_
* Functionality - _A list of message data to display in the currently open chat window._
* Expected Data -
  ```
  const conversationData = [
    {
      name: 'El Jeffe',
      img: '',
      date: '31 Oct 4:20 pm',
      message: "That is so groovey!"
    },
    {
      align: 'right',
      name: 'Brucey C',
      img: '',
      date: '31 Oct 4:25 pm',
      message: 'I know, right?'
    }
  ];
  ```
