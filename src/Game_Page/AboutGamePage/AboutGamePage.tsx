import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "../../Header/Header";
import Fotter from "../../Footer/Fotter";
import { useSelector, useDispatch } from "react-redux";
import "./AboutGamePage.scss";
import { incrementselected, removeselected } from "../../Redux/counterSlice";
import { increment, removeGame } from "../../Redux/counterSlice";
import { ImCheckmark } from "react-icons/im";
import { IoShieldCheckmark } from "react-icons/io5";
import { CounterState } from "../../Redux/counterSlice";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import MenuSelectGame from "./MenuComponent/MenuSelectGame";
import PayBlock from "./PayBlock/PayBlock";
import DescriptionPage from "./Description/DescriptionPage";
import MoreInfPage from "./MoreInfPage/MoreInfPage";
import Carousel from "../../Carusel/Carusel";

const AboutGame = () => {
  const [activeBtn] = useState({ 1: false, 2: false });
  const { id } = useParams();
  const location = useLocation();
  const { games } = location.state; // Отримання ігор з state
  const game = games.find((g: { id: number }) => {
    if (typeof id === "string") {
      return g.id === parseInt(id, 10);
    }
    return false;
  });

  const addedGames = useSelector(
    (state: { counter: { addedGames: { id: number }[] } }) =>
      state.counter.addedGames
  );

  const dispatch = useDispatch();

  const [description, SetDescription] = useState(true);
  const [moreinf, Setmoreinf] = useState(false);
  const [elseStatePage, SetelseStatePage] = useState(false);

  const monthlyPrice = Math.floor(game.price / 12);
  const D = monthlyPrice.toFixed(2);
  const selectedGames = useSelector(
    (state: CounterState) => state.counterSelected.SelectedGames
  );

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

  return (
    <>
      <Header />
      <section className="wrapper-about">
        <div className="layout">
          <img src={game.img} className="Photo_List-about" alt={game.title} />

          <div className="about-Game-Block">
            <div className="layout-wrapper">
              <h1 className="header-full">{game.title}</h1>
            </div>
            <hr />
            <div className="layout-language">
              <p className="header-full-language">МОВА</p>
              <div className="product-infolist">
                <a id="1" className="box">
                  <span
                    className={
                      activeBtn[1]
                        ? "product_active-Btn-Item-get"
                        : "product_active-Btn-Item"
                    }
                  >
                    Українські Субтитри
                  </span>
                </a>
                <a id="2" className="box">
                  <span
                    className={
                      activeBtn[2]
                        ? "product_active-Btn-Item-get"
                        : "product_active-Btn-Item"
                    }
                  >
                    Англійська версія
                  </span>{" "}
                </a>
              </div>
            </div>
            <hr />
            <div className="wrapper-layout">
              <div className="layout-Btn">
                <span className="btn-liced">
                  <div className="wrapper-btn-about">
                    <div className="wrapper-btn-prise">
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
                          addedGames.some(
                            (g: { id: number }) => g.id === game.id
                          )
                            ? "AddGame"
                            : "NotAddGame"
                        }
                      >
                        {addedGames.some(
                          (g: { id: number }) => g.id === game.id
                        )
                          ? "Придбано"
                          : "Придбати"}
                      </button>

                      <div className="wrapper-prise">
                        <span className="wrapper-prise-old">
                          <a className="prs">{game.price} грн</a>

                          <a className="old-prs">{game.old_prise} грн</a>
                        </span>
                        <a className="stock">В наявності</a>
                      </div>
                    </div>
                    <div className="liked">
                      <span className="wrapper-selecter">
                        {selectedGames.some(
                          (g: { id: number }) => g.id === game.id
                        ) ? (
                          <FaHeart
                            className="FaRegHeart"
                            size={20}
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
                            size={20}
                            onClick={() => (
                              game.id,
                              game.img,
                              game.title,
                              game.plantofm,
                              game.price
                            )}
                          />
                        )}
                        {selectedGames.some(
                          (g: { id: number }) => g.id === game.id
                        ) ? (
                          <p
                            className="selecter-game"
                            onClick={() => handleFavoriteToggle(                            game.id,
                              game.title,
                              game.img,
                              game.plantofm,
                              game.price)}
                          >
                            Вибране
                          </p>
                        ) : (
                          <p
                            className="selecter-game"
                            onClick={() => handleFavoriteToggle(                            game.id,
                              game.title,
                              game.img,
                              game.plantofm,
                              game.price)}
                          >
                            Вибрати
                          </p>
                        )}
                      </span>
                    </div>
                  </div>
                </span>
                <div className="installment-plan">
                  <p className="text-roz">від {D} грн/міс.</p>
                </div>
              </div>
              <div className="seller-block-about">
                <div className="wrapper-dap">
                  <div className="hedaer-block">
                    <span className="header-text">
                      <IoShieldCheckmark size={30} className="svg-logo" />
                      <h2 className="header-text-about-page">
                        Захист покупців
                      </h2>
                    </span>
                  </div>
                  <ul className="ul-about89">
                    <hr
                      style={{
                        height: "0.2px",
                        backgroundColor: "white",
                        border: "none",
                        margin: "10px 0",
                      }}
                    />
                    <li className="li-el">
                      <p className="el-li-text">
                        Обмін та повернення товару протягом 14 днів
                      </p>{" "}
                      <ImCheckmark fill="#47BD80" size={13} />
                    </li>
                    <hr
                      style={{
                        height: "0.2px",
                        backgroundColor: "white",
                        border: "none",
                        margin: "10px 0",
                      }}
                    />
                    <li className="li-el">
                      <p className="el-li-text">
                        Обмін та повернення товару протягом 14 днів
                      </p>
                      <ImCheckmark fill="#47BD80" size={13} />
                    </li>{" "}
                    <hr
                      style={{
                        height: "0.2px",
                        backgroundColor: "white",
                        border: "none",
                        margin: "10px 0",
                      }}
                    />
                    <li className="li-el">
                      <p className="el-li-text">
                        Обмін та повернення товару протягом 14 днів
                      </p>{" "}
                      <ImCheckmark fill="#47BD80" size={13} />
                    </li>{" "}
                    <hr
                      style={{
                        height: "0.2px",
                        backgroundColor: "white",
                        border: "none",
                        margin: "10px 0",
                      }}
                    />
                    <li className="li-el">
                      <p className="el-li-text">
                        Обмін та повернення товару протягом 14 днів
                      </p>{" "}
                      <ImCheckmark fill="#47BD80" size={13} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MenuSelectGame
          elseStatePage={elseStatePage}
          SetelseStatePage={SetelseStatePage}
          description={description}
          SetDescription={SetDescription}
          moreinf={moreinf}
          Setmoreinf={Setmoreinf}
        />
        {description ? <DescriptionPage /> : moreinf ? <MoreInfPage /> : null}

        <PayBlock />
        <Carousel />
      </section>
      <Fotter />
    </>
  );
};

export default AboutGame;
