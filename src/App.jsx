import { Paragraph } from "./components/Paragraph/Paragraph";
import { Title } from "./components/Title/Title";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Header } from "./layouts/headerLayout/Header/Header";
import { MovieGrid } from "./layouts/MovieGrid/MovieGrid";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { useLocalStorage } from "./components/hooks/use-localStorage.hook";

function App() {
  const [usersStorage, saveUsers] = useLocalStorage("users");

  const addUser = (user) => {
    if (!usersStorage?.length) {
      saveUsers([{ name: user.name, isLogined: user.isLogined }]);
    }

    const exist = usersStorage?.some((u) => u.name == user.name);

    if (!exist) {
      saveUsers([
        ...(usersStorage || []),
        { name: user.name, isLogined: user.isLogined },
      ]);
    } else {
      const updatedUsers = usersStorage.map((u) =>
        u.name === user.name ? { ...u, isLogined: true } : u,
      );
      saveUsers(updatedUsers);
    }
  };

  const handleLogOut = () => {
    console.log("Started log out");
    if (!usersStorage) return;

    const updatedUsers = usersStorage.map((user) => ({
      ...user,
      isLogined: false,
    }));

    saveUsers(updatedUsers);
  };

  const loggedInUser =
    (usersStorage || [])?.find((user) => user.isLogined && user.name) || null;

  return (
    <>
      <Header
        handleLogOut={handleLogOut}
        userName={loggedInUser?.name}
        isLogined={loggedInUser?.isLogined}
      />
      <LoginForm onSubmit={addUser} />
      <Title text="Поиск" />
      <Paragraph
        text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
        fontSize="lg"
      />
      <Button onClick={() => console.log("Ckicked")} text="Search" />
      <Input isIconShow placeholder="enter text" />
      <MovieGrid />
    </>
  );
}

export default App;
