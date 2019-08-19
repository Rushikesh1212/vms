/// <reference types="react" />
import * as React from 'react';
import MainSidebarMenuItemAddonList from './MainSidebarMenuItemAddonList';
import MainSidebarMenuItemAddon from './MainSidebarMenuItemAddon';
export interface Props {
    active?: boolean;
    href?: string;
    iconName?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    title?: string;
}
export interface MainSidebarMenuItemComponent extends React.StatelessComponent<Props> {
    AddonList: typeof MainSidebarMenuItemAddonList;
    Addon: typeof MainSidebarMenuItemAddon;
}
declare const MainSidebarMenuItem: MainSidebarMenuItemComponent;
export default MainSidebarMenuItem;
