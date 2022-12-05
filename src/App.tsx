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
import Tab1 from './pages/tab1/Tab1';
import Tab2 from './pages/tab2/Tab2';
import Tab3 from './pages/tab3/Tab3';
import Tab4 from './pages/tab4/Tab4';
import Tab5 from './pages/tab5/Tab5';
import Tab6 from './pages/tab6/Tab6';
import Index from './pages/Index/Index';

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
        <Route exact path="/tab4">
          <Index />
        </Route>
        <Route exact path="/register">
          <Tab1 />
        </Route>
        <Route exact path="/login">
          <Tab2 />
        </Route>
        <Route exact path="/tab3">
          <Tab3 />
        </Route>
        <Route exact path="/listVideos">
          <Tab5 />
        </Route>
        <Route exact path="/addVideos">
          <Tab6 />
        </Route>
        <Route exact path="/">
          <Tab4 />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
