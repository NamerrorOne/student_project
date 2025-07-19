import { Paragraph } from "./components/Paragraph/Paragraph";
import { Title } from "./components/Title/Title";
import { Button } from "./components/Button/Button";

function App() {
  const tText = "Поиск";
  const pText =
    "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";
  const fontSize = "1rem";
  const bText = "Искать";
  const testDivStyles = {
    marginTop: "7rem",
    marginLeft: "3rem",
    width: "588px",
    heigth: "144px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    "row-gap": "1rem",
  };

  return (
    <div style={testDivStyles}>
      <Title>{tText}</Title>
      <Paragraph fontSize={fontSize}>{pText}</Paragraph>
      <Button>{bText}</Button>
    </div>
  );
}

export default App;
