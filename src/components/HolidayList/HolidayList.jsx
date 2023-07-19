import React from "react";

import list from "./../../list.json";
import HolidayListElement from "../HolidayListElement/HolidayListElement";
const HolidayList = () => {
  const holidayList = list.map((element) => (
    <HolidayListElement
      start={element.date_started}
      finish={element.date_ended}
      description={element.description}
    />
  ));

  return <>{holidayList}</>;
};

export default HolidayList;
