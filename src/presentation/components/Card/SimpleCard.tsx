import React, { Children } from 'react';
import { MyCard } from '../../../lib/ionic-adapter-compo/Card';
import Card from '../../../lib/ionic-adapter-compo/Card';
import './CardStyle.css';

interface CardProps extends MyCard {
    className?: string;

    onClickCard?: () => void;
}

const SimpleCard: React.FC<CardProps> = ({
    className,
    title,
    subtitle,

    onClickCard,
    children,
    ...props
}) => {
    return (
        <>
            <Card
                {...props}
                mode="md"
                title={title && title.length > 0 ? title : ''}
                subtitle={subtitle && subtitle.length > 0 ? subtitle : ''}
                onClick={onClickCard}
                className={className && className.length > 0 ? className : ''}
            >
                {children}
            </Card>
        </>
    );
};
export default SimpleCard;
