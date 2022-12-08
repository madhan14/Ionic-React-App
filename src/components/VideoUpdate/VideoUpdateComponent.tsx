import './VideoUpdate.css';
import React from 'react';
import { IonItem, IonList, IonLabel, IonInput, IonButton, IonToggle } from '@ionic/react';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { env } from '../../pages/env/env';

const RegisterComponents: React.FC = () => {
    const {
        handleSubmit, control, setValue, register, formState: { errors } } = useForm({
         
        });
    
        // console.log(errors);
        // console.log(getValues());
    
        /**
         *
         * @param data
         */
        const onSubmit = (userData: any) => {
            console.log(userData);

            if(!userData.active){
                var status = 'inActive';
            } else {
                var status = 'active';
            }
            var inputData = JSON.stringify({
                "records": [
                    {
                        "fields": {
                            "Title": userData.Title,
                            "url": userData.url,
                            "active": status
                        }
                    }
                ] 
            });
            console.log(inputData);

          fetch('https://api.airtable.com/v0/appoWhRvLK7iOlxJY/videos', {
            method: 'POST',
            headers: {
                "Authorization": "Bearer "+env.ced_videos,
                "Content-Type": "application/json"
            },
            body: inputData,
            redirect: 'follow'
          })
           .then(response => response.text())
           .then(result => {
            console.log(result);
           })
           .then(error => console.log('error', error))
        };
    return (
        <>
            <div className="container">
                <h1>Add videos</h1>
               
                <IonList>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <IonItem>
                            <IonLabel>Title</IonLabel>
                            <IonInput
                                {
                                    ...register('Title', {
                                        required: 'Title is a required',
                                        pattern: {
                                            value: /[a-zA-z]/gm,
                                            message: 'Title is invalid'
                                        }
                                    })
                                }
                            />
                        </IonItem>
                            <ErrorMessage
                            errors={errors}
                            name="Title"
                            as={<div style={{ color: 'red' }} />}
                            />
                        <IonItem>
                            <IonLabel>URL</IonLabel>
                            <IonInput 
                                {
                                    ...register('url', {
                                        required: 'URL is a required',
                                        pattern: {
                                            value: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/,
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
                        <IonItem>
                            <IonLabel>Show in public?</IonLabel>
                                <Controller
                                    name="Show in public?"
                                    control={control}
                                    render={({ field }) => {
                                    return (
                                        <IonToggle
                                        checked={field.value}
                                        onIonChange={e => {
                                            setValue('active', e.detail.checked);
                                        }}
                                        />
                                    );
                                    }}
                                />                            
                            </IonItem>
                        </IonItem>
                        <IonButton type="submit">submit</IonButton>
                    </form>
                </IonList>                
            </div>
        </>
    );
}

export default RegisterComponents;