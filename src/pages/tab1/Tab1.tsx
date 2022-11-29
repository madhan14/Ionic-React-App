import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../../components/ExploreContainer';
import RegisterComponents from '../../components/Register/RegisterComponent'; 
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home page</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Home page" /> */}
        <RegisterComponents />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
