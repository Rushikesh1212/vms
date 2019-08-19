/// <reference types="react" />
import * as PropTypes from 'prop-types';
import * as React from 'react';
import MainSidebarUserPanel from './MainSidebarUserPanel';
import MainSidebarMenu from './MainSidebarMenu';
export interface Props {
    collapsed?: boolean;
}
declare class MainSidebar extends React.Component<Props, {}> {
    constructor(props: any, context: any);
    static propTypes: {
        children: PropTypes.Requireable<any>;
        collapsed: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        collapsed: boolean;
    };
    static contextTypes: {
        $adminlte_layout: PropTypes.Requireable<any>;
    };
    static UserPanel: typeof MainSidebarUserPanel;
    static Menu: typeof MainSidebarMenu;
    componentWillReceiveProps(nextProps: any, nextContext: any): void;
    render(): JSX.Element;
}
export default MainSidebar;
