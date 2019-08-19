/// <reference types="react" />
import * as React from 'react';
export interface Props {
    name?: React.ReactNode;
    size?: string;
    img?: React.ReactNode;
    icon?: string;
    onNameClick?: React.MouseEventHandler<HTMLAnchorElement>;
    onDownloadClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const MailboxAttachment: React.StatelessComponent<Props>;
export default MailboxAttachment;
