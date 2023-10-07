// src/ProgressBar.js
import React from "react";
import './chart.css'

const ProgressBar = ({ percentage, status }) => {
  const getColor = () => {
    if (percentage < 30) {
      return "red";
    } else if (percentage >= 30 && percentage <= 80) {
      return "orange";
    } else {
      return "green";
    }
  };

  const completedStyle = {
    width: `${percentage}%`,
    backgroundColor: getColor(),
  };

  const emptyStyle = {
    width: `${100 - percentage}%`,
    backgroundColor: "lightgray",
  };

  return (
    <div className="progress-bar-container">
      <p className="percentage-text">{percentage}%</p>
      <p className="name-text">{status}</p>
      <div className="progress-bar">
        <div className="completed" style={completedStyle}></div>
        <div className="empty" style={emptyStyle}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
