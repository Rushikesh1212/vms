/// <reference types="react" />
import * as React from 'react';
export interface Props {
    sorted?: 'asc' | 'desc';
    onClick: React.MouseEventHandler<HTMLTableHeaderCellElement>;
}
declare const DataTableHeaderCell: React.StatelessComponent<Props>;
export default DataTableHeaderCell;
