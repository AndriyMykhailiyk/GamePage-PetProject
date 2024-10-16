import { useEffect, useState } from "react";
import { increment } from "../Redux/counterSlice.ts";
import {
  removeselected,
  incrementselected,
} from "../../src/Redux/counterSlice";
import { removeGame, CounterState } from "../../src/Redux/counterSlice.ts";
import "./News.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
const News = () => {
  const [data, SetData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://api.mockfly.dev/mocks/60fe8fb4-6deb-45bf-a8f8-8334d38c7cb1/NewGames",
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((json) => {
        SetData(json);
      });
  }, []);

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
    if (selectedGames.some((game: { id: number }) => game.id === id)) {
      dispatch(removeselected(id, title, plantofm, price, img));
    } else {
      dispatch(incrementselected({ id, title, plantofm, price, img }));
    }
  };

  const selectedGames = useSelector(
    (state: CounterState) => state.counterSelected.SelectedGames
  );

  const SilenHeal = data
    ? data.filter((game: { id: number }) => game.id === 6)
    : data;

  return (
    <>
      <section className="section-bg">
        {SilenHeal.map(
          (game: {
            id: number;
            img: string;
            title: string;
            price: number;
            plantofm: string;
            publisher: string;
            priceBY: number;
            data_resile: number;
          }) => (
            <div className="wrapper-full-card" key={game.id}>
              <div className="Text_Card-wrap">
                <Link to={`/About/${game.id}`} state={{ games: SilenHeal }}>
                  <h1 className="game-Title-silen">{game.title}</h1>
                </Link>
                <p className="game-Title-silen-publisher">{game.publisher}</p>

                <div className="Price-wrap">
                  <h2 className="game-prise-silen-usd">
                    <span className="usd-tex">USD</span>
                    {game.price}
                  </h2>
                  <h2 className="game-prise-silen-prise">{game.priceBY}</h2>
                </div>

                <div className="Btn-wrap-silen">
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
                        addedGames.some((g: any) => g.id === game.id)
                          ? "btn_silen_buy"
                          : "btn_silen"
                      }
                    >
                      {addedGames.some((g: any) => g.id === game.id)
                        ? "Придбато"
                        : "Покласти до кошика"}
                    </button>
                  </span>

                  <div className="wrapper-section-modale25"></div>
                  {selectedGames.some((g) => g.id === game.id) ? (
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
                <div className="relise-block">
                  <p className="relise-text">Випущено {game.data_resile}</p>
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </>
  );
};

export default News;
