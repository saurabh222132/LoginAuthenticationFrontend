import React from "react";
import "./homepage.css";

const Homepage = ({setLoginUser}) => {
  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <div className="btn btn-primary" onClick={ ()=> setLoginUser({}) }> Logout</div>
    </div>
  );
};

export default Homepage;