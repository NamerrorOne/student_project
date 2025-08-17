import styles from "./LoginForm.module.css";

import { Title } from "../Title/Title.js";
import { Input } from "../Input/Input.js";
import { Button } from "../Button/Button.js";
import { FC, useEffect, useReducer, useRef } from "react";
import {
  loginFormReducer,
  INITIAL_STATE,
  ILoginFormState,
} from "./LoginFormReducer.js";
import { ILoginForm } from "./LoginForm.props";

export const LoginForm: FC<ILoginForm> = ({ onSubmit }) => {
  const [loginFormState, dispatchLoginForm] = useReducer(
    loginFormReducer,
    INITIAL_STATE,
  );

  const { values, isReadyToLogIn, isValid } = loginFormState;

  const nameRef = useRef<HTMLInputElement>(null);

  const focusError = (isValid: ILoginFormState["isValid"]) => {
    switch (true) {
      case !isValid.name:
        nameRef.current?.focus();
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (!isValid.name) {
      focusError(isValid);
    }

    const timerId = setTimeout(() => {
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchLoginForm({
      type: "SET_VALUE",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const logIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatchLoginForm({ type: "LOG_IN" });
  };

  return (
    <form className={styles.loginForm} onSubmit={logIn}>
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
