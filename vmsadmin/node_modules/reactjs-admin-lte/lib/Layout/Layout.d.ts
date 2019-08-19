/// <reference types="react" />
import * as PropTypes from 'prop-types';
import * as React from 'react';
export interface Props {
    boxed?: boolean;
    fixed?: boolean;
    className?: string;
    skin: 'blue' | 'black' | 'purple' | 'green' | 'red' | 'yellow' | 'blue-light' | 'black-light' | 'purple-light' | 'green-light' | 'red-light' | 'yellow-light';
}
export interface State {
    document: Document;
}
declare class Layout extends React.Component<Props, State> {
    constructor(props: any, context: any);
    static propTypes: {
        boxed: PropTypes.Requireable<any>;
        fixed: PropTypes.Requireable<any>;
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<any>;
        skin: PropTypes.Validator<any>;
    };
    static defaultProps: {
        boxed: boolean;
        fixed: boolean;
    };
    static childContextTypes: {
        $adminlte_layout: PropTypes.Requireable<any>;
    };
    static contextTypes: {
        document: PropTypes.Requireable<any>;
    };
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    getChildContext(): {
        $adminlte_layout: {
            toggleMainSidebar: () => void;
            setMainSidebarCollapsed: (val: any) => void;
        };
    };
    render(): JSX.Element;
}
export default Layout;
