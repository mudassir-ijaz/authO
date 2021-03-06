import React from "react";
import { Button } from "reactstrap";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

const Hero = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="text-center hero my-5">
      <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
      <h1 className="mb-4">Basic AuthO</h1>
      {!isAuthenticated && (
        <Button
          id="qsLoginBtn"
          color="primary"
          className="btn-margin btn-block"
          onClick={() => loginWithRedirect({})}
        >
          Log in
        </Button>
      )}
      {isAuthenticated && (
        <Link to="/regions">
          <Button
            id="qsLoginBtn"
            color="primary"
            className="btn-margin btn-block"
          >
            Select Regions
          </Button>
        </Link>
      )}
      <hr />
    </div>
  );
};

export default Hero;
