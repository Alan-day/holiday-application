import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you have React Router properly set up
import list from "./../../list.json";
import HolidayListElement from "../HolidayListElement/HolidayListElement"; // Assuming it's a default export
import CreateForm from "../CreateForm/CreateForm"; // Assuming it's a default export

const HolidayList = () => {
  const [holidays, setHolidays] = useState(list);

  const holidayList = holidays.map((element) => (
    <Link
      key={element.id}
      to={`/holidays/${element.id}`}
      style={{ textDecoration: "none" }}
    >
      <HolidayListElement
        start={element.date_started}
        finish={element.date_ended}
        description={element.description}
      />
    </Link>
  ));

  const handleSubmit = (newHoliday) => {
    console.log(newHoliday);
    const updatedHolidays = [...holidays, newHoliday];
    setHolidays(updatedHolidays);
  };

  const defaultFormState = {
    description: "",
    date_started: "",
    date_ended: "",
  };

  return (
    <>
      <CreateForm
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
        formTitle="Add new holiday"
      />
      {/* <button onClick={handleAddHoliday}> + add new holiday</button> */}

      <h1>Current holidays</h1>
      <h1>Past Holidays</h1>
      {holidayList}
    </>
  );
};

export default HolidayList;
