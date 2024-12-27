import React from "react";

function AddApplicationForm() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Add Job Application
        </h1>
        <form className="space-y-6">
          <div>
            <label
              className="block text-blue-600 font-semibold mb-2"
              htmlFor="jobTitle"
            >
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              placeholder="Enter job title"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label
              className="block text-blue-600 font-semibold mb-2"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              placeholder="Enter company name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label
              className="block text-blue-600 font-semibold mb-2"
              htmlFor="dateApplied"
            >
              Date Applied
            </label>
            <input
              type="date"
              id="dateApplied"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <span className="block text-blue-600 font-semibold mb-2">
              Status
            </span>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  value="applied"
                  className="text-blue-600 focus:ring focus:ring-blue-300"
                />
                <span>Applied</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  value="interview"
                  className="text-blue-600 focus:ring focus:ring-blue-300"
                />
                <span>Interview</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  value="offer"
                  className="text-blue-600 focus:ring focus:ring-blue-300"
                />
                <span>Offer</span>
              </label>
            </div>
          </div>
          <div>
            <label
              className="block text-blue-600 font-semibold mb-2"
              htmlFor="jobLocation"
            >
              Job Location
            </label>
            <input
              type="text"
              id="jobLocation"
              placeholder="Enter job location"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <button
              type="submit"
              className="cursor-pointer w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddApplicationForm;
