import { IonItem, IonList, IonLabel, IonIcon, useIonAlert } from "@ionic/react";
import { useState } from "react";
import React from 'react';
import axios from 'axios';
import { env } from '../../pages/env/env';
import { create, trash } from 'ionicons/icons';

const CrudVideos = () => {
    
    const [ listItems, setListItems ] = useState<any>([]);
    const [presentAlert] = useIonAlert();

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
                    // eslint-disable-next-line
                    listItems.map((element: any, index: any) => {
                        if(element.fields.active === "Active"){
                            return(
                                <IonItem key={index} id={element.id}>
                                    <IonLabel>{element.fields.Title}</IonLabel>
                                    <IonIcon
                                        color="primary"
                                        icon={create}
                                        itemType="edit"
                                        id={element.id}
                                        onClick={() => 
                                            presentAlert({
                                                header: 'Edit',
                                                buttons: ['Update'],
                                                inputs: [
                                                    {
                                                        label: 'Ttile',
                                                        placeholder: 'Title',
                                                    },
                                                    {
                                                        label: 'URL',
                                                        placeholder: 'url',
                                                    },
                                                    {
                                                        label: 'Active',
                                                        type: 'checkbox',
                                                        placeholder: 'Active'
                                                    }
                                                ],
                                            })
                                        }
                                    />
                                    <IonIcon color="danger" icon={trash} itemType="delete" id={element.id} onClick={(e) => edVideo(e)} />
                                </IonItem> 
                            );
                        }
                    })
                }
            </IonList>
        </>
    );
};

export default CrudVideos;