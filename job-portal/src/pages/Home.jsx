import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../store/jobsSlice';
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <h2>Job Listings</h2>
        {loading ? (
          <p>Loading jobs...</p>
        ) : (
          jobs.map(job => (
            <IonCard key={job.id}>
              <IonCardHeader>
                <IonCardTitle>{job.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>{job.body.substring(0, 100)}...</p>
                <IonButton fill="clear" routerLink={`/job/${job.id}`}>
                  View Details
                </IonButton>
              </IonCardContent>
            </IonCard>
          ))
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;