import React from "react";
import "./App.css";
import HeatmapChart from "./Charts/HeatChart";
import GroupedBarChart from "./Charts/GroupedBarChart";
import OverallEffectiveness from "./Components/OverallEffectiveness";
import StatusTrend from "./Components/StatusTrend";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          boxSizing: "border-box",
        }}
      >
        <OverallEffectiveness />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            boxSizing: "border-box",
          }}
        >
          <StatusTrend imageName="settingIcon.png" heading="Overall Loss" />
          <StatusTrend
            imageName="OverallLoss.png"
            heading="Overall Productivity"
          />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
        <div
          style={{
            border: "1px solid #dfdfdf",
            borderRadius: "5px",
            boxSizing: "border-box",
            margin: "10px",
          }}
        >
          <HeatmapChart />
        </div>
        <div
          style={{
            border: "1px solid #dfdfdf",
            borderRadius: "5px",
            boxSizing: "border-box",
            margin: "10px",
          }}
        >
          <GroupedBarChart />
        </div>
      </div>
    </div>
  );
}

export default App;
