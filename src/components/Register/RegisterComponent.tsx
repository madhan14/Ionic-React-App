import './RegisterComponents.css';
import React from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonList, IonButton } from '@ionic/react';

const RegisterComponents: React.FC = () => {
    return (
        <>
            <IonContent className="ion-padding">
                <h1>Register Yourself</h1>
               
                <IonList>
                    <form>
                    <IonItem>
                        <IonLabel>Name: </IonLabel>
                        <IonInput type="text" placeholder="Enter Name"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Phone Number: </IonLabel>
                        <IonInput maxlength={10} type="tel" placeholder="Enter phone number"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Email: </IonLabel>
                        <IonInput type="email" placeholder="Enter email"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Password: </IonLabel>
                        <IonInput type="password" placeholder="Enter password"></IonInput>
                    </IonItem>
                    </form>
                </IonList>
                
                <div className="register_button">
                    <IonButton size="default" type="submit">Register</IonButton>
                </div>
            </IonContent>
        </>
    );
}

export default RegisterComponents;