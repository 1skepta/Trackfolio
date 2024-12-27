import React from "react";
import { Link } from "react-router-dom";
import EachApplication from "../components/EachApplication";
import ApplicationsList from "../components/ApplicationsList";

function Home() {
  return (
    <div>
      <Link to="/newapplication">New Applications</Link>
      <ApplicationsList />
    </div>
  );
}

export default Home;
