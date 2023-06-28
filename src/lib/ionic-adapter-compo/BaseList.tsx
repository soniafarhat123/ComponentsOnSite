import React, {  ReactNode } from 'react';
import { IonFab, IonFabList, IonItem,  IonList,  IonPicker, IonRadio, IonRadioGroup, IonSelect, IonSelectOption } from '@ionic/react';

export type MyPicker = React.ComponentPropsWithRef<typeof IonPicker> 
export type MyList = React.ComponentPropsWithRef<typeof IonList> & {
  children:ReactNode
}

export type MySelect = React.ComponentPropsWithRef<typeof IonSelect> 

export type MyOptions= React.ComponentPropsWithRef<typeof IonSelectOption> 
export type MyRadio= React.ComponentPropsWithRef<typeof IonRadio> 
export type MyRadioGroup=React.ComponentPropsWithRef<typeof IonRadioGroup>
export type MyFabList=React.ComponentPropsWithRef<typeof IonFabList>
export type MyFab=React.ComponentPropsWithRef<typeof IonFab>


export function Picker({...props }:MyPicker): React.JSX.Element {
    return (
   <IonPicker {...props}  
  //  buttons={[
  //   {
  //     text: 'Cancel',
  //     role: 'cancel'
  //   },
  //   {
  //     text: 'Confirm',
  //     handler: (value)=>selectFun(value)
  //   }
  // ]}
  />
    )
} 
export function List({children,...props }:MyList):React.JSX.Element{
  return (
    <IonList {...props}>
        <IonItem>
          {children}
        </IonItem>
      
    </IonList>
  )
}

export function Options(props:MyOptions):React.JSX.Element{
  return (
    <IonSelectOption  {...props} />
    )
}

export function Select(props:MySelect):React.JSX.Element{
  return (
    <IonSelect {...props} />
    )
}

export function Radio(props:MyRadio):React.JSX.Element{
  return (
    <IonRadio  {...props} />
    )
}

export function RadioGroup(props:MyRadioGroup):React.JSX.Element{
  return (
    <IonRadioGroup   {...props} />
    )
}

export function FabList  (props:MyFabList):React.JSX.Element{
  return (
    <IonFabList {...props} />
    )
}

export function Fab(props:MyFab):React.JSX.Element{
  return (
    <IonFab {...props} />
    )
}


