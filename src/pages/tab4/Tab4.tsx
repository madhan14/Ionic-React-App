import React from 'react';
import './Tab4.css';
// import { IonCol, IonGrid, IonRow, IonContent, IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonCol, IonGrid, IonRow, IonContent, IonPage } from '@ionic/react';
import { video } from './data';

export default class Grid extends React.Component {

    // test() {
    //     return (
    //         video.map((videos) => {
    //             return (
    //                 console.log(videos.src)
    //             );
    //         })
    //     );
    // };
    
    render (){
        return(
            <>
                {/* {this.test()} */}
                <IonPage>
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

                                </IonRow>
                            </IonGrid>
                        </div>
                    </IonContent>
                </IonPage>
                
            </>
        )
    }
};