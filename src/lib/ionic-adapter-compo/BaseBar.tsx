import React from "react";
import { IonSearchbar, IonTabBar, IonToolbar } from "@ionic/react";

  export type MySearchBar = React.ComponentPropsWithRef<typeof IonSearchbar> 
  export type MyToolBar = React.ComponentPropsWithRef<typeof IonToolbar> 
  export type MyTabBar = React.ComponentPropsWithRef<typeof IonTabBar> 


  export function SearchBar(props:MySearchBar):React.JSX.Element
  {
    return (
        <IonSearchbar {...props} />
      )
  }



  export function TabBar(props:MyTabBar):React.JSX.Element
  {
    return (
        <IonTabBar {...props} />
      )
  }



  export function ToolBar(props:MyToolBar):React.JSX.Element
  {
    return (
        <IonToolbar {...props} />
      )
  }