import * as React from 'react';
import MainSidebarUserPanelImage from './MainSidebarUserPanelImage';
import MainSidebarUserPanelInfo from './MainSidebarUserPanelInfo';
export interface MainSidebarUserPanelComponent extends React.StatelessComponent<{}> {
    Image: typeof MainSidebarUserPanelImage;
    Info: typeof MainSidebarUserPanelInfo;
}
declare const MainSidebarUserPanel: MainSidebarUserPanelComponent;
export default MainSidebarUserPanel;
