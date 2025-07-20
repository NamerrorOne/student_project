import { Paragraph } from "./components/Paragraph/Paragraph";
import { Title } from "./components/Title/Title";
import { Button } from "./components/Button/Button";

function App() {
  const tText = "Поиск";
  const pText =
    "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";
  const fontSize = "lg";
  const bText = "Искать";

  return (
    <>
      <Title text={tText} />
      <Paragraph text={pText} fontSize={fontSize} />
      <Button text={bText} />
    </>
  );
}

export default App;
