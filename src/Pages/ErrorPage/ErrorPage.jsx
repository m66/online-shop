import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import errorImg from "../../images/error-page/lovepik-404-error-code-png-image_401803274_wh300.png"
import "./errorPage.scss";

function ErrorPage() {
  let navigate = useNavigate();

  return (
    <div className="error-page">
      <img src={errorImg} />
      <h1>OOPS!</h1>
      <h2>Page not found</h2>
      <h5>
        The page you are looking for doesn't exist or an other error occurred.
      </h5>
      <Button onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowAltCircleLeft}/> Go back</Button>
    </div>
  );
}

export default ErrorPage;
