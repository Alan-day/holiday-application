import React from "react";

const HolidayListElement = ({ start, finish, description }) => {
  return (
    <>
      <div className="element-container">
        <h1 className="element-container__description">{description}</h1>
        <p className="element-container date"> started: {start}</p>
        <p className="element-container__description">finished: {finish}</p>
      </div>
    </>
  );
};

export default HolidayListElement;
