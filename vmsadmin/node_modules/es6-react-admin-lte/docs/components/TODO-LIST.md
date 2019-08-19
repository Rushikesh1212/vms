# Todo List
> ./src/js/components/todo-list/todo-list.jsx

## Purpose
If you want to display a todo-styled list for displaying todos.


## Props
__theme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The Bootstrap style class name to apply to the container of the component._
* Default - _'box-default'_

__headline__

* Required - _false_
* Data Type - _STRING || ELEMENT_
* Functionality - _Text to place in the component's header area._
* Default - _''_

__addText__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The text you want to display on your add button._
* Default - _''_

__todos__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _A list of todo data to display in the todo list_
* Expected Data -

        const todos = [
          {
            complete: false,  //  Marks item as completed
            check: 'fa-check',  //  Gives a styled icon to the completd item
            checkColor: 'text-green'  // Colors the completed icon
            value: 'done' //  Gives an optional value to the item's checkbox
            content: 'Adopt the dog', //  The "to do"
            theme: 'label-success', //  The theme of the due-time label
            due: '8:00 am'  //  The due date/time of the item.
          }
        ];

* Default - _[]_

__canAdd__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Can the user add data to the todo list? It displays or hides an add button_
* Default - _false_

__canEdit__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Can the user edit data from the todo list? It displays or hides an edit button on a list item_
* Default - _false_

__canDelete__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Can the user delete data from the todo list? It displays or hides a deletion button on a list item_
* Default - _false_

__onAdd__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _This function is activated when clicking the add button on the component. It can optionally receive event data._
* Default - _() => {}_

__onEdit__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _This function is activated when clicking an edit button on the component. It can optionally receive event data._
* Default - _() => {}_

__onDelete__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _This function is activated when clicking a delete button on the component. It can optionally receive event data._
* Default - _() => {}_

__onUpdate__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _This function is activated when checking off a todo item. It can optionally receive event data._
* Default - _() => {}_


## Example
```
import TodoList from './src/js/components/todo-list/todo-list.jsx';

<TodoList
  theme="box-primary"
  headline="My Todo List"
  addText="Add Text"
  todos={[
    {
      complete: false,
      content: 'Walk the dog',
      due: '3:45 pm'
    },
    {
      complete: false,
      content: 'Feed the dog',
      theme: 'label-danger',
      due: '12:30 pm'
    },
    {
      complete: true,
      content: 'Adopt the dog',
      checkColor: 'text-green',
      theme: 'label-success',
      due: '8:00 am'
    }
  ]}
/>
```
