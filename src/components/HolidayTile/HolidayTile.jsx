import React from "react";
import "./HolidayTile.scss";

const HolidayTile = ({ picture, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-container__description">HolidayTile</p>
      <img className="tile-container__picture" src={picture} />
      <p className="tile-container__description">{description}</p>
    </div>
  );
};

export default HolidayTile;
