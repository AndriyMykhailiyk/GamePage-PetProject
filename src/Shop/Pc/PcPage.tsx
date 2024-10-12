import { useSelector } from "react-redux";
import { removeGame } from "../../Redux/counterSlice.js";
import { Link } from "react-router-dom";
import { MdEuro } from "react-icons/md";
import { FC } from "react";

interface Game {
  id: number;
  plantofm: string;
  title: string;
  img: string;
  price: number;
}

interface PlayStationProps {
  filteredByPc: Game[];

  dispatch: (action: any) => void;
  increment: (game: {
    id: number;
    title: string;
    plantofm: string;
    img: string;
    price: number;
  }) => void;
}

const PcPage: FC<PlayStationProps> = ({
  filteredByPc,
  dispatch,
  increment,
}) => {
  const addedGames = useSelector(
    (state: { counter: { addedGames: { id: number }[] } }) =>
      state.counter.addedGames
  );

  return (
    <section className="wrapper-Xbox">
      <div className="wrapper_header">
        <span>
          <h1>PC Ігри</h1>
        </span>
      </div>

      {filteredByPc.map((game) => (
        <div className="Search_List_Item" key={game.id}>
          <Link to={`/About/${game.id}`} state={{ games: filteredByPc }}>
            <img src={game.img} className="Photo_List" alt={game.title} />
          </Link>
          <div className="Text_Card">
            <p className="game-Title">{game.title}</p>
            <div className="prise">
              <h2 className="Prise">
                {game.price} <MdEuro />
              </h2>
              <span className="btn">
                <button
                  onClick={
                    () =>
                      addedGames.some((g: { id: number }) => g.id === game.id)
                        ? dispatch(removeGame(game.id)) // Якщо гра додана, видаляємо
                        : dispatch(
                            increment({
                              id: game.id,
                              img: game.img,
                              title: game.title,
                              price: game.price,
                              plantofm: game.plantofm,
                            })
                          ) // Якщо ні, додаємо
                  }
                  id="Btn+"
                  className={
                    addedGames.some((g: { id: number }) => g.id === game.id)
                      ? "btn_sec1"
                      : "btn_sec"
                  }
                >
                  {addedGames.some((g: { id: number }) => g.id === game.id)
                    ? "Придбато"
                    : "Придбати"}
                </button>
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PcPage;
