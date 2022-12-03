import React from 'react';
import './Tab4.css';
import { IonCol, IonGrid, IonRow, IonContent, IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

export default class Grid extends React.Component {



    render (){
        return(
            <>
                <IonPage>
                    <IonContent fullscreen>
                        <div className="container">
                            <IonGrid>
                                <IonRow>
                                    <IonCol>
                                        <IonCard>
                                            {/* <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" /> */}
                                            <iframe src="https://www.youtube.com/embed/ndi9yMrak8Q" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol>
                                        <IonCard>
                                            <IonCardHeader>
                                                <IonCardTitle>Card Title</IonCardTitle>
                                                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                            </IonCardHeader>

                                            <IonCardContent>
                                                Here's a small text description for the card content. Nothing more, nothing less.
                                            </IonCardContent>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </div>
                    </IonContent>
                </IonPage>
            </>
        )
    }
};