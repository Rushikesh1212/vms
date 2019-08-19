import * as React from 'react';
import BoxUserBlock from './BoxUserBlock';
export interface Props {
    border?: boolean;
    className?: string;
}
export interface BoxHeaderComponent extends React.StatelessComponent<Props> {
    UserBlock: typeof BoxUserBlock;
}
declare const BoxHeader: BoxHeaderComponent;
export default BoxHeader;
