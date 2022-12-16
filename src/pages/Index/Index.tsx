import {  IonContent, IonHeader, IonTitle,IonToolbar, IonPage, IonItem } from '@ionic/react';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { env } from '../env/env';
import './Index.css';
    
const Index: React.FC = () => {
    const [ listItems, setListItems ] = useState<any>([]);

    React.useEffect(() => {
        sendRequest().then((data: any) => {
            setListItems(data.records)
        });
    }, []);
    
    const sendRequest = () => {
        return axios
            .get(env.video_url, {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer "+env.list_videos
                }
            })
            .then((response: any) => {
                // console.log(response);
                return response.data;
            })
    };

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            Tamil Magan
                            {
                                localStorage.getItem("isAdmin") === 'yes'? <a className="inline" href="/adminIndex">Edit</a> : ''
                            }
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {
                    // eslint-disable-next-line
                        listItems.map((element: any, index: any) => {
                            if(element.fields.active === "true"){
                                return(
                                    <IonItem key={index} lines="none">
                                        <iframe title={element.fields.Title} src={element.fields.url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                                    
                                    </IonItem>
                                );
                            }
                        })
                    }
                </IonContent>
            </IonPage>
        </>
    );
}
    
export default Index;