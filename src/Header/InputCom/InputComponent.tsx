import { useEffect, useState } from "react";
import "../Header.scss";

const InputComponent = () => {
  const [SearchTeam, setSearchTerm] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.mockfly.dev/mocks/a90d730f-3137-4eed-b2c2-84cb23ea96c4/Games"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  useEffect(() => {
    if (SearchTeam.length >= 3) {
      const results = data.filter((game: { title: string }) =>
        game.title.toLowerCase().startsWith(SearchTeam.toLowerCase())
      );
      setFilteredGames(results);
    } else {
      setFilteredGames([]);
    }
  }, [SearchTeam, data]);

  const handleKeyDown = (event: {
    preventDefault(): unknown; key: string 
}) => {
    if (event.key === "Enter" && filteredGames.length > 0) {
      event.preventDefault(); // зупиняємо стандартну поведінку форми
    }
  };


  return (
    <>
      <form
        className="Search_input_section-header"
   
      >
        <input
          type="text"
          placeholder="Я шукаю..."
          className="input_class"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
          onKeyDown={handleKeyDown}
        />
      </form>
    </>
  );
};

export default InputComponent;
