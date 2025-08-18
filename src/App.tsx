import { Paragraph } from "./components/Paragraph/Paragraph";
import { Title } from "./components/Title/Title";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Header } from "./layouts/headerLayout/Header/Header";
import { MovieGrid } from "./layouts/MovieGrid/MovieGrid";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { useUsersStorage } from "./hooks/useUsersStorage";
import { UserContext } from "./context/user-context";
import { useContext, useEffect } from "react";
import { IUser } from "./models/user.model";

function App() {
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
      <LoginForm onSubmit={addUser} />
      <Title text="Поиск" />
      <Paragraph
        text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
        fontSize="lg"
      />
      <Button text="Search" />
      <Input isIconShow placeholder="enter text" />
      <MovieGrid />
    </>
  );
}

export default App;
