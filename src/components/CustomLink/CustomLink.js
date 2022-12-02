import { IonCol, IonRouterLink, IonRow } from "@ionic/react";
import './CustomLink.css';

export const CustomLink = props => (

    <IonRow className="ion-text-center ion-justify-content-center">
        <IonCol size="12">
            { props.message }
            <a href={props.link}>
                <IonRouterLink routerLink={ props.link }> { props.text } &rarr;</IonRouterLink>
            </a>
        </IonCol>
    </IonRow>
);