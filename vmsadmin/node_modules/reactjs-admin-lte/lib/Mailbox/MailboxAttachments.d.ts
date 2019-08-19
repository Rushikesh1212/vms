import * as React from 'react';
import MailboxAttachment from './MailboxAttachment';
export interface MailboxAttachmentsComponent extends React.StatelessComponent<{}> {
    Item: typeof MailboxAttachment;
}
declare const MailboxAttachments: MailboxAttachmentsComponent;
export default MailboxAttachments;
