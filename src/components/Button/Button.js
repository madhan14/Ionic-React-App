import { IonCol, IonRouterLink, IonRow, IonButton } from "@ionic/react";
import './Button.css';

export const Button = props => (

    <IonRow className="ion-text-center ion-justify-content-center">
        <IonCol size="12">
            { props.message }
            <IonButton className="custom-link">
                { props.text }
            </IonButton>
        </IonCol>
    </IonRow>
);