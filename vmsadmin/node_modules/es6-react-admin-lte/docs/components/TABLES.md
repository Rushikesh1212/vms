# Table components
> ./src/js/components/table/

## Purpose
Components that let you display tables!


## Important Items

- simple-table.jsx
- data-table.jsx


---
---


## The SimpleTable
> ./src/js/components/table/simple-table.jsx

### Purpose
To display data on a simple table. It doesn't modify or do anything special with the data other than display it on a table. It is for a user that wants to simply their UI, and in a way, their life.


### Props
__striped__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Differentiates between rows by making each row a different color from the adjacent ones_
* Default - _false_

__condensed__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Makes the table rows thinner_
* Default - _false_

__bordered__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Gives the rows and cells a border_
* Default - _false_

__hovers__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Changes the color of the rows when a user hovers over them._
* Default - _false_

__headers__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _The headers that can accompany data, indicating more information on what the data is_
* Expected Data -

        const headers = [
          { id: 'cell0', content: 'Column #1' },
          { id: 'cell1', content: 'Column #2' },
          { id: 'cell2', content: 'Column #3' }
        ];

* Default - _[]_

__data__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _The data that will display in the table's cells_
* Expected Data -

        const data = [
          {
            cell0: 'Some',
            cell1: 'Test',
            cell2: 'Data'
          },
          {
            cell0: 1000,
            cell1: 750,
            cell2: 420
          },
          {
            cell0: <p>Element Test Data</p>,
            cell1: <p>Same Here</p>,
            cell2: <p>and here...</p>
          }
        ];

* Default - _[]_


### Example
```
import SimpleTable from './src/js/components/table/simple-table.jsx';

<SimpleTable
  striped
  condensed
  bordered
  hovers
  headers={headers}
  data={data}
/>
```


---


## The DataTable
> ./src/js/components/table/data-table.jsx

This component displays a more complex table than its brother component. You can paginate, sort, search, and do all sorts of neat stuff with the data in this table. This table will set headers if you don't for the better organization of data sets, where the SimpleTable had headers as an optional feature.


### Important Items

- data-table.jsx


### Props
__id__

* Required - _false_
* Data Type - _STRING_
* Functionality - _An id to apply to data table markup items that might need it for differentiation._
* Default - _''_

__loading__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Covers the table in a loading icon and blocks the table from interaction until the data is loaded proper._
* Default - _false_

__loadColor__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The color you want the loading icon to be_
* Default - _'#BBBBBB'_

__striped__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Differentiates between rows by making each row a different color from the adjacent ones_
* Default - _false_

__condensed__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Makes the table rows thinner_
* Default - _false_

__bordered__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Gives the rows and cells a border_
* Default - _false_

__hovers__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Changes the color of the rows when a user hovers over them._
* Default - _false_

__noDataMessage__

* Required - _false_
* Data Type - _STRING || ELEMENT_
* Functionality - _Displays in a `<p>` in the table instead of data, under the condition that there is no data._
* Default - _'No Data Loaded'_

__headers__

* Required - _false_
* Data Type - _ARRAY of objects_
* Functionality - _An array of objects that handle column formating, headers, and that sort of thing._
* Expected Data -

        [{
            id: 'linkedDataPropId', //  Required to format specific datum
            content: 'Displayed header text',
            width: '100px',  //  Defaults as this.props.defaultColumnWidth
            format: (cellData, rowData, rowId) => {
              /*
                cellData - The specific cell's data
                rowData - All data on that table's row
                rowId - The index of the row on the table
              */
            },
            noSort: true, //  If you want to explicitly deny this column sorting
            sortOrder: 'desc' // Defaults at 'asc'
          }]

* Default - _[]_

__defaultColumnWidth__

* Required - _false_
* Data Type - _STRING_
* Functionality - _How wide you want the table columns to be by default_
* Default - _'auto'_

__data__

* Required - _false_
* Data Type - _ARRAY of objects_
* Functionality - _An array of data objects to be displayed. This is the most important prop of the DataTable component; the whole reason for its existence!_
* Expected Data -

        const data = [
          {
            cell0: 'Some',
            cell1: 'Test',
            cell2: 'Data'
          },
          {
            cell0: 1000,
            cell1: 750,
            cell2: 420
          },
          {
            cell0: <p>Element Test Data</p>,
            cell1: <p>Same Here</p>,
            cell2: <p>and here...</p>
          }
        ];


* Default - _[]_

__defaultSortOrder__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The default order that the table data is sorted by._
* Choices -
    * _'asc'_
    * _'desc'_
* Default - _'asc'_

__search__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Allows the table's filter-search to appear and be used._
* Default - _false_

__ignoreData__

* Required - _false_
* Data Type - _ARRAY of strings_
* Functionality - _An array of data object property names to be ignored and excluded from the table's display_

__sorts__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Allows a user to sort the data via a click of the header_
* Default - _false_

__onSortChange__

* Required - _false_
* Data Type - _FUNC_
* Functionality - _Optional unction to cover your actions when sorting page data._
* Expected Data -

        (sortName, sortOrder) => { // DO STUFF }


__pagination__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Allows pagination for the table._
* Default - _false_

__sizePerPage__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _How many items are displayed ber data page_
* Default - _20_

__totalSize__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _Total size of data that has been passed to the table, or within the contents of the api mentioned through meta-data_
* Default - _0_

__page__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _Currently displaying page of the data to display._
* Default - _1_

__pageCount__

* Required - _false_
* Data Type - _NUMBER_
* Functionality - _Number of pages counted that hold the data in the table, or meta data passed from api that estimates the page count._
* Default - _0_

__onPageChange__

* Required - _false_
* Data Type - _FUNC_
* Functionality - _Optional function to something when you switch the page. Usually to switch the data table's page_
* Expected Data -

        (page) => { // DO STUFF }


__sizePerPageList__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _The available page size options on the page-size dropdown list._
* Default - _[5, 10, 20, 50, 100]_

__hideSizePerPage__

* Required - _false_
* Data Type - _BOOL_
* Functionality - _Hides the size-per-page dropdown_
* Default - _true_

__onPageSizeChange__

* Required - _false_
* Data Type - _FUNC_
* Functionality - _Optional function to take when switching the data count to disply per page._
* Expected Data -

        (sizePerPage) => { // DO STUFF }


__remote__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Tells the table to get rid of default data handling in favor of your own handlers for managing your remote data._
* Default - _false_

__onSearchSubmit__

* Required - _false_
* Data Type - _FUNC_
* Functionality - _Optional function to handle search / filter actions for table._
* Expected Data -

        (searchText, dataToSearchBy) => { /* DO STUFF */ }


__searchPlaceholder__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The placeholder text for the searchbar input element._

__searchCategory__

* Required - _false_
* Data Type - _STRING || ARRAY_
* Functionality - _The value[s] desired to search from on the table. Can be a string of one value, or an array of multiple string values to switch to from a dropdown menu._

__hideSearchAny__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _By default, you have the option to search search / filter from all data fields on the table if this.props.searchCategory is left blank, or set to an array. This takes away that option and only allows your otherwise-specified values._


### Example
```
import DataTable from './src/js/components/table/data-table.jsx';

<DataTable
  condensed
  bordered
  defaultColumnWidth="100px"
  data={data}
  ignoreData={['cell2']}
  sorts
  defaultSortOrder="desc"
  search
  searchCategory={['cell0', 'cell1']}
  hideSearchAny
  pagination
  hideSizePerPage
  page={1}
  sizePerPage={5}
  totalSize={3}
  pageCount{1}
/>
```
