import {  IonContent, IonHeader, IonTitle,IonToolbar, IonPage, IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { env } from '../env/env';
    
const Index: React.FC = () => {
    const [ listItems, setListItems ] = useState<any>([]);

    React.useEffect(() => {
        sendRequest().then((data: any) => {
            setListItems(data.records)
        });
    }, []);
    
    const sendRequest = () => {
        return axios
            .get("https://api.airtable.com/v0/appoWhRvLK7iOlxJY/videos", {
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
                        Videos
                        <a className="inline" href="/login">Sign In</a>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
                <IonContent fullscreen>
                    <div className="container">
                        <IonGrid>
                            <IonRow>
                            {
                                listItems.map((element: any, index: any) => {
                                    if(element.fields.active == "Active"){
                                    return(
                                        <IonCol key={index}>
                                        <iframe src={element.fields.url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                                    
                                        </IonCol> 
                                    );
                                    }
                                })
                            }
                            </IonRow>
                        </IonGrid>
                    </div>
                </IonContent>
            </IonPage>
        </>
    );
}
    
export default Index;