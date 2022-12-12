import React, { useState } from "react";
import { IonLabel, IonSegment, IonSegmentButton, IonPage, IonContent, IonIcon } from "@ionic/react";
import CRUD from "../../components/CRUD/CRUD";
import { personCircleOutline, videocamOutline } from "ionicons/icons";

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
                        <IonIcon icon={videocamOutline} />
                        <IonLabel>Vidoes</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton
                        value="user"
                        onClick={() => {
                            setVideoActive(false);
                            setUserActive(true);
                        }}
                    >
                        <IonIcon icon={personCircleOutline} />
                        <IonLabel>Users</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
                <IonContent>
                    <CRUD video={videoActive} user={userActive} />
                </IonContent>
            </IonPage>
            
        </>
    );
};

export default AdminIndex;