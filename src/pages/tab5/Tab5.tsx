import React from 'react';
import './Tab5.css';
// import { IonCol, IonGrid, IonRow, IonContent, IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonCol, IonGrid, IonRow, IonContent, IonPage, IonToolbar, IonTitle, IonHeader, IonButton } from '@ionic/react';
import { videos }  from './videos';
import { video }  from './data';

export default class Grid extends React.Component {
    test() {
        console.log(videos);    
    };
    
    render (){
        return(
            <>
                {this.test()}
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>
                                English Videos
                                <a className="inline" href="/login">Sign In</a>
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent fullscreen>
                        <div className="container">
                            <IonGrid>
                                <IonRow>
                                {video.map((videos, index) => {
                                    return(
                                            <IonCol key={index}>
                                                <iframe src={videos.src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                                    
                                            </IonCol>
                                    );
                                })}
                                {/* {
                                    video.forEach((element: any) => {
                                        var url = element.fields;
                                        return(
                                            <IonCol>
                                                <iframe src={url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                                    
                                            </IonCol>
                                        );
                                    })
                                } */}
                                </IonRow>
                            </IonGrid>
                        </div>
                    </IonContent>
                </IonPage>
                
            </>
        )
    }
};