import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../../styles/component/loading.scss';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
export default Loading;
