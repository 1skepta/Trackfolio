import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
} from "chart.js";
import ApplicationDetail from "./ApplicationDetail";

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale);

function Dashboard() {
  const applications = useSelector((state) => state.applications.applications);
  const [filteredApplications, setFilteredApplications] =
    useState(applications);
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedApplication, setSelectedApplication] = useState(null);

  const statusCount = filteredApplications.reduce((acc, app) => {
    acc[app.status] = (acc[app.status] || 0) + 1;
    return acc;
  }, {});

  useEffect(() => {
    if (statusFilter === "All") {
      setFilteredApplications(applications);
    } else {
      setFilteredApplications(
        applications.filter((app) => app.status === statusFilter)
      );
    }
  }, [statusFilter, applications]);

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

  const handleApplicationClick = (application) => {
    setSelectedApplication(application);
  };

  const handleCloseDetail = () => {
    setSelectedApplication(null);
  };

  const handleFilterClick = (status) => {
    if (statusFilter === status) {
      setStatusFilter("All");
    } else {
      setStatusFilter(status);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col p-6">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center sm:text-4xl">
        Dashboard
      </h2>

      <div className="flex flex-wrap justify-between items-center mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <label
            htmlFor="statusFilter"
            className="text-lg font-medium text-gray-700 mr-2 mb-2 sm:mb-0"
          >
            Filter by Status:
          </label>
          <div className="flex flex-wrap space-x-4 sm:space-x-6 justify-center">
            {["All", "Applied", "Interview", "Offer", "Rejected"].map(
              (status) => (
                <span
                  key={status}
                  onClick={() => handleFilterClick(status)}
                  className={`cursor-pointer text-lg font-medium text-gray-700 
            ${statusFilter === status ? "line-through" : ""}
            mb-2 sm:mb-0`}
                >
                  {status} ({statusCount[status] || 0})
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 mb-6">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center sm:text-left">
          Application Status Analytics
        </h3>
        <div className="w-full sm:w-3/4 mx-auto">
          <Pie data={chartData} options={chartOptions} />
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 sm:p-8">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center sm:text-left">
          Applications List
        </h3>
        <ul className="space-y-6">
          {filteredApplications.map((application, index) => (
            <li
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200 cursor-pointer"
              onClick={() => handleApplicationClick(application)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-600">
                    {application.jobTitle}
                  </h3>
                  <p className="text-gray-600">{application.companyName}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    Date Applied: {application.dateApplied}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    application.status === "Applied"
                      ? "bg-blue-100 text-blue-600"
                      : application.status === "Interview"
                      ? "bg-yellow-100 text-yellow-600"
                      : application.status === "Rejected"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
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
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
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
    </div>
  );
}

export default Dashboard;
