import React, { useRef } from "react";
import { IonIcon, IonModal, IonContent, IonToolbar, IonTitle, IonButtons, IonButton, IonList } from "@ionic/react"
import { create, closeOutline } from "ionicons/icons";
import FORM from "../Form/Form";

const MODAL = (props: any) => {
    
    const modal = useRef<HTMLIonModalElement | null>(null);

    function dismiss() {
        modal.current?.dismiss();
    }

    return (
        <>
            <IonIcon color="primary" style={{ pointerEvents: 'initial', heigth: '100%' }} icon={create} id={props.element.id} />
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
        </>
    )
}

export default MODAL;