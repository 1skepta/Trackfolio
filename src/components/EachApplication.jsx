import React from "react";
import { useSelector } from "react-redux";

function EachApplication({}) {
  const applications = useSelector((state) => state.applications.applications);
  return (
    <li>
      <h2>Applications List</h2>
      <div>
        <ul>
          {applications.map((application, index) => (
            <li key={index}>
              <h3>{application.jobTitle}</h3>
              <p>{application.companyName}</p>
              <p>{application.dateApplied}</p>
              <p>{application.status}</p>
              <p>{application.jobLocation}</p>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default EachApplication;
