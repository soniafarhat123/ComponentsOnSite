import React from 'react';
import {
    IonBadge,
    IonCheckbox,
    IonDatetime,
    IonInput,
    IonItem,
    IonLabel,
    IonText,
    IonTextarea,
    IonTitle,
} from '@ionic/react';

export type MyInput = React.ComponentPropsWithRef<typeof IonInput>;
export type MyLabel = React.ComponentPropsWithRef<typeof IonLabel>;
export type MyTitle = React.ComponentPropsWithRef<typeof IonTitle>;
export type MyText = React.ComponentPropsWithRef<typeof IonText>;
export type MyTextArea = React.ComponentPropsWithRef<typeof IonTextarea>;
export type MyDate = React.ComponentPropsWithRef<typeof IonDatetime>;
export type MyCheckbox = React.ComponentPropsWithRef<typeof IonCheckbox>;
export type MyBadge = React.ComponentPropsWithRef<typeof IonBadge>;
export type MyItem = React.ComponentPropsWithRef<typeof IonItem>;

export function Label(props: MyLabel): React.JSX.Element {
    return <IonLabel {...props} />;
}
export function Item(props: MyItem): React.JSX.Element {
    return <IonItem {...props} />;
}

export function Title(props: MyTitle): React.JSX.Element {
    return <IonTitle {...props} />;
}

export function Text(props: MyText): React.JSX.Element {
    return <IonText {...props} />;
}

export function Input(props: MyInput): React.JSX.Element {
    return <IonInput className={props.className} {...props} />;
}

export function TextArea(props: MyTextArea): React.JSX.Element {
    return <IonTextarea {...props} />;
}

export function Date(props: MyDate): React.JSX.Element {
    return <IonDatetime {...props} />;
}
export function Checkbox(props: MyCheckbox): React.JSX.Element {
    return <IonCheckbox {...props} />;
}

export function Badge(props: MyBadge): React.JSX.Element {
    return <IonBadge {...props} />;
}

