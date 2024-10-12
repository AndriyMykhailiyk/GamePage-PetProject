import Header from "../Header/Header";
import Fotter from "../Footer/Fotter";
import { useSelector, useDispatch } from "react-redux";
import "./Account.scss";
import { CounterState, removeGame } from "../Redux/counterSlice.js";
import { ImCross } from "react-icons/im";
import { MdEuro } from "react-icons/md";
import { removeselected } from "../Redux/counterSlice";

import { GotoBuy } from "../Btn/Btn.js";
import { Link } from "react-router-dom";
import { useState } from "react";

const MyAccount = () => {
  const [busket, setBusket] = useState(true);
  const [fovorite, setfovorite] = useState(false);
  const [gameQuantities, setGameQuantities] = useState({});

  const HandleFavore = () => {
    setfovorite(true); // Показати вибрані
    setBusket(false); // Сховати кошик
  };
  const HandleBusket = () => {
    setfovorite(false); // Сховати вибрані
    setBusket(true); // Показати кошик
  };

  const count = useSelector(
    (state: { counter: { count: number } }) => state.counter.count
  );
  const addedGames = useSelector(
    (state: { counter: { addedGames: [] } }) => state.counter.addedGames
  );

  const favoriteCount = useSelector(
    (state: CounterState) => state.counterSelected.count
  );

  const favoriteGames = useSelector(
    (state: {
      counterSelected: {
        SelectedGames: {
          id: number;
          title: string;
          img: string;
          plantofm: string;
          price: number;
        }[];
      };
    }) => state.counterSelected.SelectedGames
  );
  const dispatch = useDispatch();

  const totalPrice = addedGames.reduce(
    (total: number, game: { price: number }) => total + game.price,
    0
  );

  const totalPriceSet = addedGames.reduce(
    (total: number, game: { id: number; price: number }) => {
      const quantity = gameQuantities[game.id] || 1;
      return total + game.price * quantity;
    },
    0
  );

  const handleIncrement = (gameId: number) => {
    setGameQuantities((prevQuantities) => ({
      ...prevQuantities,
      [gameId]: (prevQuantities[gameId] || 0) + 1,
    }));
  };

  const handleDecrement = (gameId: number) => {
    setGameQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[gameId] || 0) - 1;
      return {
        ...prevQuantities,
        [gameId]: newQuantity < 0 ? 0 : newQuantity,
      };
    });
  };

  return (
    <>
      <Header />
      <section className="wrapper-23">
        <div className="wrapper_header">
          <h1
            onClick={HandleBusket}
            className={busket ? "busketset" : "busketsetUNset"}
          >
            Кошик:
          </h1>
          <h1
            onClick={HandleFavore}
            className={fovorite ? "fovoriteset" : "fovoriteUNset"}
          >
            Вибрані:
          </h1>
        </div>

        {busket ? (
          <div className="wrapper-Main-section">
            <section className="wrapper-menu">
              <div className="Set-value-Game">
                ПОКУПКА
                <span className="count-Game">{count}</span>
              </div>

              {favoriteGames.length > 0 ? (
                addedGames.map(
                  (game: {
                    plantofm: string;
                    id: number;
                    title: string;
                    price: number;
                    img: string;
                  }) => (
                    <span className="wrapper_account" key={game.id}>
                      <a>
                        <img
                          src={game.img}
                          className="Photo_List-basket"
                          alt={game.title}
                        />

                        <div className="content-section">
                          <Link
                            to={`/About/${game.id}`}
                            state={{ games: addedGames }}
                          >
                            <div className="text-name-game">
                              Назва: {game.title}
                            </div>
                          </Link>
                          <div className="platrorm-wrapper">
                            <p className="platform">
                              <span className="text-platfrom">Id: </span>
                              {game.id}
                            </p>
                          </div>
                          <div className="platrorm-wrapper">
                            <p className="platform">
                              <span className="text-platfrom">Платформа </span>
                              {game.plantofm}
                            </p>
                          </div>
                        </div>
                      </a>
                      <section className="counter_game">
                        <button
                          onClick={() => handleIncrement(game.id)}
                          className="add"
                        >
                          +
                        </button>
                        <p>{gameQuantities[game.id] || 0}</p>
                        <button
                          onClick={() => handleDecrement(game.id)}
                          className="minus"
                        >
                          -
                        </button>
                      </section>
                      <span className="right-side">
                        <ImCross
                          className="cross"
                          fill="red"
                          onClick={() => dispatch(removeGame(game.id))}
                        />
                        <div className="wrapper-prise1">
                          <h1 className="prises">{game.price}</h1>
                          <MdEuro style={{ fontSize: 25 }} />
                        </div>
                      </span>
                    </span>
                  )
                )
              ) : (
                <p>Ігор немає в кошику</p>
              )}
            </section>

            {totalPrice ? (
              <section className="wrapper-menu-second">
                <div className="Header-Content">
                  <div className="Set-value-Game">ТВОЄ ЗАМОВЛЕННЯ</div>
                  <div className="Prise-Block">
                    <p className="amount">
                      <div className="sum-text">Сума покупки</div>
                      <div className="sum-number">{totalPriceSet} €</div>
                    </p>
                    <p className="amount">
                      <div className="sum-text">Разом до пукупки</div>
                      <div className="sum-number">{totalPriceSet} €</div>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="Button-Content">
                  <p className="amount">
                    <div className="sum-text">Всього</div>
                    <div className="sum-number-full">
                      <p className="total_price">{totalPriceSet} €</p>
                    </div>
                  </p>
                  <div className="btn-section">
                    <GotoBuy />
                  </div>
                </div>
              </section>
            ) : null}
          </div>
        ) : fovorite ? (
          <section className="wrapper-menu">
            <div className="Set-value-Game">
              Мої Вподобані ігри
              <span className="count-Game"> {favoriteCount}</span>
            </div>

            {favoriteGames.length > 0 ? (
              favoriteGames.map(
                (game: {
                  id: number;
                  title: string;
                  price: number;
                  img: string;
                  plantofm: string;
                }) => (
                  <span className="wrapper_account" key={game.id}>
                    <a>
                      <img
                        src={game.img}
                        className="Photo_List-favoriteliked"
                        alt={game.title}
                      />

                      <div className="content-section">
                        <div className="text-name-game">
                          Назва: {game.title}
                        </div>
                        <div className="platrorm-wrapper">
                          <p className="platform">
                            <span className="text-platfrom">Id: </span>
                            {game.id}
                          </p>
                        </div>
                        <div className="platrorm-wrapper">
                          <p className="platform">
                            <span className="text-platfrom">Платформа </span>
                            {game.plantofm}
                          </p>
                        </div>
                      </div>
                    </a>
                    <span className="right-side">
                      <ImCross
                        className="cross"
                        fill="red"
                        onClick={() => dispatch(removeselected(game.id))}
                      />
                      <div className="wrapper-priseLiked">
                        <h1 className="prises">{game.price}</h1>
                        <MdEuro style={{ fontSize: 25 }} />
                      </div>
                    </span>
                  </span>
                )
              )
            ) : (
              <p>Немає обраних ігор</p>
            )}
          </section>
        ) : null}
      </section>

      <Fotter />
    </>
  );
};

export default MyAccount;
