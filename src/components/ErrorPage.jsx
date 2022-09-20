import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <h1 className="errorTitle">page not found</h1>
      <p className="errorNote">
        Looks like you have followed a broken link or entered a URL that does
        not exist on this site
      </p>
      <Link className="backToSite" to="/">
        Back to our site
      </Link>
    </div>
  );
};

export default ErrorPage;
