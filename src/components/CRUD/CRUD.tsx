import { IonItem, IonList, IonLabel, IonIcon, IonModal, IonContent, IonTitle, IonToolbar, IonButtons, IonButton } from "@ionic/react";
import { useState, useRef } from "react";
import React from 'react';
import axios from 'axios';
import { env } from '../../pages/env/env';
import { create, trash } from "ionicons/icons";
import './CRUD.css';
import FORM from "../Form/Form";

const CRUD = (video: any) => {
    const [ listItems, setListItems ] = useState<any>([]);

    const modal = useRef<HTMLIonModalElement | null>(null);

    function dismiss() {
        console.log('close')
        modal.current?.dismiss();
    }

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

    const edVideo = (e: any) => {
        console.log(e.target.id);
        console.log(e.target.itemType);
        if(e.target.itemType === 'edit'){
            
        }
        if(e.target.itemType === 'delete'){
            
        }
        
    }

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
                                <IonIcon color="primary" icon={create} itemType="edit" id={element.id} onClick={(e) => edVideo(e)} />
                                <IonModal id="modal" ref={modal} trigger={element.id}>
                                    <IonContent>
                                        <IonToolbar>
                                            <IonTitle>Modal</IonTitle>
                                            <IonButtons slot="end">
                                                <IonButton color="dark" onClick={() => dismiss()}>Close</IonButton>
                                            </IonButtons>
                                        </IonToolbar>
                                        <IonList>
                                            {/* <IonItem>
                                                <IonAvatar slot="start">
                                                    <IonImg src="https://i.pravatar.cc/300?u=b" />
                                                </IonAvatar>
                                                <IonLabel>
                                                    <h2>Connor Smith</h2>
                                                    <p>Sales Rep</p>
                                                </IonLabel>
                                            </IonItem>
                                            <IonItem>
                                                <IonAvatar slot="start">
                                                    <IonImg src="https://i.pravatar.cc/300?u=a" />
                                                </IonAvatar>
                                                <IonLabel>
                                                    <h2>Daniel Smith</h2>
                                                    <p>Product Designer</p>
                                                </IonLabel>
                                            </IonItem>
                                            <IonItem>
                                                <IonAvatar slot="start">
                                                    <IonImg src="https://i.pravatar.cc/300?u=d" />
                                                </IonAvatar>
                                                <IonLabel>
                                                    <h2>Greg Smith</h2>
                                                    <p>Director of Operations</p>
                                                </IonLabel>
                                            </IonItem>
                                            <IonItem>
                                                <IonAvatar slot="start">
                                                    <IonImg src="https://i.pravatar.cc/300?u=e" />
                                                </IonAvatar>
                                                <IonLabel>
                                                    <h2>Zoey Smith</h2>
                                                    <p>CEO</p>
                                                </IonLabel>
                                            </IonItem> */}
                                            <FORM element={element} type={video}/>
                                        </IonList>
                                    </IonContent>
                                </IonModal>
                                <IonIcon color="danger" icon={trash} itemType="delete" id={element.id} onClick={(e) => edVideo(e)} />
                            </IonItem>
                        );
                    })
                }
            </IonList>
        </>
    );
};

export default CRUD;