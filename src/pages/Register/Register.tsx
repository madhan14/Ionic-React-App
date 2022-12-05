import { IonContent, IonPage, } from '@ionic/react';
import RegisterComponents from '../../components/Register/RegisterComponent'; 
import './Register.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <RegisterComponents />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
