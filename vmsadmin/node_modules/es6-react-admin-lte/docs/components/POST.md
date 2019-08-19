# The Post
> ./src/js/components/post/

## Purpose
Displays a post, kind of like from social media tools.


## Important Items

- post.jsx
- social-button.jsx
- social-info.jsx


---
---


### Post - _post.jsx_

### Purpose
The encompassing post object that contains all of a post's basic display data.


### Props
__userImg__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A url to an image of the active user who may comment on the post._

__width__

* Required - _false_
* Data Type - _STRING || NUMBER_
* Functionality - _The bootstrap grid number desired to display for "col-md-"_
* Default - _3_

__postData__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _Filled with the details necessary to display a post._
* Expected Data -

        const postD = {
          comments: [
          {
            name: 'Maria Ganzales',
            img: './url/img.jpg',
            date: '8:03 PM Today',
            content: 'This is the comment text.'
          }
          ],
          attachments: [
            {
              title: 'Dik-dik',
              img: './url/img.jpg',
              link: '#',
              content: 'Check out this pic of him.',
              markup: <p>Example</p>
            }
          ],
          postImg: '',
          displayImg: '',
          link: '#',
          onClick: () => { /* Alternative for clicking the link */ },
          displayName: 'El Jeffe',
          content: 'I got a new pet!'
          status: 'Shared publicly',
          date: '7:30 PM Today'
        };


  __onSubmit__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function that can expect a message STRING parameter. Acts when the form submitted._
* Default - _() => {}_

__Takes Children__

* Expected Type - _Elements || SocialButton || SocialInfo_
* Displays After - _The post's images, content, and attachments._
* Displays Before - _The post's comments_


### Example
```
import Post from '.src/js/components/post/post.jsx';
import SocialButton from '.src/js/components/post/social-button.jsx';
import SocialInfo from '.src/js/components/post/social-info.jsx';

<Post
  width = {3}
  postData={postD}
>
  <SocialButton type="like" />
  <SocialButton type="share" />
  <SocialInfo info="3 comments - 47 likes" />
</Post>
```


---


### SocialButton - _social-button.jsx_

### Purpose
A button for taking social actions within the post setting.


### Props
__position__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The justification of the button's position._
* Choices -
    * _left, right, center_
* Default - _'left'_

__theme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Bootstrap button class name_
* Default - _'btn-default'_

__type__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Whether the button is for liking or sharing, and thus the appropriate icon is displayed._
* Choices -
    * _like, share_
* Default - _'like'_


### Example
```
import Post from '.src/js/components/post/post.jsx';
import SocialButton from '.src/js/components/post/social-button.jsx';

<Post
  width = {3}
  postData={postD}
>
  <SocialButton position="left" theme="btn-primary" type="like" />
  <SocialButton position="right" theme="btn-info" type="share" />
</Post>
```


---


### SocialInfo - _social-info.jsx_

### Purpose
Displaying information about social stats: likes, for example.


### Props
__position__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The justification of the button's position._
* Choices -
    * _left, right_
* Default - _'pull-right'_

__info__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Text to display in the element._
* Default - _''_


### Example
```
import Post from '.src/js/components/post/post.jsx';
import SocialInfo from '.src/js/components/post/social-info.jsx';

<Post
  width = {3}
  postData={postD}
>
  <SocialInfo info="21 Comments - 42 Likes" />
</Post>
```
