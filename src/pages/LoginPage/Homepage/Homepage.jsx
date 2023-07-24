import React from "react";
import HolidayList from "../../../components/HolidayList/HolidayList";

const Homepage = ({list}) => {
  return (
    <div>
      <HolidayList list={list} />
    </div>
  );
};

export default Homepage;
