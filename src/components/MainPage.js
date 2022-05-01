import React, { useState } from "react";
import FiveDayForecast from "./FiveDayForecast";
import ForecastTitle from "./ForecastTitle";
import LocationSearch from "./LocationSearch";

const MainPage = () => {
  let [location, setLocation] = useState("");
  return (
    <div>
      <ForecastTitle location={location} />
      <LocationSearch location={location} setLocation={setLocation} />
      <FiveDayForecast location={location} />
    </div>
  );
};

export default MainPage;
