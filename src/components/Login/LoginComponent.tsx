import './LoginComponent.css';
import React from 'react';
import { IonItem, IonList, IonLabel, IonInput, IonButton } from '@ionic/react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const RegisterComponents: React.FC = () => {
    const {
        handleSubmit, register, formState: { errors } } = useForm({
         
        });
    
        // console.log(errors);
        // console.log(getValues());
    
        /**
         *
         * @param data
         */
        const onSubmit = (userData: any) => {
          console.log(userData);
          let userEmail = userData.email;
          let userPwd =  userData.password;
          fetch('https://api.airtable.com/v0/appl3Ezzwjsm0yz0h/users', {
            method: 'GET',
            headers: {
                "Authorization": "Bearer token"
            },
            redirect: 'follow'
          })
           .then(response => response.text())
           .then(result => {
                var data = JSON.parse(result);
                // var data = result;
                // console.log(data);
                // console.log(data.records);
                for(var i=0; i<data.records.length; i++){
                    var email = data.records[i].fields.email;
                    var pwd = data.records[i].fields.pwd;
                    if(userEmail === email && userPwd === pwd){
                        
                        alert('success');
                    }
                }
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
                </IonList>
                {/* <CustomLink message="Don't have an account?" text="Sign in" link="/register" /> */}
                
            </div>
        </>
    );
}

export default RegisterComponents;