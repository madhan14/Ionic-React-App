import './LoginComponent.css';
import React from 'react';
import { IonItem, IonList, IonLabel, IonInput, IonButton, useIonToast, useIonLoading } from '@ionic/react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { env } from '../../pages/env/env';

const LoginComponents: React.FC = () => {
    const { handleSubmit, register, formState: { errors } } = useForm({});
    localStorage.clear();
    const [ alertToast ] = useIonToast();
    const [ preloader, preloaderDismiss ] = useIonLoading();

    const onSubmit = (userData: any) => {
        // console.log(userData);
        preloader({
            message: 'Please wait...',
            spinner: 'lines'
          })
        let userEmail = userData.email;
        let userPwd =  userData.password;
        fetch(env.user_url, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer "+env.list_user
            },
            redirect: 'follow'
        })
        .then(response => response.text())
        .then(result => {
            var data = JSON.parse(result);
            // var data = result;
            // console.log(data);
            // console.log(data.records);
            data.records.forEach((records: any) => {
                if(records.fields.email === userEmail && records.fields.pwd === userPwd){
                    localStorage.setItem("email", records.fields.email);
                    localStorage.setItem("isAdmin", records.fields.isAdmin);
                    window.location.href = '/Index'
                } else {
                    preloaderDismiss();
                    alertToast({
                        message: 'Email or Password is wrong',
                        duration: 2000,
                        position: 'top'
                    })
                }
            });
        })
        .then(error => console.log('error', error))
    };
    return (
        <>
            <div className="container">
                <h1>Login</h1>
               
                <IonList>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <IonItem>
                            <IonLabel>Email: </IonLabel>
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
                            as={<div style={{ color: 'red', marginLeft: '25px' }} />}
                            />
                        <IonItem>
                            <IonLabel>Password: </IonLabel>
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
                          as={<div style={{ color: 'red', marginLeft: '25px' }} />}
                        />
                        <div className='btnCenter'>
                            <IonButton type="submit">submit</IonButton>
                        </div>
                    </form>
                </IonList>
                {/* <CustomLink message="Don't have an account?" text="Sign in" link="/register" /> */}
                
            </div>
        </>
    );
}

export default LoginComponents;