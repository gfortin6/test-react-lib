import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { UIVariant } from '../..';
import '../../styles/component/error-page.scss';

export interface ErrorPageProps {
  code: number;
  errorTitle: string;
  errorMessage: string;
  onGoHome: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const refreshPage = () => {
    window.location.reload();
  };

  function goToHome() {
    props.onGoHome();
  }

  return (
    <>
      <Row>
        <Col>
          <h1 className="error-code">{props.code}</h1>
          <h2 className="error-text">{props.errorTitle}</h2>
          <p className="error-text">{props.errorMessage}</p>
          <div className="error-text">
            {props.code === 500 && (
              <Button variant={UIVariant.PRIMARY} onClick={refreshPage}>
                Refresh the page
              </Button>
            )}

            {props.code === 404 && (
              <Button variant={UIVariant.PRIMARY} onClick={goToHome}>
                Go to home
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};
export default ErrorPage;
