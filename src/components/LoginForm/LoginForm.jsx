import { React } from "react";
import "./LoginForm.scss";

const LoginForm = ({ email, password, passwordInput, emailInput}) => {




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
              onInput={emailInput}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onInput={passwordInput}
            />
          </label>

       
        </form>
      </div>
    </>
  );
};

export default LoginForm;
