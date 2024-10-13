import "./BestFor.scss";
import { SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEuro } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeGame, increment } from "../Redux/counterSlice";
import { incrementselected, removeselected } from "../Redux/counterSlice";
import { CounterState } from "../Redux/counterSlice";
import XboxGame from "./List/Xbox/XboxGame";
import PlayStationGame from "./List/PlayStation/PlayStationGame";
import NintendoGame from "./List/Nintendo/NintendoGame";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import FullGame from "./List/Every/FullGame";

const BestGameCart = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [menu, SetMenu] = useState<boolean>(false);
  const [Xbox, setXbox] = useState<boolean>(false);
  const [PlayStation, setPlayStation] = useState<boolean>(false);
  const [hoveredGame, setHoveredGame] = useState<null>(null); // Стан для відстеження наведеної гри
  const [nintendo, setNintendo] = useState<boolean>(false);
  const [fullGame, setFullGame] = useState<boolean>(false);
  const [heard] = useState<number[]>([]); // Массив для відстеження обраних ігор

  const HandleXbox = () => {
    setXbox(!Xbox);
  };

  const handleFavoriteToggle = (
    id: number,
    img: string,
    title: string,
    plantofm: string,
    price: number
  ) => {
    if (selectedGames.some((game: { id: number }) => game.id === id)) {

      dispatch(removeselected({ id, title, plantofm, price, img })); // Видалити з обраних
    } else {
      dispatch(incrementselected({ id, title, plantofm, price, img })); // Додати до обраних
    }
  };

  const HandleFull = () => {
    setFullGame(!fullGame);
  };

  const HandlePlayStation = () => {
    setPlayStation(!PlayStation);
  };

  const HandleNintendo = () => {
    setNintendo(!nintendo);
  };


  const addedGames = useSelector(
    (state: { counter: { addedGames: { id: number }[] } }) =>
      state.counter.addedGames
  );

  const selectedGames = useSelector(
    (state: CounterState) => state.counterSelected.SelectedGames
  );

  useEffect(() => {
    fetch(
      "https://api.mockfly.dev/mocks/60fe8fb4-6deb-45bf-a8f8-8334d38c7cb1/NewGames",
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  interface Game {
    plantofm: string;
  }

  const filteredByPc = data.filter((game) => game).slice(0, 4);
  const filteredByXbox = Xbox
    ? data.filter((game: Game) => game.plantofm === "Xbox")
    : data;

  const filteredByPlayStatiom = PlayStation
    ? data.filter((game: Game) => game.plantofm === "Ps5")
    : data;

  const filteredByNintendo = nintendo
    ? data.filter((game: Game) => game.plantofm === "Nintendo")
    : data;
  const FulteredGames = fullGame ? data.filter((game: Game) => game) : data;

  const HandleMenuClick = () => {
    SetMenu(!menu);
  };

  return (
    <>
      <section className="wrapper">
        <div className="Header-section-best-game">
          <h1 className="text-header">
            Краще за жанрами для{" "}
            <a className="text-header-red" onClick={HandleMenuClick}>
              {" "}
              Всіх консолей{" "}
            </a>
          </h1>

          {menu ? (
            <>
              <div className="wrapper-menu-section">
                <ul className="Platform-Modla">
                  <li className="platform-element" id="0">
                    <a
                      className={
                        Xbox
                          ? "list-el-main-section"
                          : "list-el-main-section-get"
                      }
                      onClick={HandleXbox}
                    >
                      Xbox
                    </a>
                  </li>
                  <li className="platform-element" id="1">
                    <a
                      className={
                        PlayStation
                          ? "list-el-main-section"
                          : "list-el-main-section-get"
                      }
                      onClick={HandlePlayStation}
                    >
                      PlayStation
                    </a>
                  </li>
                  <li className="platform-element" id="2">
                    <a
                      className={
                        nintendo
                          ? "list-el-main-section"
                          : "list-el-main-section-get"
                      }
                      onClick={HandleNintendo}
                    >
                      Nintendo
                    </a>
                  </li>
                  <li className="platform-element" id="3">
                    <a
                      className={
                        fullGame
                          ? "list-el-main-section"
                          : "list-el-main-section-get"
                      }
                      onClick={HandleFull}
                    >
                      Всі консолі
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : null}
        </div>

        <div className="Btn-Genre-section">
          <button className="GenreBtn" id="BtnG">
            Всі жанри
          </button>
        </div>
        {Xbox ? (
          <XboxGame
            selectedGames={selectedGames}
            handleFavoriteToggle={handleFavoriteToggle}
            heard={heard}
            filteredByXbox={filteredByXbox}
            hoveredGame={hoveredGame}
            setHoveredGame={setHoveredGame}
          />
        ) : PlayStation ? (
          <PlayStationGame
            handleFavoriteToggle={handleFavoriteToggle}
            selectedGames={selectedGames}
            filteredByPlayStatiom={filteredByPlayStatiom}
            hoveredGame={hoveredGame}
            setHoveredGame={setHoveredGame}
          />
        ) : nintendo ? (
          <NintendoGame
            handleFavoriteToggle={handleFavoriteToggle}
            selectedGames={selectedGames}
            filteredByNintendo={filteredByNintendo}
            hoveredGame={hoveredGame}
            setHoveredGame={setHoveredGame}
          />
        ) : fullGame ? (
          <FullGame
            selectedGames={selectedGames}
            handleFavoriteToggle={handleFavoriteToggle}
            FulteredGames={FulteredGames}
            hoveredGame={hoveredGame}
            setHoveredGame={setHoveredGame}
          />
        ) : (
          <div className="List-section">
            {filteredByPc.map((game: {id: SetStateAction<null>}) => (
              <div
                className="Search_List_Item-Main"
                key={game.id}
                onMouseEnter={() => setHoveredGame(game.id)} // Встановлення активного ID при наведенні
                onMouseLeave={() => setHoveredGame(null)} // Вихід з активного елемента
              >
                <Link to={`/About/${game.id}`} state={{ games: data }}>
                  {" "}
                  {/* Передача даних */}
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
                      {game.price}
                      <MdEuro />
                    </h2>

                    <span className="btn">
                      <button
                        onClick={
                          () =>
                            addedGames.some(
                              (g: { id: number }) => g.id === game.id
                            )
                              ? dispatch(removeGame(game.id)) // Видалити гру, якщо вона додана
                              : dispatch(
                                  increment({
                                    img: game.img,
                                    id: game.id,
                                    title: game.title,
                                    price: game.price,
                                    plantofm: game.plantofm,
                                  })
                                ) // Додати гру, якщо її ще немає
                        }
                        id="Btn+"
                        className={
                          addedGames.some(
                            (g: { id: number }) => g.id === game.id
                          )
                            ? "btn_sec1"
                            : "btn_sec"
                        }
                      >
                        {addedGames.some(
                          (g: { id: number }) => g.id === game.id
                        )
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
                            onClick={() =>
                              handleFavoriteToggle(
                                game.id,
                                game.title,
                                game.img,
                                game.plantofm,
                                game.price
                              )
                            }
                          />
                        ) : (
                          <FaRegHeart
                            className="FaRegHeart"
                            size={30}
                            onClick={() =>
                              handleFavoriteToggle(
                                game.id,
                                game.img,
                                game.title,
                                game.plantofm,
                                game.price
                              )
                            }
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default BestGameCart;
