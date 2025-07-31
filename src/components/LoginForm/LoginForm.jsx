// import styles from "./LoginForm.module.css"

import { Title } from "../Title/Title.jsx";
import { Input } from "../Input/Input.jsx";
import { Button } from "../Button/Button.jsx";
import { useEffect, useReducer, useRef } from "react";
import { loginFormReducer, INITIAL_STATE } from "./LoginFormReducer.js";

export const LoginForm = ({ onSubmit }) => {
  const [loginFormState, dispatchLoginForm] = useReducer(
    loginFormReducer,
    INITIAL_STATE,
  );

  const { values, isReadyToLogIn, isValid } = loginFormState;

  const nameRef = useRef();

  const focusError = (isValid) => {
    switch (true) {
      case !isValid.name:
        nameRef.current.focus();
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    var timerId;

    if (!isValid.name) {
      focusError(isValid);
    }

    timerId = setTimeout(() => {
      dispatchLoginForm({ type: "RESET_VALIDITY" });
    }, 2500);
    return () => clearTimeout(timerId);
  }, [isValid]);

  useEffect(() => {
    if (isReadyToLogIn) {
      dispatchLoginForm({ type: "CLEAR" });
      onSubmit(values);
    }
  }, [isReadyToLogIn]);

  const onChange = (e) => {
    dispatchLoginForm({
      type: "SET_VALUE",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const logIn = (e) => {
    e?.preventDefault();
    dispatchLoginForm({ type: "LOG_IN" });
  };

  return (
    <form onSubmit={logIn}>
      <Title text="Log into profile" />
      <Input
        isValid={isValid.name}
        name="name"
        value={values.name}
        onChange={onChange}
        placeholder="Your name"
        ref={nameRef}
      />
      <Button text="Log in" />
    </form>
  );
};
