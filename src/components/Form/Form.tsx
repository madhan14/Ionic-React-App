import { IonItem, IonLabel, IonButton, IonInput, IonToggle, useIonToast, useIonLoading } from "@ionic/react";
import React from 'react';
import { env } from '../../pages/env/env';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import './Form.css';
import { checkmarkDoneOutline } from "ionicons/icons";
// var Crypto = require('crypto-js');

const FORM = (props: any) => {
    // console.log(element);
    const { handleSubmit, control, setValue, register, formState: { errors } } = useForm(
        {
            defaultValues: {
                email: props.type.user === true ? props.element.fields.email : '',
                Admin: props.type.user === true ? props.element.fields.isAdmin : '',
                password: '',
                title: props.type.user === false ? props.element.fields.Title : '',
                url:  props.type.user === false ? props.element.fields.url : '',
                Active: props.type.user === false ? props.element.fields.active : '',
                id: props.element.id,
            }
        }
    );

    const [ presentToast ] = useIonToast();
    const [ preloader, preloaderDismiss ] = useIonLoading();

    const onSubmitUser = (userData: any) => {
        // console.log(userData)
        // var encrypt = Crypto.AES.encrypt(userData.password, "Test#123").toString();
        // console.log("Encryption: "+encrypt)
        // console.log("Decryption: "+Crypto.AES.decrypt(encrypt, "Test#123").toString(Crypto.enc.Utf8))
        preloader({
            message: 'Updating user...',
            spinner: 'circular'
        })
        var UpdateUser = JSON.stringify({
            "fields": {
                "email": userData.email,
                "pwd": userData.password,
                "isAdmin": String(userData.Admin)
            }
        });

        const reload = () => {
            preloaderDismiss();
            window.location.href = '/adminIndex'
        }
        
        fetch(env.user_url+'/'+userData.id, {
            method: 'PUT',
            headers: {
                "Authorization": "Bearer "+env.ced_user,
                "Content-Type": "application/json"
            },
            body: UpdateUser,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => {
            if(result.id){
                presentToast({
                    message: 'User updated!',
                    duration: 1000,
                    icon: checkmarkDoneOutline,
                    position: "top",
                    cssClass: 'success',
                    onDidDismiss: reload
                })
            }
        })
        .then(error => console.log('error', error))
    }

    const onSubmitVideo = (userData: any) => {
        preloader({
            message: 'Updating video',
            spinner: 'circular'
        });
        var UpdateVideo = JSON.stringify({
            "fields": {
                "Title": userData.title,
                "url": userData.url,
                "active": String(userData.Active)
            }
        });
                
        const reload = () => {
            preloaderDismiss();
            window.location.href = '/adminIndex'
        }
        fetch(env.video_url+'/'+userData.id, {
            method: 'PUT',
            headers: {
                "Authorization": "Bearer "+env.ced_videos,
                "Content-Type": "application/json"
            },
            body: UpdateVideo,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => {
            if(result.id){
                presentToast({
                    message: 'Updated!',
                    duration: 1000,
                    icon: checkmarkDoneOutline,
                    position: "top",
                    cssClass: 'success',
                    onDidDismiss: reload
                })
            }
        })
        .then(error => console.log('error', error))
    }

    if(props.type.video === true){
        return (
            <form id={props.element.id} onSubmit={handleSubmit(onSubmitVideo)}>
                <IonItem>
                    <IonLabel>Title: </IonLabel>
                    <IonInput
                        {
                            ...register('title', {
                                required: 'Title is required',
                                pattern: {
                                    value: /[A-Za-z]/gm,
                                    message: 'invalid title'
                                }
                            })
                        }
                    />
                </IonItem>
                <ErrorMessage
                    errors={errors}
                    name="title"
                    as={<div style={{ color: 'red', marginLeft: '25px' }} />}
                />
                <IonItem>
                    <IonLabel>URL: </IonLabel>
                    <IonInput type="url"
                        {
                            ...register('url', {
                                required: 'URL is required',
                                pattern: {
                                    value: /[a-zA-Z]/gm,
                                    message: 'URL is invalid address'
                                }
                            })
                        }
                    />
                </IonItem>
                <ErrorMessage
                    errors={errors}
                    name="url"
                    as={<div style={{ color: 'red', marginLeft: '25px' }} />}
                />
                <IonItem>
                    <IonLabel>Active: </IonLabel>
                    <Controller
                        name="Active"
                        control={control}
                        render={({ field }) => {
                            return (
                                <IonToggle
                                    checked={field.value}
                                    onIonChange={e => {
                                        setValue('Active', e.detail.checked);
                                    }}
                                />
                            );
                        }}
                    />
                </IonItem>
                <IonItem lines="none" style={{ display: 'none' }}>
                    <IonInput id="id"
                        {
                            ...register('id', {
                                required: 'Id is required',
                                pattern: {
                                    value: /[a-zA-Z]/gm,
                                    message: ''
                                }
                            })
                        }
                    />
                </IonItem>
                <div className="btnCenter">
                    <IonButton type="submit">Update</IonButton>
                </div>
            </form>
        );
    } else {
        return (
            <form id={props.element.id} onSubmit={handleSubmit(onSubmitUser)}>
                <IonItem>
                    <IonLabel>Email: </IonLabel>
                    <IonInput
                        {
                            ...register('email', {
                                required: 'Require email',
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
                                required: 'Require password',
                                pattern: {
                                    value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/gm,
                                    message: 'password has min 6 character, atleast 1 uppercase, 1 lowercase letter, and 1 number with no spaces'
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
                <IonItem>
                    <IonLabel>Admin: </IonLabel>
                    <Controller
                        name="Admin"
                        control={control}
                        render={({ field }) => {
                            return (
                                <IonToggle
                                    checked={field.value}
                                    onIonChange={e => {
                                        setValue('Admin', e.detail.checked);
                                    }}
                                />
                            );
                        }}
                    />
                </IonItem>
                <IonItem style={{ display: 'none' }}>
                    <IonInput id="id"
                        {
                            ...register('id', {
                                required: 'Id is required',
                                pattern: {
                                    value: /[a-zA-Z]/gm,
                                    message: ''
                                }
                            })
                        }
                    />
                </IonItem>
                <div className="btnCenter">
                    <IonButton type="submit">Update</IonButton>
                </div>
            </form>
        );
    }
}

export default FORM;