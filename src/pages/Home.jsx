import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/newapplication">New Applications</Link>
    </div>
  );
}

export default Home;