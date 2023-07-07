import React, { ReactNode } from 'react';
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
} from '@ionic/react';

export type MyCard = React.ComponentPropsWithRef<typeof IonCard> & {
    img?: string;
    link?: string;
    title?: string;
    subtitle?: string;
    styleCardHeader?: Record<string, string>;
    classNameCardHeader?: string;
    styleCardTitle?: Record<string, string>;
    classNameCardTitle?: string;
    styleCardSubTitle?: Record<string, string>;
    classNameCardSubTitle?: string;
    styleCardContent?: {
        [key: string]: any;
    };
    classNameCardContent?: string;
    children?: ReactNode;
    cardHeader: boolean;
};

export default function Card({
    children,
    img,
    link,
    title,
    subtitle,
    styleCardHeader,
    classNameCardHeader,
    styleCardTitle,
    classNameCardTitle,
    classNameCardSubTitle,
    styleCardSubTitle,
    styleCardContent,
    classNameCardContent,
    cardHeader,
    ...props
}: MyCard): React.JSX.Element {
    return (
        <IonCard routerLink={link && link} {...props}>
            {img && <img src={img} alt="" />}
            {cardHeader && (
                <IonCardHeader
                    className={classNameCardHeader}
                    style={styleCardHeader}
                >
                    <IonCardTitle
                        className={classNameCardTitle}
                        style={styleCardTitle}
                    >
                        {title}
                    </IonCardTitle>
                    <IonCardSubtitle
                        className={classNameCardSubTitle}
                        style={styleCardSubTitle}
                    >
                        {subtitle}
                    </IonCardSubtitle>
                </IonCardHeader>
            )}

            <IonCardContent
                className={classNameCardContent}
                style={styleCardContent}
            >
                {children}
            </IonCardContent>
        </IonCard>
    );
}

