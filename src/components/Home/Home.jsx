import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <h2>{props.name ? `Welcome Mr./Mrs.- ${props.name}` : `Login Please`}</h2>
    </div>
  );
};

export default Home;
