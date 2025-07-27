import { Paragraph } from "./components/Paragraph/Paragraph";
import { Title } from "./components/Title/Title";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

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
      <Button onClick={() => console.log("Ckicked")} text={bText} />
      <Input
        showImage={true}
        showPlaceholder={true}
        placeholderText={"enter text"}
      />
    </>
  );
}

export default App;
