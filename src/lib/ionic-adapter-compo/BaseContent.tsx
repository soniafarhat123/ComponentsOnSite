import React from 'react';
import {
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonHeader,
    IonMenu,
    IonPage,
    IonRow,
} from '@ionic/react';

export type MyMenu = React.ComponentPropsWithRef<typeof IonMenu>;
export type MyContent = React.ComponentPropsWithRef<typeof IonContent>;
export type MyPage = React.ComponentPropsWithRef<typeof IonPage>;
export type MyHeader = React.ComponentPropsWithRef<typeof IonHeader>;
export type MyFooter = React.ComponentPropsWithRef<typeof IonFooter>;
export type MyGrid = React.ComponentPropsWithRef<typeof IonGrid>;
export type MyRow = React.ComponentPropsWithRef<typeof IonRow>;
export type MyCol = React.ComponentPropsWithRef<typeof IonCol>;

export function Menu(props: MyMenu): React.JSX.Element {
    return <IonMenu {...props} />;
}

export function Content(props: MyContent): React.JSX.Element {
    return <IonContent {...props} />;
}

export function Page(props: MyPage): React.JSX.Element {
    return <IonPage {...props} />;
}

export function Footer(props: MyFooter): React.JSX.Element {
    return <IonFooter {...props} />;
}

export function Header({ children, ...props }: MyHeader): React.JSX.Element {
    return <IonHeader {...props}> {children}</IonHeader>;
}

export function Grid(props: MyGrid): React.JSX.Element {
    return <IonGrid {...props} />;
}
export function Row(props: MyRow): React.JSX.Element {
    return <IonRow {...props} />;
}
export function Col(props: MyCol): React.JSX.Element {
    return <IonCol {...props} />;
}

