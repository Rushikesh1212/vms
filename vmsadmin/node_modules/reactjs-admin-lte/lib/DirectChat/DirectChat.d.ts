/// <reference types="react" />
import * as PropTypes from 'prop-types';
import * as React from 'react';
import DirectChatMessageList from './DirectChatMessageList';
import DirectChatMessage from './DirectChatMessage';
import DirectChatImage from './DirectChatImage';
import DirectChatText from './DirectChatText';
import DirectChatContactList from './DirectChatContactList';
import DirectChatContact from './DirectChatContact';
import DirectChatContactImage from './DirectChatContactImage';
import DirectChatContactInfo from './DirectChatContactInfo';
export interface Props {
    className?: string;
    messageNumber?: number;
    style: 'primary' | 'success' | 'warning' | 'danger';
    onSubmitMessage?: (message: string) => void;
    title?: React.ReactNode;
}
export interface State {
    contactsOpen: boolean;
    message: string;
}
declare class DirectChat extends React.Component<Props, State> {
    constructor(props: any);
    static propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<any>;
        messageNumber: PropTypes.Requireable<any>;
        style: PropTypes.Validator<any>;
        onSubmitMessage: PropTypes.Requireable<any>;
        title: PropTypes.Requireable<any>;
    };
    static childContextTypes: {
        $adminlte_directchat: PropTypes.Requireable<any>;
    };
    static MessageList: typeof DirectChatMessageList;
    static Message: typeof DirectChatMessage;
    static Image: typeof DirectChatImage;
    static Text: typeof DirectChatText;
    static ContactList: typeof DirectChatContactList;
    static Contact: typeof DirectChatContact;
    static ContactImage: typeof DirectChatContactImage;
    static ContactInfo: typeof DirectChatContactInfo;
    getChildContext(): {
        $adminlte_directchat: {
            toggleContacts: () => void;
        };
    };
    handleChange(e: any): void;
    handleSubmit(e: any): void;
    renderBadge(): JSX.Element;
    render(): JSX.Element;
}
export default DirectChat;
