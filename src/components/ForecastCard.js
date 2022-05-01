import React from "react";
import useForecast from "../hooks/useForecast";

const ForecastCard = ({ date, location }) => {
  const forecast = useForecast(date, location);
  return <div className="forecast-card">ForecastCard</div>;
};

export default ForecastCard;
