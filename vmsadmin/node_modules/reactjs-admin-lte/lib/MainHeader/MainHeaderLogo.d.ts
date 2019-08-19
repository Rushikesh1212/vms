/// <reference types="react" />
import * as React from 'react';
import MainHeaderMiniLogo from './MainHeaderMiniLogo';
import MainHeaderLargeLogo from './MainHeaderLargeLogo';
export interface Props {
    className?: string;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
export interface MainHeaderLogoComponent extends React.StatelessComponent<Props> {
    Mini: typeof MainHeaderMiniLogo;
    Large: typeof MainHeaderLargeLogo;
}
declare const MainHeaderLogo: MainHeaderLogoComponent;
export default MainHeaderLogo;
