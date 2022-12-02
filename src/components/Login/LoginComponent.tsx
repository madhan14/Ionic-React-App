import './LoginComponent.css';
import React from 'react';
import { IonList } from '@ionic/react';
import { CustomFieldLabel } from '../CustomFieldLabel/CustomFieldLabel';
import { Button } from '../Button/Button';
import { CustomLink } from '../CustomLink/CustomLink';

const RegisterComponents: React.FC = () => {
    return (
        <>
            <div className="container">
                <h1>Login</h1>
               
                <IonList>
                    <form>
                        <CustomFieldLabel
                            label="Email"
                            type="email"
                            placeholder="Enter email"
                        />
                        <CustomFieldLabel
                            label="Password"
                            type="password"
                            placeholder="Enter password"
                        />
                    </form>
                    <Button text="Login" />
                </IonList>
                <CustomLink message="Don't have an account?" text="Sign in" link="/register" />
                
            </div>
        </>
    );
}

export default RegisterComponents;