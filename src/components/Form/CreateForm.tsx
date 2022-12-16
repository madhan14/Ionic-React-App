import { IonToggle, IonInput, IonButton, IonItem, IonLabel, useIonToast, useIonLoading } from "@ionic/react";
import { checkmarkDoneOutline } from "ionicons/icons";
import { env } from '../../pages/env/env';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import './CreateModal.css'
import React from "react";

const Create = (props: any) => {
    const { handleSubmit, control, setValue, register, formState: { errors } } = useForm();
    
    const [Toast] = useIonToast();

    const [ preloader, preloaderDismiss ] = useIonLoading();

    const reload = () => {
        preloaderDismiss();
        window.location.href = '/adminIndex'
    }

    const onSubmitUser = (userData: any) => {
        // console.log(userData);
        preloader({
            message: 'Adding user...',
            spinner: 'circles'
        });
        var admin;
        if(userData.Admin === undefined){
            admin = 'false'
        } else {
            admin = 'true'
        }
        var newRecord = {
            "records": [
                {
                    "fields": {
                        'email': userData.email,
                        "pwd": userData.password,
                        "isAdmin": admin
                    }
                }
            ]
        }
        // console.log(newRecord);
        fetch(env.user_url, {
            method: 'POST',
            headers: {
                "Authorization": 'Bearer '+env.ced_user,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRecord),
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => {
            if(result.records){
                Toast({
                    message: 'User Added',
                    duration: 1000,
                    icon: checkmarkDoneOutline,
                    position: 'top',
                    cssClass: 'success',
                    onDidDismiss: reload
                })
            }
        })
        .then(error => console.log('error', error))
    }

    const onSubmitVideo = (userData: any) => {
        // console.log(userData);
        preloader({
            message: 'Adding video...',
            spinner: 'circles'
        });
        var status, url;
        if(userData.Active === undefined){
            status = 'false'
        } else {
            status = 'true'
        }

        if(userData.url.includes('watch')){
            url = 'https://www.youtube.com/embed/'+userData.url.split('=')[1]
        } else if(userData.url.includes('youtu.be')){
            url = 'https://www.youtube.com/embed/'+userData.url.split('youtu.be/')[1]
        } else {
            url = userData.url
        }

        // console.log(url);
        var newRecord = {
            "records": [
                {
                    "fields": {
                        'Title': userData.title,
                        "url": url,
                        "active": status
                    }
                }
            ]
        }
        // console.log(newRecord)
        fetch(env.video_url, {
            method: 'POST',
            headers: {
                "Authorization": 'Bearer '+env.ced_videos,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRecord),
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => {
            if(result.records){
                Toast({
                    message: 'Video Added',
                    duration: 1000,
                    icon: checkmarkDoneOutline,
                    position: 'top',
                    cssClass: 'success',
                    onDidDismiss: reload
                })
            }
        })
        .then(error => console.log('error', error))
    }

    if(props.type.video === true){
        return (
        <form id="create_video" onSubmit={handleSubmit(onSubmitVideo)}>
            <IonItem>
                <IonLabel>Title: </IonLabel>
                <IonInput 
                    {
                        ...register('title', {
                            required: 'Title is required',
                            pattern: {
                                value: /[A-Za-z]/gm,
                                message: 'Invalid title'
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
            <IonItem lines="full">
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
            <div className="btnCenter">
                <IonButton type="submit">submit</IonButton>
            </div>
        </form>
        );
    } else {
        return (
        <form id="create_user" onSubmit={handleSubmit(onSubmitUser)}>
                <IonItem>
                    <IonLabel>Email: </IonLabel>
                    <IonInput 
                        {
                            ...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email'
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
                                required: 'Password is required',
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
                <IonItem lines="full">
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
                <div className="btnCenter">
                    <IonButton type="submit">submit</IonButton>
                </div>
        </form>
        );
    }
}

export default Create;