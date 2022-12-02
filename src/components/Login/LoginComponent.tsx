import './LoginComponent.css';
import React from 'react';
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { Button } from '../Button/Button';
import { CustomLink } from '../CustomLink/CustomLink';

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
                    <Button text="Login" />
                </IonList>
                <CustomLink message="Don't have an account?" text="Sign in" link="/register" />
                
            </div>
        </>
    );
}

export default RegisterComponents;