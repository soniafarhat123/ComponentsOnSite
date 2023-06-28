import React from "react";
import { IonLoading, IonRefresher, IonRefresherContent } from "@ionic/react";

export type MyRefresher = React.ComponentPropsWithRef<typeof IonRefresher> 
  export type MyLoading = React.ComponentPropsWithRef<typeof IonLoading> 

  export function Refresher(props:MyRefresher):React.JSX.Element
  {
    return (
        <IonRefresher {...props}>
        <IonRefresherContent/>
      </IonRefresher>
      )
  }

  export function Loading(props:MyLoading):React.JSX.Element
  {
    return (
        <IonLoading {...props} duration={3000} />

      )
  }

