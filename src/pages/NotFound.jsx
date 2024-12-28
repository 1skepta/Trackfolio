import { Link } from "react-router-dom";
import notfound from "../assets/notfound.jpg";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-center p-4">
      <div className="max-w-lg">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Oops! Page Not Found
        </p>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist.
        </p>
        <img
          src={notfound}
          alt="Page not found illustration"
          className="w-1/2 rounded mb-6 mx-auto"
        />
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
