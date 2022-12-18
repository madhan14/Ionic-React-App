import React, { useRef } from "react";
import { IonIcon, IonModal, IonContent, IonToolbar, IonTitle, IonButtons, IonButton, IonList, useIonAlert } from "@ionic/react"
import { create, closeOutline, trash } from "ionicons/icons";
import FORM from "../Form/Form";

const MODAL = (props: any) => {
    
    const modal = useRef<HTMLIonModalElement | null>(null);
    const [deleteAlert] = useIonAlert();

    const removeItem = () => {
        deleteAlert({
            header: 'Are you sure, You want to delete?',
            buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => {
                    // setHandlerMessage('Alert canceled');
                  },
                },
                {
                  text: 'OK',
                  role: 'confirm',
                  handler: () => {
                    // setHandlerMessage('Alert confirmed');
                  },
                },
              ],
        })
    }

    function dismiss() {
        modal.current?.dismiss();
    }

    return (
        <>
            <IonButton fill="clear">
                <IonIcon slot="icon-only" color="primary" style={{ pointerEvents: 'initial', heigth: '100%' }} icon={create} id={props.element.id} />
            </IonButton>
            <IonModal id="modal" ref={modal} trigger={props.element.id}>
                <IonContent>
                    <IonToolbar>
                        <IonTitle>Edit</IonTitle>
                        <IonButtons slot="end">
                            <IonButton color="dark" onClick={() => dismiss()}>
                                <IonIcon icon={closeOutline} />
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                    <IonList>
                        <FORM element={props.element} type={props.type}/>
                    </IonList>
                </IonContent>
            </IonModal>
            <IonButton fill="clear">
                <IonIcon color="danger" onClick={()=> {removeItem()}} slot="icon-only" style={{ pointerEvents: 'initial', height: '100%' }} icon={trash} id={props.element.id} />
            </IonButton>
        </>
    )
}

export default MODAL;