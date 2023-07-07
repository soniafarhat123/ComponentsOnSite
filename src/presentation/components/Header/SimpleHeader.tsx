import React from 'react';
import {
    MyHeader,
    Header,
    ToolBar,
    Title,
} from '../../../lib/ionic-adapter-compo';

export enum ButtonsPosition {
    start = 'start',
    end = 'end',
}
export type ButtonsElements = {
    myButtons: JSX.Element;
};

interface HeaderProps extends MyHeader {
    buttons?: ButtonsElements;
    title?: string;
    titleClassName?: string;
}

const SimpleHeader: React.FC<HeaderProps> = ({
    buttons,
    title,
    titleClassName,
    children,
    ...props
}) => {
    return (
        <Header {...props} mode="md">
            <ToolBar>
                {buttons && buttons.myButtons}
                <Title className={titleClassName}>{title}</Title>
            </ToolBar>
            {children}
        </Header>
    );
};

export default SimpleHeader;
