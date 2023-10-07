import React from "react";
import ProgressBar from "../Charts/ProgressBar";
import TrendPercentage from "./TrendPercentage";

const OverallEffectiveness = () => {
  // useEffect(()=>{
  //   const res = await fetch('API_URL')

  // },[])

  const value = {
    availablity: 78,
    performance: 54,
    quality: 38,
  };

  return (
    <div
      style={{
        width: "98%",
        border: "1px solid #dfdfdf",
        borderRadius: "5px",
        padding: "5px 20px 15px",
        boxSizing: "border-box",
        margin: "10px",
      }}
    >
      <h2>Overall Value</h2>
      <div style={{ display: "grid", gridTemplateColumns: "19% 27% 27% 27%" }}>
        <TrendPercentage />
        <ProgressBar percentage={value.availablity} status={"Availability"} />
        <ProgressBar percentage={value.performance} status={" Performance"} />
        <ProgressBar percentage={value.quality} status={"Quality"} />
      </div>
    </div>
  );
};

export default OverallEffectiveness;
