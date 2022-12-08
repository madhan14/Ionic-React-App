import React from "react";
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from "@ionic/react";
import { home, personCircle, videocam } from 'ionicons/icons';
import { Route } from 'react-router-dom';
import ModalForm from '../ModalForm/ModalForm';

const AdminIndex: React.FC = () => {
    return (
        <>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/addVideo">
                        {/* <ModalForm /> */}
                    </Route>
                    <Route exact path="/editVideo">
                        {/* <ModalForm /> */}
                    </Route>
                    <Route exact path="/addUser">
                        {/* <ModalForm /> */}
                    </Route>
                    <Route exact path="/editUser">
                        {/* <ModalForm /> */}
                    </Route>
                </IonRouterOutlet>
            
                <IonTabBar slot="bottom">
                    <IonTabButton tab="Add Video" href="/addVideo">
                        <IonIcon icon={videocam} />
                        <IonLabel>Add Video</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="Edit Videos" href="/editVideo">
                        <IonIcon icon={videocam} />
                        <IonLabel>Edit Videos</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="Add User" href="/addUser">
                        <IonIcon icon={personCircle} />
                        <IonLabel>Add User</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="Edit Users" href="/editUser">
                        <IonIcon icon={personCircle} />
                        <IonLabel>Edit Users</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs> 
        </>
    );
};

export default AdminIndex;