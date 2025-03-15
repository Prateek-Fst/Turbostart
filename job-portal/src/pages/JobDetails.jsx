import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchJobDetails } from "../store/jobsSlice";

const JobDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedJob, loading } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobDetails(id));
  }, [dispatch, id]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        {loading ? (
          <div className="text-center text-gray-600 animate-pulse">Loading job details...</div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900">{selectedJob?.title}</h2>
            <p className="text-gray-600 leading-relaxed">{selectedJob?.body}</p>
            <Link 
              to={`/apply/${id}`} 
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 font-medium"
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails;