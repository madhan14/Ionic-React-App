import React from 'react';
import './Tab4.css';
import { IonCol, IonGrid, IonRow, IonContent, IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { video } from './data';

export default class Grid extends React.Component {

    test() {
        return (
            video.map((videos, key) => {
                console.log(key)
                console.log(videos.name)
                console.log(videos.src)
            })
        );
    };
    
    render (){
        
        return(
            <>
                {/* {this.test()} */}
                <IonPage>
                    <IonContent fullscreen>
                        <div className="container">
                            <IonGrid>
                                <IonRow>
                                {video.map((videos, key) => {
                                    return(
                                        <> 
                                            <IonCol>
                                                <IonCard >
                                                    <iframe src={videos.src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

                                                    <IonCardHeader>
                                                        <IonCardTitle>{key}</IonCardTitle>
                                                        <IonCardSubtitle>{videos.name}</IonCardSubtitle>
                                                    </IonCardHeader>
                                                </IonCard>
                                            </IonCol>
                                        </>
                                    );
                                })}

                                </IonRow>
                            </IonGrid>
                        </div>
                    </IonContent>
                </IonPage>
                
            </>
        )
    }
};