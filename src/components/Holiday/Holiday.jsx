import React, { useState } from "react";
import { useParams } from "react-router-dom"; // needed for urls
import data from "./../../data.json";
import "./Holiday.scss"
const Holiday = () => {
  const { id } = useParams();
  const holidayData = data.find((holiday) => holiday.id === parseInt(id, 10));

  const [elements, setElements] = useState([]);

  const handleAddElement = (newElement) => {
    setElements([...elements, newElement]);
  };

  return (
    <div>
      <h2>Holiday Details</h2>
      {holidayData ? (
        <>
          <img src={holidayData.picture} className="picture"/>

          <p>Description: {holidayData.description}</p>
        </>
      ) : (
        <p>Holiday not found!</p>
      )}

      <h2>Elements</h2>
      <ul>
        {elements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>

      <button onClick={() => handleAddElement("New Element")}>
        Add New Element
      </button>
    </div>
  );
};

export default Holiday;
