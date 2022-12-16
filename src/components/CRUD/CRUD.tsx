import { IonItem, IonList, IonLabel, IonFab, IonFabButton, IonIcon, IonModal, IonContent, IonToolbar, IonTitle, IonButtons, IonButton } from "@ionic/react";
import { add, closeOutline } from "ionicons/icons";
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { env } from '../../pages/env/env';
import './CRUD.css';
import MODAL from "../Modal/Modal";
import Create from "../Form/CreateForm";

const CRUD = (video: any) => {
    const [ listItems, setListItems ] = useState<any>([]);
    const modal = useRef<HTMLIonModalElement>(null);
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

    // const remove = (e: any) => {
    //     console.log(e)
    // }

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
                            <IonItem lines="full" style={{ pointerEvents: 'none' }} key={index} id={element.id}>
                                <IonLabel>{label}</IonLabel>
                                <MODAL element={element} type={video} />
                                {/* <IonIcon color="danger" icon={trash} itemType="delete" onClick={(e) => remove(e)} /> */}
                            </IonItem>
                        );
                    })
                }
            </IonList>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonFabButton id="create">
                    <IonIcon icon={add} />
                </IonFabButton>
                 <IonModal ref={modal} id="modal" trigger="create">
                    <IonContent>
                        <IonToolbar>
                            <IonTitle>Add {video.video === true ? 'video': 'user'}</IonTitle>
                            <IonButtons slot="end">
                                <IonButton color="light" onClick={() => modal.current?.dismiss()}>
                                    <IonIcon slot="icon-only" icon={closeOutline}  onClick={() => modal.current?.dismiss()} />
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                        <IonList>
                            <Create type={video} />
                        </IonList>
                    </IonContent>
                </IonModal>
            </IonFab>
            {/* <Create type={video} /> */}
        </>
    );
};

export default CRUD;