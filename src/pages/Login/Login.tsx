import { useContext } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useUsersStorage } from "../../hooks/useUsersStorage";
import { IUser } from "../../models/user.model";
import { UserContext } from "../../context/user-context";

export const Login = () => {
  const [usersStorage, saveUsers] = useUsersStorage();
  const { setUserName, userName } = useContext(UserContext);

  const addUser = (user: IUser) => {
    const { name } = user;
    const exist = usersStorage.some((u) => u.name === name);

    let updatedUsers: IUser[];

    if (!exist) {
      updatedUsers = [...usersStorage, { name, isLogined: true }];
    } else {
      updatedUsers = usersStorage.map((userInStorage: IUser) =>
        userInStorage.name === name
          ? { ...userInStorage, isLogined: true }
          : userInStorage,
      );
    }

    saveUsers(updatedUsers);
    setUserName(name);
  };

  return (
    <>
      {!userName && <LoginForm onSubmit={addUser} />}
      {userName && <h1 style={{ color: "white" }}>Hello, {userName}!</h1>}
    </>
  );
};
