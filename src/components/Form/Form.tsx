import { IonItem, IonLabel, IonButton, IonInput, IonToggle, useIonToast } from "@ionic/react";
import React from 'react';
import { env } from '../../pages/env/env';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import './Form.css';
import { checkmarkDoneOutline } from "ionicons/icons";
import { setTimeout } from "timers";

const FORM = (element: any) => {
    console.log(element);
    const { handleSubmit, control, setValue, register, formState: { errors } } = useForm(
        {
            defaultValues: {
                email: element.type.user === true ? element.element.fields.email : '',
                password: '',
                title: element.type.user === false ? element.element.fields.Title : '',
                url:  element.type.user === false ? element.element.fields.url : '',
                Active: element.type.user === false ? element.element.fields.active : '',
                id: element.element.id,
            }
        }
    );
    const [presentToast] = useIonToast();

    const onSubmitUser = (userData: any) => {
        console.log(userData);
    }
    const onSubmitVideo = (userData: any) => {
        var UpdateData = JSON.stringify({
            "fields": {
                "Title": userData.title,
                "url": userData.url,
                "active": String(userData.Active)
            }
        });
                
        const reload = () => {
            window.location.href = '/adminIndex'
        }
        fetch(env.video_url+'/'+userData.id, {
            method: 'PUT',
            headers: {
                "Authorization": "Bearer "+env.ced_videos,
                "Content-Type": "application/json"
            },
            body: UpdateData,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            console.log(result.id)
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
    if(element.type.video === true){
        return (
            <form id={element.element.id} onSubmit={handleSubmit(onSubmitVideo)}>
                <IonItem>
                    <IonLabel>Title</IonLabel>
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
                    as={<div style={{ color: 'red' }} />}
                />
                <IonItem>
                    <IonLabel>URL</IonLabel>
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
                    as={<div style={{ color: 'red' }} />}
                />
                <IonItem>
                    <IonLabel>Active</IonLabel>
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
                
                <IonButton type="submit">submit</IonButton>
            </form>
        );
        
    } else {
        return (
            <form id={element.element.id} onSubmit={handleSubmit(onSubmitUser)}>
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
}

export default FORM;