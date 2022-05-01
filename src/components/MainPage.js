import React from "react";
import FiveDayForecast from "./FiveDayForecast";
import ForecastTitle from "./ForecastTitle";
import LocationSearch from "./LocationSearch";

const MainPage = () => {
  return (
    <div>
      <ForecastTitle />
      <LocationSearch />
      <FiveDayForecast />
    </div>
  );
};

export default MainPage;
