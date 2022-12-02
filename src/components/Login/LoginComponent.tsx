import './LoginComponent.css';
import React from 'react';
import { IonInput, IonItem, IonLabel, IonList, IonButton } from '@ionic/react';

const RegisterComponents: React.FC = () => {
    return (
        <>
            <div className="container">
                <h1>Login</h1>
               
                <IonList>
                    <form>
                        <IonItem>
                            <IonLabel>Email: </IonLabel>
                            <IonInput type="email" placeholder="Enter Name"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Password: </IonLabel>
                            <IonInput type="password" placeholder="Enter password"></IonInput>
                        </IonItem>
                    </form>
                    <IonButton size="default" type="submit">
                        Register
                    </IonButton>
                </IonList>
                <p>New to this App? <a href="#">Register</a> </p>
            </div>
        </>
    );
}

export default RegisterComponents;