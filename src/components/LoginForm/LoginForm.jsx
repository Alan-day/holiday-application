import { React, useState } from "react";
import "./LoginForm.scss";

const LoginForm = ({
  email,
  password,
  handleSubmit,
  passwordInput,
  emailInput,
}) => {
  const [emailErrorMessage, setEmailErrorMessage] = useState(false);

  const handleSetPassword = (e) => {
    passwordInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    handleSubmit(); // Call the handleSubmit function passed as a prop
  };

  const handleSetEmail = (e) => {
    emailInput(e.target.value);
    if (!e.target.value.includes("@" && ".")) {
      setEmailErrorMessage(true);
    } else {
      setEmailErrorMessage(false);
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="form">
          <label>
            Login:
            <input
              type="text"
              name="login"
              value={email}
              onInput={handleSetEmail}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onInput={handleSetPassword}
            />
          </label>

          <input type="submit" value="Submit" onSubmit={handleFormSubmit} />
        </form>
      </div>
    </>
  );
};

export default LoginForm;
