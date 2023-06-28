import { IonBackButton, IonButton, IonButtons, IonFabButton, IonMenuButton, IonTabButton, IonToggle } from "@ionic/react";
import React from "react";

//  import { arrowBack } from "ionicons/icons";


export type MyButton = React.ComponentPropsWithRef<typeof IonButton>
export type MyButtons = React.ComponentPropsWithRef<typeof IonButtons> 

// type MyTabButton = React.ComponentPropsWithRef<typeof IonTabButton> & {
// }

// type MyBackButton = React.ComponentPropsWithRef<typeof IonBackButton> & {
// }
export type MyToggleButton = React.ComponentPropsWithRef<typeof IonToggle> 
export type MyFabButton = React.ComponentPropsWithRef<typeof IonFabButton> 
type MyMenuButton = React.ComponentPropsWithRef<typeof IonButtons> 



export function Button(props:MyButton): React.JSX.Element {
    return (<IonButton {...props}/>)
} 
export function Buttons(props:MyButtons): React.JSX.Element {
  return (<IonButtons {...props}/>)
} 
export function BackButton(props :any): React.JSX.Element {
    return (<IonBackButton {...props} />
    )
} 

export function ToggleButton(props:MyToggleButton): React.JSX.Element {
    return (<IonToggle {...props}/>)
}


export function FabButton(props:MyFabButton):React.JSX.Element
{
  return (
      <IonFabButton  {...props} />
    )
}

export function MenuButton(props:MyMenuButton):React.JSX.Element
{
  return (
    <IonButtons {...props}>
    <IonMenuButton/>
  </IonButtons>
    )
}

export function TabButton(props :any): React.JSX.Element {
    return (   
    <IonTabButton {...props}/>
  
    )
}

 



