/// <reference types="react" />
import * as React from 'react';
export interface Props {
    image?: React.ReactNode;
    username?: string;
    href?: string;
    description?: string;
    className?: string;
}
declare const BoxUserBlock: React.StatelessComponent<Props>;
export default BoxUserBlock;
