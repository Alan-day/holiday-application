import React, { useState } from "react";
import { useParams } from "react-router-dom"; // For accessing URL parameters
import data from "./../../data.json"; // Import the JSON data

const Holiday = () => {
  const { id } = useParams(); // Get the "id" parameter from the URL
  const holidayData = data.find((holiday) => holiday.id === parseInt(id, 10)); // Find the selected holiday based on ID

  const [elements, setElements] = useState([]); // State for storing elements related to the holiday

  // Function to add new elements to the holiday
  const handleAddElement = (newElement) => {
    setElements([...elements, newElement]);
  };

  return (
    <div>
      <h2>Holiday Details</h2>
      {holidayData ? (
        <>
          <img src = {holidayData.picture} />

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
