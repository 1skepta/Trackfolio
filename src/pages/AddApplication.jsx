import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addApplication } from "../store/applicationSlice";
import { useNavigate } from "react-router-dom";

function AddApplication() {
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

  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 lg:shadow-md lg:rounded-lg lg:border lg:border-gray-200 dark:border-gray-600">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
          Add Job Application
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-blue-600 dark:text-blue-400 font-semibold mb-2"
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
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <label
              className="block text-blue-600 dark:text-blue-400 font-semibold mb-2"
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
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              className="block text-blue-600 dark:text-blue-400 font-semibold mb-2"
              htmlFor="dateApplied"
            >
              Date Applied
            </label>
            <input
              type="date"
              value={dateApplied}
              onChange={(e) => setDateApplied(e.target.value)}
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>

          <div>
            <span className="block text-blue-600 dark:text-blue-400 font-semibold mb-2">
              Status
            </span>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer dark:text-gray-100">
                <input
                  type="radio"
                  name="status"
                  value="Applied"
                  checked={status === "Applied"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="text-blue-600 focus:ring focus:ring-blue-300 cursor-pointer dark:text-blue-400"
                />
                <span>Applied</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer dark:text-gray-100">
                <input
                  type="radio"
                  name="status"
                  value="Interview"
                  checked={status === "Interview"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="text-blue-600 focus:ring focus:ring-blue-300 cursor-pointer dark:text-blue-400"
                />
                <span>Interview</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer dark:text-gray-100">
                <input
                  type="radio"
                  name="status"
                  value="Offer"
                  checked={status === "Offer"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="text-blue-600 focus:ring focus:ring-blue-300 cursor-pointer dark:text-blue-400"
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
                  className="text-blue-600 focus:ring focus:ring-blue-300 cursor-pointer dark:text-blue-400"
                />
                <span>Rejected</span>
              </label>
            </div>
          </div>
          <div>
            <label
              className="block text-blue-600 dark:text-blue-400 font-semibold mb-2"
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
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <button
              type="submit"
              className="cursor-pointer w-full bg-blue-600 dark:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 dark:hover:bg-blue-600"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddApplication;
