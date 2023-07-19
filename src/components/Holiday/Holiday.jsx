import React from "react";
import HolidayTile from "../HolidayTile/HolidayTile";
import data from "./../../data.json";
const Holiday = () => {
  const listOfTiles = data.map((tile) => (
    <HolidayTile picture={tile.picture} description={tile.description} />
  ));

  return <div>{listOfTiles}</div>;
};

export default Holiday;
