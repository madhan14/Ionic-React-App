import './RegisterComponents.css';
import React from 'react';
import { IonInput, IonItem, IonLabel, IonList, IonButton } from '@ionic/react';
import { Button } from '../Button/Button';
import { CustomLink } from '../CustomLink/CustomLink';

const RegisterComponents: React.FC = () => {
    return (
        <>
            <div className="container">
                <h1>Register</h1>
               
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
                    <Button text="Register" />
                </IonList>
                {/* <p>Already a member? <a>Login</a> </p> */}
                <CustomLink message="Already a member?" text="Login" link="/login" />

            </div>
        </>
    );
}

export default RegisterComponents;