import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

const About = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>About Job Portal</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              This is a modern job portal application built with Ionic, React, and Redux.
              Our platform connects talented individuals with exciting career opportunities,
              featuring a sleek interface and intuitive user experience.
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;