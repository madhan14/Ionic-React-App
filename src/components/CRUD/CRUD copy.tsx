import { IonItem, IonList, IonLabel, IonIcon } from "@ionic/react";
import { useState } from "react";
import React from 'react';
import axios from 'axios';
import { env } from '../../pages/env/env';
import { create, trash } from "ionicons/icons";

const CRUD = (video: any) => {
    const [url, setURL ] = useState<string>(env.video_url);
    const [token, setToken ] = useState<string>(env.list_videos);
    const [ listItems, setListItems ] = useState<any>([]);

    React.useEffect(() => {
        if(video.video === false){
            setURL(env.user_url);
            setToken(env.list_user);
        } else {
            setURL(env.video_url);
            setToken(env.list_videos);
        }
        console.log(url, token);
        sendRequest(url, token)
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
                // return response.data;
            })
    };

    const edVideo = (e: any) => {
        console.log(e.target.id);
        console.log(e.target.itemType);
        if(e.target.itemType === 'edit'){
            return (
                <></>
            );
        }
        if(e.target.itemType === 'delete'){
            return (
                <></>
            );
        }
        
    }

    return (
        
        <>
            <IonList>
                {
                    
                    listItems?.map((element: any, index: any) => {
                        if(video.video === true){
                            return (
                                <IonItem key={index} id={element.id}>
                                <IonLabel>{element.fields.Title}</IonLabel>
                                <IonIcon
                                    color="primary"
                                    icon={create}
                                    itemType="edit"
                                    id={element.id}
                                    onClick={(e) => edVideo(e)}
                                />
                                <IonIcon color="danger" icon={trash} itemType="delete" id={element.id} onClick={(e) => edVideo(e)} />
                            </IonItem> 
                            );
                        } else {
                            return (
                                <IonItem key={index} id={element.id}>
                                    <IonLabel>{element.fields.email}</IonLabel>
                                    <IonIcon color="primary" icon={create} />
                                    <IonIcon color="danger" icon={trash} />
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