import { Link } from "react-router-dom";
import notfound from "../assets/notfound.jpg";
import { useSelector } from "react-redux";

const NotFound = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } p-4`}
    >
      <div className="w-full max-w-lg text-center">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
        <p className="text-2xl font-semibold mb-4">Oops! Page Not Found</p>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist. Please check the URL or
          return to the home page.
        </p>
        <img
          src={notfound}
          alt="Page not found illustration"
          className="w-1/2 rounded mb-6 mx-auto"
        />
        <Link
          to="/home"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
