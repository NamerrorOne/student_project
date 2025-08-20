import { Outlet } from "react-router-dom";
import { useUsersStorage } from "../../hooks/useUsersStorage";
import { IUser } from "../../models/user.model";
import { Header } from "../../components/Header/Header";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/user-context";

export const Layout = () => {
  const [usersStorage, saveUsers] = useUsersStorage();
  const { setUserName } = useContext(UserContext);

  useEffect(() => {
    if (!usersStorage || usersStorage.length === 0) {
      setUserName(null);
      return;
    }

    const loggedUser: IUser | undefined = usersStorage.find(
      (userInSorage: IUser) => userInSorage.isLogined,
    );

    setUserName(loggedUser ? loggedUser.name : null);
  }, [usersStorage, setUserName]);

  const handleLogOut = () => {
    const updatedUsers = usersStorage.map((userInStorage: IUser) => ({
      ...userInStorage,
      isLogined: false,
    }));

    saveUsers(updatedUsers);
    setUserName(null);
  };

  return (
    <>
      <Header onClick={handleLogOut} />
      <Outlet />
    </>
  );
};
