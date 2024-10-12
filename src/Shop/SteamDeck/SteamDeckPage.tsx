import "../XboxPage/Xbox.scss";
import { useSelector } from "react-redux";
import { Dispatch, FC } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { removeselected, incrementselected } from "../../Redux/counterSlice.js";
import { removeGame, CounterState } from "../../Redux/counterSlice.js";
import { MdEuro } from "react-icons/md";
import { ActionCreatorWithPayload, UnknownAction } from "@reduxjs/toolkit";

type SteamDeckData = {
  id: number;
  title: string;
  plantofm: string;
  price: number;
  img: string;
};

type Game = {
  id: number;
  title: string;
  plantofm: string;
  price: number;
  img: string;
};

interface HeloProps {
  dispatch: Dispatch<UnknownAction>;
  removeselected: () => {
    id: number;
    title: string;
    plantofm: string;
    price: number;
    img: string;
  };
  MdEuro: any;
  increment: ActionCreatorWithPayload<Game, "counter/increment">;
  filteredBySteamDeck: SteamDeckData[];
}

const SteamDeck: FC<HeloProps> = ({
  filteredBySteamDeck,
  dispatch,
  increment,
}) => {
  const addedGames = useSelector(
    (state: { counter: { addedGames: { id: number }[] } }) =>
      state.counter.addedGames
  );

  const handleFavoriteToggle = (
    id: number,
    img: string,
    title: string,
    plantofm: string,
    price: number
  ) => {
    if (selectedGames.some((game: any) => game.id === id)) {
      dispatch(removeselected(id, title, plantofm, price, img)); // Видалити з обраних
    } else {
      dispatch(incrementselected({ id, title, plantofm, price, img })); // Додати до обраних
    }
  };

  const selectedGames = useSelector(
    (state: CounterState) => state.counterSelected.SelectedGames
  );

  return (
    <section className="wrapper-Xbox">
      <div className="wrapper_header">
        <span>
          <h1>SteamDeck Ігри</h1>
        </span>
      </div>

      {filteredBySteamDeck.map((game) => (
        <div className="Search_List_Item" key={game.id}>
          <Link to={`/About/${game.id}`} state={{ games: filteredBySteamDeck }}>
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
            <div className="wrapper-platform25">
              <div className="platfrom25">
                <div className="wrapper-section-modale25">
                  <p className="game-Title-platrorm25">{game.plantofm}</p>
                </div>
                {selectedGames.some((g: { id: number }) => g.id === game.id) ? (
                  <FaHeart
                    className="FaRegHeartGamePage2"
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
                    className="FaRegHeart2"
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
          </div>
        </div>
      ))}
    </section>
  );
};

export default SteamDeck;
