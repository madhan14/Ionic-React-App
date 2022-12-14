import React from "react";
import { IonIcon, IonModal, IonContent, IonToolbar, IonTitle, IonButtons, IonButton, IonList } from "@ionic/react"
import { create } from "ionicons/icons";
import { useRef } from "react";
import FORM from "../Form/Form";

const MODAL = (props: any) => {

    const modal = useRef<HTMLIonModalElement | null>(null);

    function dismiss() {
        modal.current?.dismiss();
    }

    return (
        <>
            <IonIcon color="primary" icon={create} itemType="edit" id={props.element.id} />
            <IonModal id="modal" ref={modal} trigger={props.element.id}>
                <IonContent>
                    <IonToolbar>
                        <IonTitle>Modal</IonTitle>
                        <IonButtons slot="end">
                            <IonButton color="dark" onClick={() => dismiss()}>Close</IonButton>
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