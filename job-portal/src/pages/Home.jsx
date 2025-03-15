import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../store/jobsSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Job Listings</h2>
        {loading ? (
          <div className="text-center text-gray-600 animate-pulse">Loading jobs...</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {jobs.map(job => (
              <div 
                key={job.id} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-gray-600 line-clamp-3 mb-4">{job.body}</p>
                <Link 
                  className="text-purple-600 hover:text-purple-800 font-medium transition-colors" 
                  to={`/job/${job.id}`}
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;