import React from 'react';
import './Tab5.css';
import { IonCol, IonGrid, IonRow, IonContent, IonPage, IonToolbar, IonTitle, IonHeader } from '@ionic/react';
import { datas }  from './videos';

export default class Grid extends React.Component {
    // test() {
    //     datas.forEach(element => {
    //         console.log(element);
    //     });  
    // };
    
    render (){
        return(
            <>
                {/* {this.test()} */}
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
                                {
                                    datas.map((element, index) => {
                                        var url = element.url;
                                        return(
                                            <IonCol key={index}>
                                                <iframe src={url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                                    
                                            </IonCol>
                                        );
                                    })
                                }
                                </IonRow>
                            </IonGrid>
                        </div>
                    </IonContent>
                </IonPage>
                
            </>
        )
    }
};