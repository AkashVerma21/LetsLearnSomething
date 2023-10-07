import React from "react";
import TrendPercentage from "./TrendPercentage";
import "./StatusTrend.css";

const StatusTrend = ({ imageName, heading }) => {
  return (
    <div className="statusTrend">
      <h2>{heading}</h2>
      <div className="imageAndTrend">
        <img className="imageStyle" src={require(`../images/${imageName}`)} />
        <TrendPercentage />
      </div>
    </div>
  );
};

export default StatusTrend;
