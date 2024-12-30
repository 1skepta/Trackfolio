import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addApplication } from "../store/applicationSlice";
import { useNavigate } from "react-router-dom";

function AddApplicationForm() {
  const navigate = useNavigate();

  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [dateApplied, setDateApplied] = useState("");
  const [status, setStatus] = useState("");
  const [jobLocation, setJobLocation] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApplication = {
      id: Date.now(),
      jobTitle,
      companyName,
      dateApplied,
      status,
      jobLocation,
    };

    dispatch(addApplication(newApplication));

    setJobTitle("");
    setCompanyName("");
    setDateApplied("");
    setJobLocation("");
    setStatus("");

    alert("New Application Added");

    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Add Job Application
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-blue-600 font-semibold mb-2"
              htmlFor="jobTitle"
            >
              Job Title
            </label>
            <input
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              type="text"
              required
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
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
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
              value={dateApplied}
              onChange={(e) => setDateApplied(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <span className="block text-blue-600 font-semibold mb-2">
              Status
            </span>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="Applied"
                  checked={status === "Applied"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="text-blue-600 focus:ring focus:ring-blue-300 cursor-pointer"
                />
                <span>Applied</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="Interview"
                  checked={status === "Interview"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="text-blue-600 focus:ring focus:ring-blue-300 cursor-pointer"
                />
                <span>Interview</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="Offer"
                  checked={status === "Offer"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="text-blue-600 focus:ring focus:ring-blue-300 cursor-pointer"
                />
                <span>Offer</span>
              </label>
              <label className="items-center space-x-2 cursor-pointer hidden">
                <input
                  type="radio"
                  name="status"
                  value="Rejected"
                  checked={status === "Rejected"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="text-blue-600 focus:ring focus:ring-blue-300 cursor-pointer "
                />
                <span>Rejected</span>
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
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
              required
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
