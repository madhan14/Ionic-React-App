import { IonContent, IonList, IonPage } from '@ionic/react';    
import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import {Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Charts: React.FC = () => {

    const pieChartData = {
        labels: ['Active', 'InActive'],
        datasets: [
            {
                label: 'Videos',
                data: [4, 2],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                ],
            }
        ],
        borderWidth: 1
    };
    
    return (
    <IonPage>
        <IonContent class="">
            <IonList>
                <Pie data={pieChartData} />
            </IonList>
            <IonList>
                <Bar data={pieChartData} />
            </IonList>
            <IonList>
                <Line data={pieChartData} />
            </IonList>
        </IonContent>
    </IonPage>
    );
    };
    
    export default Charts;