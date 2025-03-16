import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from './store/store';
import Home from './pages/Home';
import JobDetails from './pages/JobDetails';
import Apply from './pages/Apply';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

setupIonicReact();

function App() {
  return (
    <Provider store={store}>
      <IonApp>
        <IonReactRouter>
          <Navbar className="pb-10"/>
          <IonRouterOutlet>
            <Route exact path="/" component={Home} />
            <Route path="/job/:id" component={JobDetails} />
            <Route path="/apply/:id" component={Apply} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </Provider>
  );
}

export default App;