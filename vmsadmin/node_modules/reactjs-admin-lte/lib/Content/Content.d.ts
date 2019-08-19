import * as React from 'react';
import ContentHeader from './ContentHeader';
import ContentBody from './ContentBody';
export interface Props {
    className?: string;
}
export interface ContentComponent extends React.StatelessComponent<Props> {
    Header: typeof ContentHeader;
    Body: typeof ContentBody;
}
declare const Content: ContentComponent;
export default Content;
