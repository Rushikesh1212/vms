import * as React from 'react';
import MainSidebarMenuHeader from './MainSidebarMenuHeader';
import MainSidebarMenuItem from './MainSidebarMenuItem';
export interface MainSidebarMenuComponent extends React.StatelessComponent<{}> {
    Header: typeof MainSidebarMenuHeader;
    Item: typeof MainSidebarMenuItem;
}
declare const MainSidebarMenu: MainSidebarMenuComponent;
export default MainSidebarMenu;
