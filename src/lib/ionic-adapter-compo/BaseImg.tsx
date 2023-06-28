import React from 'react';
import { IonAvatar, IonIcon, IonImg, IonThumbnail } from '@ionic/react';

export type MyAvatar = React.ComponentPropsWithRef<typeof IonAvatar> & {
    img: string;
};

export type MyThumbnail = React.ComponentPropsWithRef<typeof IonThumbnail> & {
    img: string;
};

export type MyIcon = React.ComponentPropsWithRef<typeof IonIcon>;

export type MyImage = React.ComponentPropsWithRef<typeof IonImg>;

export function avatar({ img, ...props }: MyAvatar): React.JSX.Element {
    return (
        <IonAvatar {...props}>
            <img src={img} alt="" />
        </IonAvatar>
    );
}
export function Thumbnail({ img, ...props }: MyThumbnail): React.JSX.Element {
    return (
        <IonThumbnail {...props}>
            <img src={img} alt="" />
        </IonThumbnail>
    );
}

export function Icon(props: MyIcon): React.JSX.Element {
    return <IonIcon {...props} />;
}

export function Image(props: MyImage): React.JSX.Element {
    return <IonImg {...props} />;
}

