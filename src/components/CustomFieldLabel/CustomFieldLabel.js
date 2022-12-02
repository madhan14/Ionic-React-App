import { IonItem, IonLabel, IonInput } from '@ionic/react';

export const CustomFieldLabel = props => {
    return (
        <IonItem>
            <IonLabel>{props.label} </IonLabel>
            <IonInput type={props.type} maxlength={props.maxlength} placeholder={props.placeholder}></IonInput>
        </IonItem>
    );
};