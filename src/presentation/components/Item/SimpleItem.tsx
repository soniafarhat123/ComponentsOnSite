import React from 'react';
import { Item, MyItem } from '../../../lib/ionic-adapter-compo/BaseField';

export enum LinesType {
    full = 'full',
    inset = 'inset',
    none = 'none',
}
export enum Position {
    start = 'start',
    end = 'end',
}
export type ItemStartElement = {
    myStartItem: JSX.Element;
    position: Position;
};
export type ItemsEndElement = {
    myEndItems: {
        element: JSX.Element;
        actions?: { e: JSX.Element; call: () => void }[];
    }[];
    position: Position;
};
interface ItemProps extends MyItem {
    detailIcon?: 'caretForwardOutline';
    startItem?: ItemStartElement;
    endItems?: ItemsEndElement;
    label?: string;
    lines?: LinesType;
    onClickItem?: () => void;
}

const SimpleItem: React.FC<ItemProps> = ({
    detail,
    detailIcon,
    button,
    startItem,
    endItems,
    className,
    label,
    onClickItem,
    lines,
    children,
    ...props
}) => {
    return (
        <Item
            {...props}
            lines={lines}
            detail={detail}
            detailIcon={detailIcon}
            button={button}
            className={className}
            onClick={onClickItem}
        >
            {startItem &&
                startItem.myStartItem &&
                startItem.position === Position.start}
            {endItems &&
                endItems.myEndItems &&
                endItems.position === Position.end}
            {label && label.length > 0 ? label : null}
            {children}
        </Item>
    );
};

export default SimpleItem;
