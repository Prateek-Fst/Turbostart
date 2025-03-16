import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchJobDetails } from '../store/jobsSlice';
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

const JobDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedJob, loading } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobDetails(id));
  }, [dispatch, id]);

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding content-with-offset">
        <IonCard>
          {loading ? (
            <p>Loading job details...</p>
          ) : (
            <>
              <IonCardHeader>
                <IonCardTitle>{selectedJob?.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>{selectedJob?.body}</p>
                <IonButton expand="block" routerLink={`/apply/${id}`}>
                  Apply Now
                </IonButton>
              </IonCardContent>
            </>
          )}
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default JobDetails;