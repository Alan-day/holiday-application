import { React, useState } from "react";

const CreateForm = ({ defaultFormState, handleSubmit, formTitle }) => {
  const [holiday, setHoliday] = useState(defaultFormState);

  const handleValidation = (event) => {
    event.preventDefault();

    if (Object.values(holiday).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(holiday);
  };

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <label htmlFor="holiday">Description: </label>
        <input
          id="description"
          className="form-container__input"
          type="text"
          value={holiday.description}
          onInput={(event) =>
            setHoliday({ ...holiday, description: event.target.value })
          }
        />

        <label htmlFor="startDate">Start date: </label>
        <input
          id="name"
          className="form-container__input"
          type="date"
          value={holiday.date_started}
          onInput={(event) =>
            setHoliday({ ...holiday, date_started: event.target.value })
          }
        />

        <label htmlFor="category">End date:</label>
        <input
          id="name"
          className="form-container__input"
          type="date"
          value={holiday.date_ended}
          onInput={(event) =>
            setHoliday({ ...holiday, date_ended: event.target.value })
          }
        />

        <button onClick={handleSubmit} className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
