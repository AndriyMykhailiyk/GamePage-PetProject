import "../GamePage.scss";
import { FC } from "react";
import { IconType } from "react-icons";
import Bunner2 from "../../Photo_Folder/2023-preview-splash.webp";
import { incrementselected, removeGame, removeselected } from "../../Redux/counterSlice";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
interface Game {
  id: number;
  title: string;
  img: string;
  plantofm: string;
  price: number;
}

type SelectedGame = {
  id: number;
};

interface PopularGameProps {
  addedGames: () => void;
  Flame: string;
  MdEuro: IconType;
  handleFavoriteToggle: (game: Game) => void;
  dispatch: (action: any) => void;
  increment: (action: any) => void;
  datanew: Game[] | null;
  selectedGames: SelectedGame[];
}

const PopularGame: FC<PopularGameProps> = ({
  Flame,
  MdEuro,
  dispatch,
  increment,
  datanew,
  selectedGames,
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
    if (selectedGames.some((game: { id: number }) => game.id === id)) {
      dispatch(removeselected(id, title, plantofm, price, img)); // Видалити з обраних
    } else {
      dispatch(incrementselected({ id, title, plantofm, price, img })); // Додати до обраних
    }
  };


  return (
    <>
      <section className="wrapper_section">
        <div className="Header_Category_2">
          <img src={Flame} className="Svg_Flame" alt="Flame" />
          <h1 className="popular">Новинки</h1>
        </div>

        {datanew ? (
          <div className="List_Section">
            {datanew.map((game: {
                          id: number;
                          img: string;
                          title: string;
                          price: number;
                          plantofm: string;
                        }) => (
              <div className="Search_List_Item" key={game.id}>
                <Link to={`/About/${game.id}`} state={{ games: datanew }}>
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
                            ? "btn_sec1"
                            : "btn_sec"
                        }
                      >
                        {addedGames.some(
                          (g: { id: number }) => g.id === game.id
                        )
                          ? "Придбато"
                          : "Придбати"}
                      </button>
                    </span>
                  </div>

                  <div className="wrapper-platform23">
                    <div className="platfrom23">
                      <div className="wrapper-section-modale23">
                        <p className="game-Title-platrorm23">{game.plantofm}</p>
                      </div>
                      {selectedGames.some((g: {id: number}) => g.id === game.id) ? (
                        <FaHeart
                          className="FaRegHeartGamePage"
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
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Даних немає</p>
        )}
      </section>
      <div className="wrapper_Img">
        <img alt="Poster_page" src={Bunner2} className="poster_img" />
      </div>
    </>
  );
};

export default PopularGame;
