// src/TrendStatus.js
import React, { useState, useEffect } from "react";
import upTrend from "../images/upTrend.png";
import downTrend from "../images/downTrend.png";
import "./TrendPercentage.css";

const TrendPercentage = () => {
  const [previousValue, setPreviousValue] = useState(100);
  const [currentValue, setCurrentValue] = useState(80);
  const [number, setNumber] = useState("02");

  const trendImage = currentValue >= previousValue ? upTrend : downTrend;

  return (
    <div className="percentageContainer">
      <h1 className="percentageValue">{currentValue}%</h1>
      <div className="trendContainer">
        <img className="trendImage" src={trendImage} alt="Trend" />
        <h2 className="trendValue">{number}</h2>
      </div>
    </div>
  );
};

export default TrendPercentage;
