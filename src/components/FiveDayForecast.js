import React from "react";
import ForecastCard from "./ForecastCard";
import moment from "moment";

const FiveDayForecast = ({ location }) => {
  const dates = [
    moment(),
    moment().add(1, "d"),
    moment().add(2, "d"),
    moment().add(3, "d"),
    moment().add(4, "d"),
  ];
  console.log(dates);
  return (
    <div className="card-fiveday">
      {dates.map((date) => (
        <ForecastCard key={date.valueOf()} date={date} location={location} />
      ))}
    </div>
  );
};

export default FiveDayForecast;
