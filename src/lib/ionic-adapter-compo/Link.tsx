import React from "react";
import { IonNavLink } from "@ionic/react";

export type MyLink = React.ComponentPropsWithRef<typeof IonNavLink> 

  export default function Link(props:MyLink):React.JSX.Element
  {
    return (
        <IonNavLink {...props} />
      )
  }