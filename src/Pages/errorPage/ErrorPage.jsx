import React from "react";
import "./errorPage.css";
import { Link, useRouteError } from "react-router-dom";
import { Button } from "react-bootstrap";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="error_bg">
      <div className="text-center bg-err p-5">
        <h2 className="mb-5"> {error?.message}</h2>
        <Link to="/">
          <Button className="apply_btn">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
