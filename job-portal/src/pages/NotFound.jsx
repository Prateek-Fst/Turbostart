const NotFound = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="text-center bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-4xl font-extrabold text-red-600 mb-4">404</h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h3>
          <p className="text-gray-600 max-w-md">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="mt-6 inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  };
  
  export default NotFound;