import { IUser } from "../../models/user.model";

export const INITIAL_STATE: ILoginFormState = {
  values: { name: "", isLogined: false },
  isValid: { name: true },
  isReadyToLogIn: false,
};

export const loginFormReducer = (state: ILoginFormState, action: Action) => {
  switch (action.type) {
    case "RESET_VALIDITY": {
      return { ...state, isValid: INITIAL_STATE.isValid };
    }

    case "CLEAR": {
      return {
        ...state,
        isReadyToLogIn: false,
        values: { ...state.values, name: "" },
      };
    }

    case "LOG_IN": {
      const nameValidity = state.values.name?.trim().length > 4;
      const isReadyToLogIn = nameValidity;
      return {
        isValid: { name: nameValidity },
        isReadyToLogIn: isReadyToLogIn,
        values: { name: state.values.name, isLogined: isReadyToLogIn },
      };
    }

    case "SET_VALUE":
      return {
        ...state,
        values: { ...state.values, ...action.payload },
      };
  }
};

export interface ILoginFormState {
  values: IUser;
  isValid: {
    name: boolean;
  };
  isReadyToLogIn: boolean;
}

export type Action =
  | { type: "RESET_VALIDITY" }
  | { type: "CLEAR" }
  | { type: "LOG_IN" }
  | { type: "SET_VALUE"; payload: Partial<ILoginFormState["values"]> };
