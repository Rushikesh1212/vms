import * as React from 'react';
import MainHeaderLogo from './MainHeaderLogo';
import MainHeaderSidebarToggle from './MainHeaderSidebarToggle';
import MainHeaderNavbar from './MainHeaderNavbar';
export interface MainHeaderComponent extends React.StatelessComponent<{}> {
    Logo: typeof MainHeaderLogo;
    SidebarToggle: typeof MainHeaderSidebarToggle;
    Navbar: typeof MainHeaderNavbar;
}
declare const MainHeader: MainHeaderComponent;
export default MainHeader;
