import { IonItem, IonList, IonCol, IonLabel } from "@ionic/react";
import { useState } from "react";
import React from 'react';
import axios from 'axios';
import { env } from '../../pages/env/env';

const CRUD =(video: any) => {
    
    // if(video.video == true){
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
    // } else {
        
    // }
    return (
        <>
            <IonList>
                {
                    listItems.map((element: any, index: any) => {
                        if(element.fields.active == "Active"){
                        return(
                            <IonItem key={index} id={element.id}>
                                <IonLabel>{element.fields.Title}</IonLabel>
                            </IonItem> 
                        );
                        }
                    })
                }
            </IonList>
        </>
    );
};

export default CRUD;