// import { Redirect, Route } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {
  IonApp,
  // IonIcon,
  // IonLabel,
  IonRouterOutlet,
  // IonTabBar,
  // IonTabButton,
  // IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import { home, personCircle } from 'ionicons/icons';
import Index from './pages/Index/Index';
import Index1 from './pages/Index/Index1';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ModalForm from './pages/ModalForm/ModalForm';
import AddVideos from './pages/AddVideos/AddVideos';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Home">
            <Tab1 />
          </Route>
          <Route exact path="/profile">
            <Tab2 />
          </Route>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={personCircle} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs> */}
      <IonRouterOutlet>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/Index1">
          <Index1 />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/ModalForm">
          <ModalForm />
        </Route>
        <Route exact path="/addVideos">
          <AddVideos />
        </Route>

        {/* <Route exact path="/listVideos">
          <Tab5 />
        </Route> */}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
