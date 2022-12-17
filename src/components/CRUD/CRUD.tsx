import { IonItem, IonList, IonLabel, IonFab, IonFabButton, IonIcon, IonModal,
    IonContent, IonToolbar, IonTitle, IonButtons, IonButton, IonThumbnail } from "@ionic/react";
import { add, closeOutline, logoYoutube, personAdd, personCircle} from "ionicons/icons";
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

    return (
        <>
            <IonList>
                {
                    
                    listItems?.map((element: any, index: any) => {
                        var label, logo, logoColor, deletType;
                        if(video.video === true){
                            label = element.fields.Title;
                            logo = logoYoutube;
                            logoColor = "danger";
                            deletType = "videoDelete";
                        }else{
                            label = element.fields.email;
                            logo = personCircle;
                            logoColor = "primary";
                            deletType = "userDelete";
                        }
                        return(
                            <IonItem lines="full" style={{ pointerEvents: 'none' }} key={index} id={element.id}>
                                <IonThumbnail slot="start">
                                    <IonIcon color={logoColor} style={{ width: '100%', height: '100%' }} icon={logo} />
                                </IonThumbnail>
                                <IonLabel>{label}</IonLabel>
                                <MODAL element={element} type={video} />
                            </IonItem>
                        );
                    })
                }
            </IonList>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonFabButton id="create">
                    <IonIcon icon={video.video==true? add : personAdd} />
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
        </>
    );
};

export default CRUD;