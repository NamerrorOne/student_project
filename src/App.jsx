import { Paragraph } from "./components/Paragraph/Paragraph";
import { Title } from "./components/Title/Title";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Header } from "./layouts/headerLayout/Header/Header";
import { MovieGrid } from "./layouts/MovieGrid/MovieGrid";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { useUsersStorage } from "./components/hooks/use-usersStorage.hook";
import { UserContext, UserContextProvider } from "./context/user-context";
import { useContext } from "react";

function App() {
  const [usersStorage, saveUsers] = useUsersStorage();
  const { userName, setUserName } = useContext(UserContext);

  const addUser = (user) => {
    if (!usersStorage?.length) {
      saveUsers([{ name: user.name, isLogined: user.isLogined }]);
      setUserName(user?.name);
    }

    const exist = usersStorage?.some((u) => u.name == user.name);

    if (!exist) {
      saveUsers([
        ...usersStorage,
        { name: user.name, isLogined: user.isLogined },
      ]);
      setUserName(user?.name);
    } else {
      const updatedUsers = usersStorage.map((u) =>
        u.name === user.name ? { ...u, isLogined: true } : u,
      );
      saveUsers(updatedUsers);
      setUserName(user?.name);
    }

    console.log();
  };

  const handleLogOut = () => {
    if (!usersStorage) return;

    const updatedUsers = usersStorage.map((user) => ({
      ...user,
      isLogined: false,
    }));

    saveUsers(updatedUsers);
    setUserName(null);
    console.log(userName);
  };

  // const loggedInUser =
  //      usersStorage?.find((user) => user.isLogined && user.name) || null;

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
