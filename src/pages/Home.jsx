import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import ApplicationsList from "../components/ApplicationsList";

function Home() {
  return (
    <div>
      <Dashboard />
      <ApplicationsList />
    </div>
  );
}

export default Home;
