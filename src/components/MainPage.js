import React, { useState } from "react";
import FiveDayForecast from "./FiveDayForecast";
import ForecastTitle from "./ForecastTitle";
import LocationSearch from "./LocationSearch";

const MainPage = () => {
  let [location, setLocation] = useState("");
  return (
    <main>
      <ForecastTitle location={location} />
      <LocationSearch location={location} setLocation={setLocation} />
      <FiveDayForecast location={location} />
    </main>
  );
};

export default MainPage;
