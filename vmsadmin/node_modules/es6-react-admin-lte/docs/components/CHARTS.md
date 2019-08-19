# Chart Components
> ./src/js/components/charts/

## Purpose
A ton of awesome charts for displaying visually appealing data.


## Important Items

- line-chart.jsx
- bar-chart.jsx
- pie-chart.jsx
- doughnut-chart.jsx
- radar-chart.jsx
- map-chart.jsx

---
---

### LineChart - _line-chart.jsx_

### Purpose
Displays a chart in a simple line chart format of data. More documentation about these kinds of charts can be found at the (Chart.JS website)[http://www.chartjs.org/docs/]

### Props
__id__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The id of the component's canvas element_
* Default - _'line-chart-0'_

__width__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The width of the component's canvas element_
* Default - _'300'_

__height__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The height of the component's canvas element_
* Default - _'200'_

__datasets__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _You can send in an object with the properties you would expect from the (Chart.JS documentation)[http://www.chartjs.org/docs/] for this component instead of the props listed below_

__axisLabels__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _An array of labels for the linear sections on the chart_

__datasetLabel__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The label for this main dataset. Like saying "This graph section is about X data"_

__data__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _An array of data points to display on the chart, usually made of numbers._

__backgroundColor__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The fill colors of the chart._

__borderColor__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The border colors of the chart._

__borderWidth__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _The widths of the chart's borders, set in pixels._

__pointBackgroundColor__

* Required - _false_
* Data Type - _ARRAY || STRING_
* Functionality - _A color string or array of color strings to color the background of points marked on the chart_

__pointBorderColor__

* Required - _false_
* Data Type - _ARRAY || STRING_
* Functionality - _A color string or array of color strings to color the border of points marked on the chart_

__pointBorderWidth__

* Required - _false_
* Data Type - _ARRAY || NUMBER_
* Functionality - _A number or array of numbers to set the width the borders on points marked on the chart_

__pointRadius__

* Required - _false_
* Data Type - _ARRAY || NUMBER_
* Functionality - _The radius number or array of them that marks each point's radius_

__pointHoverRadius__

* Required - _false_
* Data Type - _ARRAY || NUMBER_
* Functionality - _The radius number or array of them that marks each point's radius while hovered_

__pointHoverBackgroundColor__

* Required - _false_
* Data Type - _ARRAY || STRING_
* Functionality - _The color string or array of them that marks each point's fill color while hovered_

__pointHoverBorderColor__

* Required - _false_
* Data Type - _ARRAY || STRING_
* Functionality - _The color string or array of them that marks each point's border color while hovered_

__pointHoverBorderWidth__

* Required - _false_
* Data Type - _ARRAY || NUMBER_
* Functionality - _The number or array of them that marks each point's border width, in pixels, while hovered_

__pointStyle__

* Required - _false_
* Data Type - _ARRAY || STRING_
* Functionality - _"The style of point. Options include 'circle', 'triangle', 'rect', 'rectRounded', 'rectRot', 'cross', 'crossRot', 'star', 'line', and 'dash'"_

__fill__

* Required - _false_
* Data Type - _BOOL_
* Functionality - _Fills the charted area with color instead of leaving it transparent. If left transparent, the chart only shows color on the outlined parts_
* Default - _false_

__lineTension__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _How smooth / curvey the chart lines are. 0 is the straightest line_
* Default - _0_

__borderCapStyle__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Line cap style, much like is the usual when using a Canvas element_

__showLine__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Display a line between each point of data_

__xAxisId__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The label for the X axis._

__yAxisId__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The label for the Y axis._

__options__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _See the (Chart.JS documentation)[http://www.chartjs.org/docs/] to get a better understanding of what options are and what they can do for your chart._


### Example
```
import LineChart from './src/js/components/charts/line-chart.jsx';

<LineChart
  id="line-chart-test"
  width="300px"
  height="200px"
  datasetLabel="Test Line Chart"
  xAxisID="X Id"
  yAxisID="Y Id"
  axislabels={["I1", "I2", "I3", "I4", "I5"]}
  data={[12, 9, 33, 6, 14]}
  backgroundColor="#ff0000"
  hoverBackgroundColor="#dd0000"
/>
```


---


### BarChart - _bar-chart.jsx_

### Purpose
Displays a chart in a simple bar graph format of data. More documentation about these kinds of charts can be found at the (Chart.JS website)[http://www.chartjs.org/docs/]


### Props
__id__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The id of the component's canvas element_
* Default - _'bar-chart-0'_

__width__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The width of the component's canvas element_
* Default - _'300'_

__height__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The height of the component's canvas element_
* Default - _'200'_

__datasets__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _You can send in an object with the properties you would expect from the (Chart.JS documentation)[http://www.chartjs.org/docs/] for this component instead of the props listed below_

__labels__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _An array of labels for the linear sections on the chart_

__datasetLabel__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The label for this main dataset. Like saying "This graph section is about X data"_

__data__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _An array of data points to display on the chart, usually made of numbers._

__backgroundColor__

* Required - _false_
* Data Type - _ARRAY || STRING_
* Functionality - _The fill colors of the chart._

__borderColor__

* Required - _false_
* Data Type - _ARRAY || STRING_
* Functionality - _The border colors of the chart._

__borderWidth__

* Required - _false_
* Data Type - _ARRAY || NUMBER_
* Functionality - _The widths of the chart's borders, set in pixels._

__xAxisId__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The label for the X axis._

__yAxisId__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The label for the Y axis._

__borderSkipped__

* Required - _false_
* Data Type - _ARRAY || STRING_
* Functionality - _Skipped borders for the data bars._
* Expected Data - _'bottom', 'left', 'top', 'right'_

__hoverBackgroundColor__

* Required - _false_
* Data Type - _ARRAY || STRING_
* Functionality - _The array of color strings that marks each section's fill color while hovered_

__hoverBorderColor__

* Required - _false_
* Data Type - _ARRAY || STRING_
* Functionality - _The array of color strings that marks each section's border color while hovered_

__hoverBorderWidth__

* Required - _false_
* Data Type - _ARRAY || STRING_
* Functionality - _The array of numbers that marks each section's border width, in pixels, while hovered_

__options__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _See the (Chart.JS documentation)[http://www.chartjs.org/docs/] to get a better understanding of what options are and what they can do for your chart._
* Default -

          {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }


### Example
```
import BarChart from './src/js/components/charts/bar-chart.jsx';

<BarChart
  id="bar-chart-test"
  width="300px"
  height="200px"
  datasetLabel="Test Bar Chart"
  xAxisID="X Id"
  yAxisID="Y Id"
  labels={["I1", "I2", "I3", "I4", "I5"]}
  data={[12, 9, 33, 6, 14]}
  backgroundColor="#ff0000"
  hoverBackgroundColor="#dd0000"
/>
```


---


### PieChart - _pie-chart.jsx_

### Purpose
Displays a chart in a simple pie chart format of data. More documentation about these kinds of charts can be found at the (Chart.JS website)[http://www.chartjs.org/docs/]


### Props
__id__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The id of the component's canvas element_
* Default - _'pie-chart-0'_

__width__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The width of the component's canvas element_
* Default - _'300'_

__height__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The height of the component's canvas element_
* Default - _'300'_

__datasets__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _You can send in an object with the properties you would expect from the (Chart.JS documentation)[http://www.chartjs.org/docs/] for this component instead of the props listed below_

__axisLabels__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _An array of labels for the radial sections on the chart_

__datasetLabel__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The label for this main dataset. Like saying "This graph section is about X data"_

__data__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _An array of data points to display on the chart, usually made of numbers._

__backgroundColor__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _The fill colors of the chart._

__borderColor__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _The border colors of the chart._

__borderWidth__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _The widths of the chart's borders, set in pixels._

__hoverBackgroundColor__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _The array of color strings that marks each section's fill color while hovered_

__hoverBorderColor__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _The array of color strings that marks each section's border color while hovered_

__hoverBorderWidth__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _The array of numbers that marks each section's border width, in pixels, while hovered_

__options__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _See the (Chart.JS documentation)[http://www.chartjs.org/docs/] to get a better understanding of what options are and what they can do for your chart._


### Example
```
import PieChart from './src/js/components/charts/pie-chart.jsx';

<PieChart
  id="pie-chart-test"
  width="200px"
  height="200px"
  datasetLabel="Test Pie Chart"
  axisLabels={["I1", "I2", "I3", "I4", "I5"]}
  data={[12, 9, 33, 6, 14]}
  backgroundColor={["#ff0000", "#f0f000", "#f00f00", "#f000f0", "#f0000f"]}
  hoverBackgroundColor={["#dd0000", "#d0d000", "#d00d00", "#d000d0", "#d0000d"]}
/>
```


---


### DoughnutChart - _doughnut-chart.jsx_

### Purpose
Displays a chart in a simple pie-like chart format of data. The difference between this and a pie chart is that the center is hollowed out, much like a doughnut. _Alternatively we could have called the PieChart component a DoughnutHoleChart, but that would just be silly._ More documentation about these kinds of charts can be found at the (Chart.JS website)[http://www.chartjs.org/docs/]


### Props
__id__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The id of the component's canvas element_
* Default - _'doughnut-chart-0'_

__width__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The width of the component's canvas element_
* Default - _'300'_

__height__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The height of the component's canvas element_
* Default - _'300'_

__datasets__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _You can send in an object with the properties you would expect from the (Chart.JS documentation)[http://www.chartjs.org/docs/] for this component instead of the props listed below_

__axisLabels__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _An array of labels for the radial sections on the chart_

__datasetLabel__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The label for this main dataset. Like saying "This graph section is about X data"_

__data__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _An array of data points to display on the chart, usually made of numbers._

__backgroundColor__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _The fill colors of the chart._

__borderColor__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _The border colors of the chart._

__borderWidth__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _The widths of the chart's borders, set in pixels._

__hoverBackgroundColor__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _The array of color strings that marks each section's fill color while hovered_

__hoverBorderColor__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _The array of color strings that marks each section's border color while hovered_

__hoverBorderWidth__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _The array of numbers that marks each section's border width, in pixels, while hovered_

__options__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _See the (Chart.JS documentation)[http://www.chartjs.org/docs/] to get a better understanding of what options are and what they can do for your chart._


### Example
```
import DoughnutChart from './src/js/components/charts/doughnut-chart.jsx';

<DoughnutChart
  id="doughnut-chart-test"
  width="200px"
  height="200px"
  datasetLabel="Test Doughnut Chart"
  axisLabels={["I1", "I2", "I3", "I4", "I5"]}
  data={[12, 9, 33, 6, 14]}
  backgroundColor={["#ff0000", "#f0f000", "#f00f00", "#f000f0", "#f0000f"]}
  hoverBackgroundColor={["#dd0000", "#d0d000", "#d00d00", "#d000d0", "#d0000d"]}
/>
```


---


### RadarChart - _radar-chart.jsx_

### Purpose
Displays a chart in a radar-like format. Give it a try, as that it is the best I can explain it. More documentation about these kinds of charts can be found at the (Chart.JS website)[http://www.chartjs.org/docs/]


### Props
__id__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The id of the component's canvas element_
* Default - _'radar-chart-0'_

__width__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The width of the component's canvas element_
* Default - _'300'_

__height__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The height of the component's canvas element_
* Default - _'300'_

__datasets__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _You can send in an object with the properties you would expect from the (Chart.JS documentation)[http://www.chartjs.org/docs/] for this component instead of the props listed below_

__axisLabels__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _An array of labels for the radial sections on the chart_

__fill__

* Required - _false_
* Data Type - _BOOL_
* Functionality - _Fills the charted area with color instead of leaving it transparent. If left transparent, the chart only shows color on the outlined parts_
* Default - _false_

__lineTension__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _How smooth / curvey the chart lines are. 0 is the straightest line_

__borderCapStyle__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Line cap style, much like is the usual when using a Canvas element_

__datasetLabel__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The label for this main dataset. Like saying "This graph section is about X data"_

__data__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _An array of data points to display on the chart, usually made of numbers._

__backgroundColor__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The fill color of the chart._

__borderColor__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The border color of the chart._

__borderWidth__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _The width of the chart's borders, set in pixels._

__pointBackgroundColor__

* Required - _false_
* Data Type - _ARRAY || STRING_
* Functionality - _A color string or array of color strings to color the background of points marked on the chart_

__pointBorderColor__

* Required - _false_
* Data Type - _ARRAY || STRING_
* Functionality - _A color string or array of color strings to color the border of points marked on the chart_

__pointBorderWidth__

* Required - _false_
* Data Type - _ARRAY || NUMBER_
* Functionality - _A number or array of numbers to set the width the borders on points marked on the chart_

__pointRadius__

* Required - _false_
* Data Type - _ARRAY || NUMBER_
* Functionality - _The radius number or array of them that marks each point's radius_

__pointHoverRadius__

* Required - _false_
* Data Type - _ARRAY || NUMBER_
* Functionality - _The radius number or array of them that marks each point's radius while hovered_

__pointHoverBackgroundColor__

* Required - _false_
* Data Type - _ARRAY || STRING_
* Functionality - _The color string or array of them that marks each point's fill color while hovered_

__pointHoverBorderColor__

* Required - _false_
* Data Type - _ARRAY || STRING_
* Functionality - _The color string or array of them that marks each point's border color while hovered_

__pointHoverBorderWidth__

* Required - _false_
* Data Type - _ARRAY || NUMBER_
* Functionality - _The number or array of them that marks each point's border width, in pixels, while hovered_

__pointStyle__

* Required - _false_
* Data Type - _ARRAY || STRING_
* Functionality - _"The style of point. Options include 'circle', 'triangle', 'rect', 'rectRounded', 'rectRot', 'cross', 'crossRot', 'star', 'line', and 'dash'"_

__options__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _See the (Chart.JS documentation)[http://www.chartjs.org/docs/] to get a better understanding of what options are and what they can do for your chart._


### Example
```
import RadarChart from './src/js/components/charts/radar-chart.jsx';

<RadarChart
  id="my-little-radar"
  width="400"
  height="450"
  datasetLabel="The Chartest AFRadar"
  axisLabels={["I1", "I2", "I3", "I4", "I5"]}
  data={[12, 9, 33, 6, 14]}
  pointBackgroundColor={["#ff0000", "#f0f000", "#f00f00", "#f000f0", "#f0000f"]}
  pointHoverBackgroundColor={["#dd0000", "#d0d000", "#d00d00", "#d000d0", "#d0000d"]}
/>
```


---


### MapChart - _map-chart.jsx_

### Requirements
This project requires you pull in __jVectorMap__ _.js_ and _.css_ files into your project. We do not provide those.

### Purpose
Displays a chart in a map format. Much of the prop documentation can be found on [jVectorMap's documentation](http://jvectormap.com/documentation/javascript-api/jvm-map/).


### Props
__id__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The id of the component's main element_
* Default - _'world-map-0'_

__width__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The width of the component's main element_
* Default - _'100%'_

__height__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The height of the component's main element_
* Default - _'300px'_

__mapParams__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _An object containing keys equal to all of the props below if you didn't want to input them via React Props._

__map__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The type of map to be used for the component_
* Default - _'world_mill_en'_

__backgroundColor__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The color of the map's background. Covers hex, rgb, rgba._
* Default - _'#555555'_

__zoomOnScroll__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Whether you want to zoom via mouse scrolls._
* Default - _true_

__zoomOnScrollSpeed__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _From 1 - 10, mouse speed on zoom scrolling._
* Default - _3_

__panOnDrag__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Whether you want to pan by dragging the map._
* Default - _true_

__zoomMax__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _The maximum zoom ratio reachable while zooming the map_
* Default - _8_

__zoomMin__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _The minimum zoom ratio reachable while zoominb the map_
* Default - _1_

__zoomStep__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _The multiplier for zooming when clicking the +/- buttons_
* Default - _1.6_

__zoomAnimate__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Whether to animate zoomingness when clicking +/- buttons._
* Default - _false_

__regionsSelectable__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Ability to select regions on the map_
* Default - _false_

__regionsSelectableOne__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Can only one region on the map be selected at a time?_
* Default - _false_

__markersSelectable__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _The ability to select markers on the map_
* Default - _false_

__markersSelectableOne__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Can only one marker be selected at a time?_
* Default - _false_

__regionStyle__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _Styling for map regions via css-like javascript object._
* Default -

        {
          initial: {
            fill: '#bbbbbb',
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: 'pointer'
          },
          selected: {
            fill: 'yellow'
          }
        }


__regionLabelStyle__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _Styling for region labels via css-like object._
* Default -

        {
          initial: {
            'font-family': 'Verdana',
            'font-size': '12',
            'font-weight': 'bold',
            cursor: 'default',
            fill: 'black'
          },
          hover: {
            cursor: 'pointer'
          }
        }


__markerStyle__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _Styling for markers via css-like object_
* Default -

        {
          initial: {
            fill: 'grey',
            stroke: '#505050',
            "fill-opacity": 1,
            "stroke-width": 1,
            "stroke-opacity": 1,
            r: 5
          },
          hover: {
            stroke: 'black',
            "stroke-width": 2,
            cursor: 'pointer'
          },
          selected: {
            fill: 'blue'
          },
          selectedHover: {
          }
        }


__markerLabelStyle__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _Styling for marker labels via css-like object_
* Default -

        {
          initial: {
            'font-family': 'Verdana',
            'font-size': '12',
            'font-weight': 'bold',
            cursor: 'default',
            fill: 'black'
          },
          hover: {
            cursor: 'pointer'
          }
        }


__markers__

* Required - _Set of markers to add to the map during initialization_
* Data Type - _ARRAY || OBJECT_
* Functionality - _Desc_
* Expected Data -

        [{
          name: 'string to show on marker tip',
          latLng: [25, 42]
        }]


__series__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _See (official documentation)[http://jvectormap.com/documentation/javascript-api/jvm-map/] for a better understanding_

__focusOn__

* Required - _false_
* Data Type - _OBJECT || STRING_
* Functionality - _See (official documentation)[http://jvectormap.com/documentation/javascript-api/jvm-map/] for a better understanding_

__labels__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _See (official documentation)[http://jvectormap.com/documentation/javascript-api/jvm-map/] for a better understanding_

__selectedRegions__

* Required - _false_
* Data Type - _OBJECT || ARRAY || STRING_
* Functionality - _See (official documentation)[http://jvectormap.com/documentation/javascript-api/jvm-map/] for a better understanding_

__selectedMarkers__

* Required - _false_
* Data Type - _OBJECT || ARRAY || STRING_
* Functionality - _See (official documentation)[http://jvectormap.com/documentation/javascript-api/jvm-map/] for a better understanding_

__onRegionTipShow__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _See (official documentation)[http://jvectormap.com/documentation/javascript-api/jvm-map/] for a better understanding_

__onRegionOver__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _See (official documentation)[http://jvectormap.com/documentation/javascript-api/jvm-map/] for a better understanding_

__onRegionOut__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _See (official documentation)[http://jvectormap.com/documentation/javascript-api/jvm-map/] for a better understanding_

__onRegionClick__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _See (official documentation)[http://jvectormap.com/documentation/javascript-api/jvm-map/] for a better understanding_

__onRegionSelected__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _See (official documentation)[http://jvectormap.com/documentation/javascript-api/jvm-map/] for a better understanding_

__onMarkerTipShow__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _See (official documentation)[http://jvectormap.com/documentation/javascript-api/jvm-map/] for a better understanding_

__onMarkerOver__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _See (official documentation)[http://jvectormap.com/documentation/javascript-api/jvm-map/] for a better understanding_

__onMarkerOut__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _See (official documentation)[http://jvectormap.com/documentation/javascript-api/jvm-map/] for a better understanding_

__onMarkerClick__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _See (official documentation)[http://jvectormap.com/documentation/javascript-api/jvm-map/] for a better understanding_

__onMarkerSelected__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _See (official documentation)[http://jvectormap.com/documentation/javascript-api/jvm-map/] for a better understanding_

__onViewportChange__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _See (official documentation)[http://jvectormap.com/documentation/javascript-api/jvm-map/] for a better understanding_


### Example
```
import MapChart from './src/js/components/charts/map-chart.jsx';

<MapChart
  id="test-map"
  map="world_mill_en"
/>
```
