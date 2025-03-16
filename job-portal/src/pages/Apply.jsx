import { useParams } from 'react-router-dom';
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton } from '@ionic/react';

const Apply = () => {
  const { id } = useParams();

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding content-with-offset">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Apply for Job ID: {id}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form>
              <IonItem>
                <IonInput type="text" placeholder="Your Name" />
              </IonItem>
              <IonItem>
                <IonInput type="email" placeholder="Your Email" />
              </IonItem>
              <IonButton expand="block" type="submit">
                Submit Application
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Apply;