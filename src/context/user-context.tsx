import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IUserContext {
  userName: string | null;
  setUserName: Dispatch<SetStateAction<string | null>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<IUserContext | null>(null);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState<string | null>(null);
  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
