import { IonContent, IonPage } from '@ionic/react';
import LoginComponent from '../../components/Login/LoginComponent';
import './Login.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <LoginComponent />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
