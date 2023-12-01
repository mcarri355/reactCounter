import React from 'react';
import '../App.css'; 

const PageViewCounter = ({ viewCounter }) => {
  return (
    <div className="page-counter-container">
      <h1 className="counter-title">Times Page Has Been Viewed</h1>
      <h2 className="counter-value">{viewCounter}</h2>
    </div>
  );
};

export default PageViewCounter;
