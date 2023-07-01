import React, { useState, useEffect, useContext, useRef } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formisValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);
  }, [enteredEmail, enteredPassword]);

  const authCtx = useContext(AuthContext);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (formisValid) {
      authCtx.onLogin(enteredEmail, enteredPassword);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes["form-control"]} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <Input
            ref={emailInputRef}
            label="Email"
            type="email"
            className="form-control"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes["form-control"]} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <Input
            ref={passwordInputRef}
            label="Password"
            type="password"
            className="form-control"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>

        <Button className="btn" type="submit">
          Log in
        </Button>
      </form>
    </Card>
  );
};

export default Login;
