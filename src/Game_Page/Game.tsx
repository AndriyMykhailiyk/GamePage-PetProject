import Header from "../Header/Header";
import Fotter from "../Footer/Fotter";
import "./GamePage.scss";
import { SetStateAction, useEffect, useState } from "react";
import { MdEuro } from "react-icons/md";
import Flame from "./flame.png";
import { useSelector, useDispatch } from "react-redux";
import { increment, removeGame } from "../Redux/counterSlice.js";
import PopularGame from "./NewGame/NewsGame.js";
import { Link } from "react-router-dom";
import { CounterState } from "../Redux/counterSlice";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { incrementselected, removeselected } from "../Redux/counterSlice";
import { FaArrowDown } from "react-icons/fa";

const GamePage = () => {
  const [data, setData] = useState([]);
  const [datanew, setDataNew] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4); // Стан для кількості видимих ігор

  const loadMoreGames = () => {
    setVisibleCount(prevCount => prevCount + 4); // Завантажити ще 4 гри
  };



  const addedGames = useSelector(
    (state: { counter: { addedGames: [] } }) => state.counter.addedGames
  );

  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0); // Min price state
  const [maxPrice, setMaxPrice] = useState<number>(200); // Max price state
  const [menu, setMenu] = useState<boolean>(false);

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
    if (selectedGames.some((game) => game.id === id)) {
      dispatch(removeselected(id)); // Тепер тільки ID
    } else {
      dispatch(incrementselected({ id, title, plantofm, price, img }));
    }
  };
  
  useEffect(() => {
    fetch(
      "https://api.mockfly.dev/mocks/60fe8fb4-6deb-45bf-a8f8-8334d38c7cb1/Games"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.mockfly.dev/mocks/60fe8fb4-6deb-45bf-a8f8-8334d38c7cb1/NewGames",
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((json) => {
        setDataNew(json);
      });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    setSearch(e.target.value);
  };

  const HandleMenu = () => {
    setMenu(!menu);
  };


  const handlePriceFilter = (newMinPrice: SetStateAction<number>, newMaxPrice: SetStateAction<number>) => {
    if (minPrice === newMinPrice && maxPrice === newMaxPrice) {
      setMinPrice(0);
      setMaxPrice(1000);
    } else {
      setMinPrice(newMinPrice);
      setMaxPrice(newMaxPrice);
    }
    setMenu(false); 
  };

  const filteredProducts = data.filter(
    (game: { price: number, title:string }) =>
      game.price >= minPrice && game.price <= maxPrice &&
      game.title && game.title.toLowerCase().includes(search)
  );
  return (
    <>
      <Header />
      <div className="wrapper-main0section-2">
      <form>
            <input
              autoComplete="off"
              placeholder="Я шукаю"
              type="text"
              className="input12"
              onChange={handleSearch}
              value={search}
            />
          </form>

         
      </div>
      {filteredProducts.length > 0 ? (
        <section className="Main_Section_2">
          <div className="wrapper-991009090">
            <div className="wrapper-99100">
             <section className="wrapper-prise">
              <h2 className="Text-mostsummer">ПОПУЛЯРНІ ІГРИ ОСЕНІ 2024</h2>
                    <div className="List_Section">
                      {filteredProducts.slice(0, visibleCount).map(
                        (game: {
                          id: number;
                          img: string;
                          title: string;
                          price: number;
                          plantofm: string;
                        }) => (
                          <div className="Search_List_Item" key={game.id}>
                            <Link
                              to={`/About/${game.id}`}
                              state={{ games: data }}
                            >
                              {" "}
                              {/* Передача даних */}
                              <img
                                src={game.img}
                                className="Photo_List"
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
                          ? "btn_games_pay"
                          : "btn_games"
                      }
                    >
                      {addedGames.some((g: any) => g.id === game.id)
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
                    {selectedGames.some(
                      (g: { id: number }) => g.id === game.id
                    ) ? (
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
                        )
                      )}
                    </div>
                    {visibleCount < filteredProducts.length && ( // Показати кнопку, якщо є ще ігри для завантаження
              <button onClick={loadMoreGames} className="load-more-btn">Завантажити ще 4 гри</button>
            )}
                </section>
   
                <div className="btnmenuprise">
          <div
            className={menu ? "wrapper-text-li" : "wrapper-text-li1"}
            onClick={HandleMenu}
          >
            <p className="wrapper-text-li-header">Ціна</p>
            <FaArrowDown />
          </div>
          {menu ? (
            <div className="wrapper-menu-prise">
              <button
                onClick={() => handlePriceFilter(0, 0)}
                className={
                  minPrice === 0 && maxPrice === 0 ? "range0-11" : "range0-10"
                }
              >
                Безкоштовно
              </button>

              <button
                onClick={() => handlePriceFilter(0, 10)}
                className={
                  minPrice === 0 && maxPrice === 10 ? "range0-11" : "range0-10"
                }
              >
                До 10
              </button>
              <button
                onClick={() => handlePriceFilter(20, 30)}
                className={
                  minPrice === 20 && maxPrice === 30 ? "range0-11" : "range0-10"
                }
              >
                від 20 до 30
              </button>
              <button
                onClick={() => handlePriceFilter(40, 50)}
                className={
                  minPrice === 40 && maxPrice === 50 ? "range0-11" : "range0-10"
                }
              >
                від 40 до 50
              </button>
              <button
                onClick={() => handlePriceFilter(60, 70)}
                className={
                  minPrice === 60 && maxPrice === 70 ? "range0-11" : "range0-10"
                }
              >
                від 60 до 70
              </button>
              <button
                onClick={() => handlePriceFilter(80, 1000)}
                className={
                  minPrice === 80 && maxPrice === 1000
                    ? "range0-11"
                    : "range0-10"
                }
              >
                Більше ніж 80
              </button>
            </div>
          ) : null}
        </div>
          
            </div>
            <section className="New_Page">
            <PopularGame
              handleFavoriteToggle={handleFavoriteToggle}
              selectedGames={selectedGames}
              addedGames={addedGames}
              Flame={Flame}
              MdEuro={MdEuro}
              dispatch={dispatch}
              increment={increment}
              datanew={datanew}
            />
          </section>
          </div>

        </section>
                   ) : (
                    <section className="wrapper_section-NOTHING">
                    <p className="texttext">Ігор за вибраною категорією немаю, зачекайте допоки вони появляться в нашій бібліотеці</p>
                    <div className="btnmenuprise">
          <div
            className={menu ? "wrapper-text-li" : "wrapper-text-li1"}
            onClick={HandleMenu}
          >
            <p className="wrapper-text-li-header">Ціна</p>
            <FaArrowDown />
          </div>
          {menu ? (
            <div className="wrapper-menu-prise">
              <button
                onClick={() => handlePriceFilter(0, 0)}
                className={
                  minPrice === 0 && maxPrice === 0 ? "range0-11" : "range0-10"
                }
              >
                Безкоштовно
              </button>

              <button
                onClick={() => handlePriceFilter(0, 10)}
                className={
                  minPrice === 0 && maxPrice === 10 ? "range0-11" : "range0-10"
                }
              >
                До 10
              </button>
              <button
                onClick={() => handlePriceFilter(20, 30)}
                className={
                  minPrice === 20 && maxPrice === 30 ? "range0-11" : "range0-10"
                }
              >
                від 20 до 30
              </button>
              <button
                onClick={() => handlePriceFilter(40, 50)}
                className={
                  minPrice === 40 && maxPrice === 50 ? "range0-11" : "range0-10"
                }
              >
                від 40 до 50
              </button>
              <button
                onClick={() => handlePriceFilter(60, 70)}
                className={
                  minPrice === 60 && maxPrice === 70 ? "range0-11" : "range0-10"
                }
              >
                від 60 до 70
              </button>
              <button
                onClick={() => handlePriceFilter(80, 1000)}
                className={
                  minPrice === 80 && maxPrice === 1000
                    ? "range0-11"
                    : "range0-10"
                }
              >
                Більше ніж 80
              </button>
            </div>
          ) : null}
        </div>
          

                    </section>
                  )}


      <Fotter />
    </>
  );
};

export default GamePage;
