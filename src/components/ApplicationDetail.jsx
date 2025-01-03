import React, { useState } from "react";
import { deleteApplication, editApplication } from "../store/applicationSlice";
import { useDispatch, useSelector } from "react-redux";

function ApplicationDetail({ application, onClose }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const [isEditing, setIsEditing] = useState(false);
  const [newData, setNewData] = useState({
    jobTitle: application.jobTitle,
    companyName: application.companyName,
    dateApplied: application.dateApplied,
    status: application.status,
    jobLocation: application.jobLocation,
  });
  const [error, setError] = useState("");

  // Validate if any fields are empty
  const validateFields = () => {
    for (let key in newData) {
      if (newData[key] === "") {
        setError(
          `${key.replace(/([A-Z])/g, " $1").toUpperCase()} cannot be empty.`
        );
        return false;
      }
    }
    setError("");
    return true;
  };

  const handleEdit = () => {
    if (!validateFields()) {
      return;
    }

    if (isEditing) {
      dispatch(editApplication({ id: application.id, updatedData: newData }));
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      className={`mt-8 p-6 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } shadow-lg rounded-lg border border-gray-200`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-blue-600">
          Application Details
        </h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-full"
          onClick={onClose}
        >
          X
        </button>
      </div>

      <div className="space-y-4">
        {Object.keys(newData).map((key) => (
          <div key={key}>
            <h3 className="text-lg font-semibold">
              {key.replace(/([A-Z])/g, " $1").toUpperCase()}:
            </h3>
            {key === "status" ? (
              isEditing ? (
                <div className="space-x-4">
                  {["Applied", "Interview", "Offer", "Rejected"].map(
                    (statusOption) => (
                      <label
                        key={statusOption}
                        className="inline-flex items-center"
                      >
                        <input
                          type="radio"
                          name="status"
                          value={statusOption}
                          checked={newData.status === statusOption}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        {statusOption}
                      </label>
                    )
                  )}
                </div>
              ) : (
                <p>{newData.status}</p>
              )
            ) : isEditing ? (
              <input
                type={key === "dateApplied" ? "date" : "text"}
                name={key}
                value={newData[key]}
                onChange={handleInputChange}
                className={`w-full p-2 mt-1 border ${
                  theme === "dark"
                    ? "border-gray-600 bg-gray-700 text-gray-300"
                    : "border-gray-300 bg-white text-gray-800"
                } rounded-md placeholder-gray-500`}
                placeholder={`Enter ${key.replace(/([A-Z])/g, " $1")}`}
              />
            ) : (
              <p>{newData[key]}</p>
            )}
          </div>
        ))}
      </div>

      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

      <div className="flex items-center justify-between mt-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleEdit}
        >
          {isEditing ? "Save Changes" : "Edit"}
        </button>
        {!isEditing && (
          <button
            className="px-4 py-2 bg-red-600 text-white rounded"
            onClick={() => {
              dispatch(deleteApplication(application.id));
              onClose();
            }}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default ApplicationDetail;
