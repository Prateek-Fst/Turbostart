import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Job Portal</IonTitle>
        <IonButtons slot="end">
          <IonButton routerLink="/">Home</IonButton>
          <IonButton routerLink="/about">About</IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Navbar;