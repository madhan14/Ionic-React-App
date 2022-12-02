import React from "react";
import { IonContent, IonPage } from '@ionic/react';
import './Index.css';
import LoginComponent from "../../components/Login/LoginComponent";


export default class Index extends React.Component {

    render() {
        return (
            <>
                <IonPage>
                    <IonContent fullscreen>
                        <LoginComponent />
                    </IonContent>
                </IonPage>
            </>
        );
    }
}