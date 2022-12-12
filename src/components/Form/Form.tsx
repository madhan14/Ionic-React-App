import { IonItem, IonList, IonLabel, IonIcon, IonModal, IonContent, IonTitle, IonToolbar, IonButtons, IonButton, IonInput, IonImg } from "@ionic/react";
import React from 'react';
import axios from 'axios';
import { env } from '../../pages/env/env';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const FORM = (element: any) => {
    console.log(element);
    const { handleSubmit, register, formState: { errors } } = useForm(
        {
            defaultValues: {
                email: 'test',
                password: ''
            }
        }
    );
    const onSubmit = (userData: any) => {
        console.log(userData);
    }
    return (
        <form  onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
                <IonLabel>Email</IonLabel>
                <IonInput
                    {
                        ...register('email', {
                            required: 'Email is a required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'invalid email address'
                            }
                        })
                    }
                />
            </IonItem>
            <ErrorMessage
            errors={errors}
            name="email"
            as={<div style={{ color: 'red' }} />}
            />
            <IonItem>
                <IonLabel>Password</IonLabel>
                <IonInput type="password"
                    {
                        ...register('password', {
                            required: 'password is a required',
                            pattern: {
                                value: /[a-zA-Z]/gm,
                                message: 'password is invalid address'
                            }
                        })
                    }
                />
            </IonItem>
            <ErrorMessage
            errors={errors}
            name="password"
            as={<div style={{ color: 'red' }} />}
            />
            <IonButton type="submit">submit</IonButton>
        </form>
    );
}

export default FORM;