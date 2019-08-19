/// <reference types="react" />
import * as React from 'react';
export interface Props {
    background?: 'light-blue' | 'red' | 'green' | 'yellow';
    className?: string;
}
declare const Badge: React.StatelessComponent<Props>;
export default Badge;
