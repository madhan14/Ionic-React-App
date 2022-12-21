import { IonContent, IonHeader, IonMenu, IonToolbar } from '@ionic/react';


const Menu = () => {

    return (

        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>Menu</IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            Test
          </IonContent>
        </IonMenu>

    )
}

export default Menu;