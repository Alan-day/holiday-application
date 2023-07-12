import React from "react";
import "./LoginForm.scss";
const LoginForm = ({ handleSubmit }) => {
  return (
    <>
      <div className="form-container">
        <form className="form">
          <label>
            Login:
            <input type="text" name="login" />
          </label>
          <label>
            Password
            <input type="text" name="password" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default LoginForm;
