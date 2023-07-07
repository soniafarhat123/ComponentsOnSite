import {
    IonActionSheet,
    IonAlert,
    IonContent,
    IonHeader,
    IonModal,
    IonPopover,
    IonToast,
    IonToolbar,
} from '@ionic/react';
import React, { ReactNode } from 'react';
import { Button } from './BaseButton';
import { Title } from './BaseField';

export type MyModal = React.ComponentPropsWithRef<typeof IonModal> & {
    onCancel: () => void;
    onConfirm: () => void;
    cancelTitle: string;
    confirmTitle: string;
    title?: string;
    children: ReactNode;
};
export type MyToast = React.ComponentPropsWithRef<typeof IonToast>;
export type MyActionSheet = React.ComponentPropsWithRef<typeof IonActionSheet>;
export type MyAlert = React.ComponentPropsWithRef<typeof IonAlert>;
export type MyPopover = React.ComponentPropsWithRef<typeof IonPopover>;

export function Modal({
    children,
    onCancel,
    onConfirm,
    cancelTitle,
    confirmTitle,
    title,
    ...props
}: MyModal): React.JSX.Element {
    return (
        <IonModal {...props}>
            <IonHeader>
                <IonToolbar>
                    <Button slot="start" onClick={onCancel}>
                        {cancelTitle}
                    </Button>
                    <Title>{title}</Title>
                    <Button slot="end" onClick={onConfirm}>
                        {confirmTitle}
                    </Button>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">{children}</IonContent>
        </IonModal>
    );
}

export function Toast(props: MyToast): React.JSX.Element {
    return <IonToast {...props} duration={3000} />;
}

export function ActionSheet(props: MyActionSheet): React.JSX.Element {
    return <IonActionSheet {...props} />;
}

export function Alert(props: MyAlert): React.JSX.Element {
    return <IonAlert {...props} />;
}
export function Popover({ children, ...props }: MyPopover): React.JSX.Element {
    return (
        <IonPopover {...props}>
            <IonContent>{children}</IonContent>
        </IonPopover>
    );
}

