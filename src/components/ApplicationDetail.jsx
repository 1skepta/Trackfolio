import React from "react";

function ApplicationDetail({ application, onClose }) {
  return (
    <div className="mt-8 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Detailed Application Information
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Job Title:</h3>
          <p>{application.jobTitle}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Company Name:</h3>
          <p>{application.companyName}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Date Applied:</h3>
          <p>{application.dateApplied}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Status:</h3>
          <p>{application.status}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Job Location:</h3>
          <p>{application.jobLocation}</p>
        </div>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
}

export default ApplicationDetail;
