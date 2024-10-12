import "../../BestFor.scss";
import { Xboxx } from "../../Interfase/InterfaseMenu";
import { MdEuro } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeGame, increment } from "../../../Redux/counterSlice";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const NintendoGame = ({
  filteredByNintendo,
  hoveredGame,
  setHoveredGame,
  selectedGames,
  handleFavoriteToggle,
}: Xboxx) => {
  const dispatch = useDispatch();

  interface GameI {
    plantofm: any;
    img: string;
    title: string;
    price: number;
    id: number;
  }

  const addedGames = useSelector(
    (state: { counter: { addedGames: { id: number }[] } }) =>
      state.counter.addedGames
  );

  return (
    <>
      {filteredByNintendo.length > 0 ? (
        <div className="List-section">
          {filteredByNintendo.map((game: GameI) => (
            <div
              className="Search_List_Item-Main"
              key={game.id}
              onMouseEnter={() => setHoveredGame(game.id)} // Встановлення активного ID при наведенні
              onMouseLeave={() => setHoveredGame(null)} // Вихід з активного елемента
            >
              <Link
                to={`/About/${game.id}`}
                state={{ games: filteredByNintendo }}
              >
                {" "}
                {/*
            Передача даних */}
                <img
                  src={game.img}
                  className="Photo_List-MAIN"
                  alt={game.title}
                />
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
                          addedGames.some(
                            (g: { id: number }) => g.id === game.id
                          )
                            ? dispatch(removeGame(game.id)) // Якщо гра додана, видаляємо
                            : dispatch(
                                increment({
                                  img: game.img,
                                  id: game.id,
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
                        ? "Придбано"
                        : "Придбати"}
                    </button>
                  </span>
                </div>

                {hoveredGame === game.id && (
                  <div className="wrapper-platform">
                    <div className="platfrom">
                      <div className="wrapper-section-modale">
                        <p className="game-Title-platrorm">{game.plantofm}</p>
                      </div>

                      {selectedGames.some(
                        (g: { id: number }) => g.id === game.id
                      ) ? (
                        <FaHeart
                          className="FaRegHeart"
                          size={30}
                          color="red"
                          onClick={() => handleFavoriteToggle(game.id)}
                        />
                      ) : (
                        <FaRegHeart
                          className="FaRegHeart"
                          size={30}
                          onClick={() => handleFavoriteToggle(game.id)}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
};

export default NintendoGame;
