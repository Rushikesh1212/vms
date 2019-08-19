import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';
import DataTableHeaderCell from './DataTableHeaderCell';
export interface Props {
    currentPage?: number;
    pageSize: number;
    totalItems: number;
    onPageClick: SelectCallback;
}
export interface DataTableComponent extends React.StatelessComponent<Props> {
    HeaderCell: typeof DataTableHeaderCell;
}
declare const DataTable: DataTableComponent;
export default DataTable;
