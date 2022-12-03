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
                                            {/* <IonCardHeader>
                                                <IonCardTitle></IonCardTitle>
                                                <IonCardSubtitle></IonCardSubtitle>
                                            </IonCardHeader> */}

                                            <IonCardContent>
                                                <iframe src="https://www.youtube.com/embed/ndi9yMrak8Q" title="7.11.2022. 9 Memory Poem. THE RIVER. READING PRACTICE." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                            </IonCardContent>
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