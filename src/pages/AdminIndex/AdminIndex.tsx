import React, { useState } from "react";
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonSegment, IonSegmentButton, IonPage, IonContent } from "@ionic/react";
import { Route } from 'react-router-dom';
import ModalForm from '../ModalForm/ModalForm';
import CRUD from "../../components/Crud/Crud";


const AdminIndex: React.FC = () => {
    const [videoActive, setVideoActive] = useState<boolean>(true);
    const [userActive, setUserActive] = useState<boolean>(false);
    return (
        <>
            <IonPage>
                <IonSegment value={videoActive ? "video": "user"}>
                    <IonSegmentButton
                        value="video"
                        onClick={() => {
                            setVideoActive(true);
                            setUserActive(false);
                        }}
                    >
                        <IonLabel>Vidoes</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton
                        value="user"
                        onClick={() => {
                            setVideoActive(false);
                            setUserActive(true);
                        }}
                    >
                        <IonLabel>Users</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
                <IonContent>
                    {videoActive ? ( <CRUD video={videoActive} user={userActive} />) : ( <CRUD video={videoActive} user={userActive}/> )}
                </IonContent>
            </IonPage>
            
        </>
    );
};

export default AdminIndex;