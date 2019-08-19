/// <reference types="react" />
import * as PropTypes from 'prop-types';
import { Component } from 'react';
import BoxHeader from './BoxHeader';
import BoxTitle from './BoxTitle';
import BoxTools from './BoxTools';
import BoxCollapsedToggleButton from './BoxCollapsedToggleButton';
import BoxRemoveButton from './BoxRemoveButton';
import BoxBody from './BoxBody';
import BoxFooter from './BoxFooter';
export interface Props {
    collapsed?: boolean;
    style?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'widget';
    solid?: boolean;
    loading?: boolean;
    spinner?: 'circle-o-notch' | 'cog' | 'gear' | 'refresh' | 'spinner';
    className?: string;
}
export interface State {
    collapsed: boolean;
    removed: boolean;
}
declare class Box extends Component<Props, State> {
    constructor(props: any);
    static propTypes: {
        collapsed: PropTypes.Requireable<any>;
        style: PropTypes.Requireable<any>;
        solid: PropTypes.Requireable<any>;
        loading: PropTypes.Requireable<any>;
        spinner: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<any>;
        children: PropTypes.Requireable<any>;
        onCollapseToggle: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        collapsed: boolean;
        loading: boolean;
        spinner: string;
        solid: boolean;
    };
    static childContextTypes: {
        $adminlte_box: PropTypes.Requireable<any>;
    };
    static Header: typeof BoxHeader;
    static Title: typeof BoxTitle;
    static Tools: typeof BoxTools;
    static CollapsedToggleButton: typeof BoxCollapsedToggleButton;
    static RemoveButton: typeof BoxRemoveButton;
    static Body: typeof BoxBody;
    static Footer: typeof BoxFooter;
    getChildContext(): {
        $adminlte_box: {
            collapsed: boolean;
            onCollapseToggle: () => void;
            onRemove: () => void;
        };
    };
    render(): JSX.Element | null;
}
export default Box;
