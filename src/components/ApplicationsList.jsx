import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ApplicationDetail from "./ApplicationDetail";

function ApplicationsList() {
  const applications = useSelector((state) => state.applications.applications);
  const [selectedApplication, setSelectedApplication] = useState(null);

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

  const handleApplicationClick = (application) => {
    setSelectedApplication(application);
  };

  const handleCloseDetail = () => {
    setSelectedApplication(null);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative">
      {/* Overlay */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      )}

      {/* Main content */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8 border border-gray-200 relative z-0">
        <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Applications List
        </h1>
        <ul className="space-y-6">
          {applications.map((application, index) => (
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
    </div>
  );
}

export default ApplicationsList;
