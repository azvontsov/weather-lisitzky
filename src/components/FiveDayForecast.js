import React from "react";
import ForecastCard from "./ForecastCard";

const FiveDayForecast = ({ location }) => {
  return (
    <div className="card-fiveday">
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
    </div>
  );
};

export default FiveDayForecast;
