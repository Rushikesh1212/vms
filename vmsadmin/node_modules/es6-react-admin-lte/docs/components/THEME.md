# Theme
> ./src/js/components/theme/theme.jsx

## Purpose
Creating a personalized color theme for your admin template! Since AdminLTEs available themes are wonderfully composed but limited compared to the vast color combinations one may have for their brand, this component takes AdminLTE's basic color theme CSS formats and applies it to your application with some color scheme specifications that more closely fit your needs.


## Props
__name__

* Required - _true_
* Data Type - _STRING_
* Functionality - _The color-theme-class-name you want the application to be applied by. The name you pick will have css generated with 'skin-' prepended to it. Your job is to apply the class name `skin-{name}` to the `<body>` tag of your html so that it can take the CSS this component generates. It's as easy as cake on Pi-day!_

__primary__

* Required - _false_
* Data Type - _STRING_
* Functionality - _This is the primary theme color that will be applied to your theme. It defaults to the blue-theme's mid-tone blue color_
* Default - _'#3c8dbc'_

__secondary__

* Required - _false_
* Data Type - _STRING_
* Functionality - _This is the secondary theme color that will be applied to your theme. It defaults to the blue-theme's darker blue color._
* Default - _'#357ca5'_

__hasDarkText__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _If true, dark text is applied to fit on a lighter-colored theme. If false, white text is applied on colors of your theme._
* Default - _false_

__specialStyles__

* Required - _false_
* Data Type - _STRING_
* Functionality - _If by chance you want more special styles, as AdminLTE has a few special color themes with extra styles applied to it that the others don't have. You can add that yourself in this string-accepting prop_
* Default - _''_


## Example
```
import Theme from './src/js/components/theme/theme.jsx';

<Theme
  name="grey"
  primary="#ebebeb"
  secondary="#ccc"
  hasDarkText
  specialStyles=".skin-grey li div.footer:hover { color: #ff0000; }"
/>

/*
  STEP 1:  Apply the above tag to the rendered contents of your main component.
  STEP 2:  Apply .skin-grey to your HTML's body tag.
  STEP 3:  Bask in the beauty of your stylistic preferences.
*/
```
