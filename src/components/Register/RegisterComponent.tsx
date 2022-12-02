import './RegisterComponents.css';
import React from 'react';
import { IonList } from '@ionic/react';
import { Button } from '../Button/Button';
import { CustomLink } from '../CustomLink/CustomLink';
import { CustomFieldLabel } from '../CustomFieldLabel/CustomFieldLabel';

const RegisterComponents: React.FC = () => {
    return (
        <>
            <div className="container">
                <h1>Register</h1>
               
                <IonList>
                    <form>
                        <CustomFieldLabel
                            label="Name"
                            type="text"
                            placeholder="Enter name"
                        />
                        <CustomFieldLabel
                            label="Phone Number"
                            type="tel"
                            maxlength={10}
                            placeholder="Enter phone number"
                        />
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
                    <Button text="Register" />
                </IonList>
                {/* <p>Already a member? <a>Login</a> </p> */}
                <CustomLink message="Already a member?" text="Login" link="/login" />

            </div>
        </>
    );
}

export default RegisterComponents;