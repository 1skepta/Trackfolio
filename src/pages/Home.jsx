import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
} from "chart.js";
import ApplicationDetail from "../components/ApplicationDetail";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale);

function Home() {
  const applications = useSelector((state) => state.applications.applications);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const statusCount = applications.reduce((acc, app) => {
    acc[app.status] = (acc[app.status] || 0) + 1;
    return acc;
  }, {});

  useEffect(() => {
    if (selectedApplication) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedApplication]);

  const chartData = {
    labels: Object.keys(statusCount),
    datasets: [
      {
        label: "Applications by Status",
        data: Object.values(statusCount),
        backgroundColor: ["#3B82F6", "#F59E0B", "#EF4444", "#10B981"],
        borderColor: ["#2563EB", "#D97706", "#DC2626", "#047857"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} applications`;
          },
        },
      },
    },
  };

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const handleApplicationClick = (application) => {
    setSelectedApplication(application);
  };

  const handleCloseDetail = () => {
    setSelectedApplication(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 sm:text-4xl absolute left-1/2 transform -translate-x-1/2">
          Dashboard
        </h2>
        <img
          src={theme === "light" ? moon : sun}
          alt="theme logo"
          onClick={() => dispatch(toggleTheme())}
          className={`cursor-pointer ml-auto ${
            theme === "light" ? "filter invert" : ""
          }`}
        />
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 sm:p-8 mb-6">
        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4 text-center sm:text-left">
          Application Status Analytics
        </h3>
        <div className="w-full sm:w-3/4 mx-auto">
          <Pie data={chartData} options={chartOptions} />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 sm:p-8">
        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4 text-center sm:text-left">
          Applications List
        </h3>
        <ul className="space-y-6">
          {applications.map((application, index) => (
            <li
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 cursor-pointer"
              onClick={() => handleApplicationClick(application)}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1 sm:flex sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                      {application.jobTitle}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {application.companyName}
                    </p>
                  </div>
                  <div className="sm:text-right mt-2 sm:mt-0">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Date Applied
                    </span>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {application.dateApplied}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    application.status === "Applied"
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                      : application.status === "Interview"
                      ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400"
                      : application.status === "Rejected"
                      ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400"
                      : "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                  }`}
                >
                  {application.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedApplication && (
        <div className="fixed inset-0 flex justify-center items-center z-20">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-2xl">
            <ApplicationDetail
              application={selectedApplication}
              onClose={handleCloseDetail}
            />
          </div>
        </div>
      )}

      {selectedApplication && (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      )}

      <div className="flex justify-end mb-6 lg:justify-center">
        <button className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition mt-10">
          <Link to="/"> Add New Application</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
