import { IonItem, IonList, IonLabel, IonIcon } from "@ionic/react";
import { useState } from "react";
import React from 'react';
import axios from 'axios';
import { env } from '../../pages/env/env';
import { trash } from "ionicons/icons";
import './CRUD.css';
import MODAL from "../Modal/Modal";

const CRUD = (video: any) => {
    const [ listItems, setListItems ] = useState<any>([]);

    React.useEffect(() => {
        if(video.video === false){
            sendRequest(env.user_url, env.list_user)
        } else {
            sendRequest(env.video_url, env.list_videos)
        }
    }, [video]);

    const sendRequest = async(fetchUrl: string, fetchToken: string) => {
        return await axios.get(fetchUrl, {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer "+fetchToken
                }
            })
            .then((response: any) => {
                // console.log(response.data);
                setListItems(response.data.records)
            })
    };

    return (
        <>
            <IonList>
                {
                    
                    listItems?.map((element: any, index: any) => {
                        var label;
                        if(video.video === true){
                            label = element.fields.Title
                        }else{
                            label = element.fields.email
                        }
                        return(
                            <IonItem key={index} id={element.id}>
                                <IonLabel>{label}</IonLabel>
                                <MODAL element={element} type={video} />
                                <IonIcon color="danger" icon={trash} itemType="delete" id={element.id} />
                            </IonItem>
                        );
                    })
                }
            </IonList>
        </>
    );
};

export default CRUD;