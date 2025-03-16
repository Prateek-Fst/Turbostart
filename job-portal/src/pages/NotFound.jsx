import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-text-center">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle color="danger">404</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <h3>Page Not Found</h3>
            <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
            <IonButton routerLink="/">Back to Home</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default NotFound;