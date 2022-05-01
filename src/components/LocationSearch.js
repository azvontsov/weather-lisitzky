import React from "react";

const LocationSearch = ({ location, setLocation }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter City"
        maxLength="50"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input type="submit" value="Get weather" />
    </div>
  );
};

export default LocationSearch;
