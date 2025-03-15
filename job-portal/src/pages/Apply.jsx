import { useParams } from "react-router-dom";

const Apply = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Apply for Job ID: {id}
        </h2>
        <form className="space-y-6">
          <div>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 font-medium"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Apply;