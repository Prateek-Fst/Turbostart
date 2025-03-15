import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-tight hover:text-purple-200 transition-colors">
          Job Portal
        </h1>
        <div className="space-x-6">
          <Link 
            className="px-4 py-2 rounded-md hover:bg-purple-700 transition-all duration-300" 
            to="/"
          >
            Home
          </Link>
          <Link 
            className="px-4 py-2 rounded-md hover:bg-purple-700 transition-all duration-300" 
            to="/about"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;