import { IonFab, IonFabButton, IonIcon, IonModal, IonContent, IonToggle, IonToolbar, IonInput, IonTitle, IonButtons, IonButton, IonList, IonItem, IonAvatar, IonImg, IonLabel } from "@ionic/react";
import { add, closeOutline } from "ionicons/icons";
import { env } from '../../pages/env/env';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import React, { useRef } from "react";

const Create = (props: any) => {
    const { handleSubmit, control, setValue, register, formState: { errors } } = useForm();

    const onSubmit = (userData: any) => {
        console.log(userData);
    }

    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonFabButton id="create">
                    <IonIcon icon={add} />
                </IonFabButton>
                <IonModal ref={modal} id="modal" trigger="create">
                    <IonContent>
                        <IonToolbar>
                            <IonTitle>Create</IonTitle>
                            <IonButtons slot="end">
                                <IonButton color="light" onClick={() => modal.current?.dismiss()}>
                                    <IonIcon slot="icon-only" icon={closeOutline}  onClick={() => modal.current?.dismiss()} />
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                        <IonList>
                            {
                                props.type.video == true ? 
                                    <form id="create_video" onSubmit={handleSubmit(onSubmit)}>
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
                                            as={<div style={{ color: 'red' }} />}
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
                                            as={<div style={{ color: 'red' }} />}
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
                                        <IonButton type="submit">submit</IonButton>
                                    </form>
                                :
                                    <form id="create_user" onSubmit={handleSubmit(onSubmit)}>
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
                                            as={<div style={{ color: 'red' }} />}
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
                                            as={<div style={{ color: 'red' }} />}
                                        />
                                        <IonButton type="submit">submit</IonButton>
                                    </form>
                            }
                        </IonList>
                    </IonContent>
                </IonModal>
            </IonFab>
        </>
    );
}

export default Create;