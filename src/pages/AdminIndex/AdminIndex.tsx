import React, { useState } from "react";
import { IonLabel, IonSegment, IonSegmentButton, IonPage, IonContent } from "@ionic/react";
import CrudVideos from "../../components/CrudVideos/CrudVideos";
import CrudUser from "../../components/CrudUsers/CrudUsers";

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
                    { userActive ? <CrudUser /> : <CrudVideos /> }
                </IonContent>
            </IonPage>
            
        </>
    );
};

export default AdminIndex;