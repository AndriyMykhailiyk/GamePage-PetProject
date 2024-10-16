import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../Redux/counterSlice.ts";
import { MdEuro } from "react-icons/md";
import { FaArrowDownLong } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import Header from "../Header/Header";
import Fotter from "../Footer/Fotter.js";
import "./Shop.scss";
import "../Game_Page/GamePage.scss";
import Xbox from "./XboxPage/XboxGame.js";
import PlayStation from "./PlayStation/PlayStation.js";
import Nintendo from "./Nintendo/Nintendo.js";
import SteamDeck from "./SteamDeck/SteamDeckPage.js";
import PcPage from "./Pc/PcPage.js";
import LowPrise from "./DwopDownMenu/FilteredMenu.tsx";
import NewGamePage from "./NewGamePage/NewGamePage.tsx";
import { useLocation } from "react-router-dom";

const ShopPage = () => {
  const [data, setData] = useState<[]>([]);
  const dispatch = useDispatch();
  const [XBox, setXBox] = useState<boolean>(false);
  const [PlayStationuse, setPlayStation] = useState<boolean>(false);
  const [Nintendostate, setNintendo] = useState<boolean>(false);
  const [SteamDeckstate, setSteamDeck] = useState<boolean>(false);
  const [Pcstate, setPcstate] = useState<boolean>(false);
  const [MenuBlock, setMenuBlock] = useState<boolean>(false);
  const [price, setPrise] = useState<boolean>(false);
  const [NewGame, setNewGame] = useState<boolean>(false);
  const location = useLocation();
  const isActive = location.state?.active;
  const HandleLoPrise = () => {
    setSteamDeck(Nintendostate);
    setNintendo(Nintendostate);
    setPlayStation(PlayStationuse);
    setPcstate(Pcstate);
    setXBox(XBox);
    setPrise(!price);
    setNewGame(NewGame);
  };
  const HandleXboxClick = () => {
    setSteamDeck(Nintendostate);
    setNintendo(Nintendostate);
    setPlayStation(PlayStationuse);
    setPcstate(Pcstate);
    setXBox(!XBox);
    setPrise(price);
    setNewGame(NewGame);
  };

  const HandlePlayStationClick = () => {
    setSteamDeck(Nintendostate);
    setNintendo(Nintendostate);
    setPlayStation(!PlayStationuse);
    setPcstate(Pcstate);
    setXBox(XBox);
    setPrise(price);
    setNewGame(NewGame);
  };

  const HandleNintendoClick = () => {
    setSteamDeck(Nintendostate);
    setNintendo(!Nintendostate);
    setPlayStation(PlayStationuse);
    setPcstate(Pcstate);
    setXBox(XBox);
    setPrise(price);
    setNewGame(NewGame);
  };

  const HandleSteamDeckClick = () => {
    setSteamDeck(Nintendostate);
    setNintendo(!Nintendostate);
    setPlayStation(PlayStationuse);
    setPcstate(Pcstate);
    setXBox(XBox);
    setPrise(price);
    setNewGame(NewGame);
  };

  const HandlePcClick = () => {
    setSteamDeck(Nintendostate);
    setNintendo(Nintendostate);
    setPlayStation(PlayStationuse);
    setPcstate(!Pcstate);
    setXBox(XBox);
    setPrise(price);
    setNewGame(NewGame);
  };

  const HandleNewGame = () => {
    setSteamDeck(Nintendostate);
    setNintendo(Nintendostate);
    setPlayStation(PlayStationuse);
    setPcstate(Pcstate);
    setXBox(XBox);
    setPrise(price);
    setNewGame(!NewGame);
  };

  useEffect(() => {
    fetch(
      "https://api.mockfly.dev/mocks/60fe8fb4-6deb-45bf-a8f8-8334d38c7cb1/Games",
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  type Plantofm = {
    id: number;
    price: number;
    plantofm: any;
    data_resile: string;
  };

  const filteredByGenre = XBox
    ? data.filter((game: Plantofm) => game.plantofm === "Xbox")
    : data;

  const filteredByPlayStation = PlayStationuse
    ? data.filter((game: Plantofm) => game.plantofm === "PlayStation")
    : data;

  const filteredByNintendo = Nintendostate
    ? data.filter((game: Plantofm) => game.plantofm === "Nintendo")
    : data;

  const filteredBySteamDeck = SteamDeckstate
    ? data.filter((game: Plantofm) => game.plantofm === "SteamDeck")
    : data;

  const filteredByPc = Pcstate
    ? data.filter((game: Plantofm) => game.plantofm === "Pc")
    : data;

  const filteredGamesPrise = price
    ? data.filter((game: Plantofm) => game.price === 40)
    : data;

  const someRecentDate = new Date("20-20-2020");
  const filteredGamesNew = NewGame
    ? data.filter(
        (game: Plantofm) => new Date(game.data_resile) > someRecentDate
      )
    : data;

  const HandleSeeMenu = () => {
    setMenuBlock(!MenuBlock);
  };

  return (
    <>
      <Header />
      <section className="wrapperPage">
        <div className="Main-section">
          <div className="Menu_Menu">
            <form>
              <ul>
                <li>
                  <a
                    onClick={HandlePlayStationClick}
                    style={{ color: PlayStationuse ? "#fcaf17" : "white" }}
                    id="PlayStation"
                  >
                    PlayStation
                  </a>
                </li>
                <li>
                  <a
                    onClick={HandleXboxClick}
                    style={{ color: XBox ? "#fcaf17" : "white" }}
                  >
                    XBox
                  </a>
                </li>
                <li>
                  <a
                    onClick={HandleNintendoClick}
                    style={{ color: Nintendostate ? "#fcaf17" : "white" }}
                  >
                    Nintendo
                  </a>
                </li>
                <li>
                  <a
                    onClick={HandleSteamDeckClick}
                    style={{ color: SteamDeckstate ? "#fcaf17" : "white" }}
                  >
                    SteamDeck
                  </a>
                </li>
                <li>
                  <a
                    onClick={HandlePcClick}
                    style={{ color: Pcstate ? "#fcaf17" : "white" }}
                  >
                    Pc
                  </a>
                </li>

                <li>
                  <CiMenuBurger
                    color="white"
                    onClick={HandleSeeMenu}
                    className={`Icon-Arrow ${MenuBlock ? "flipt" : ""}`}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>

        {MenuBlock ? (
          <>
            <div className="Menu_Menu">
              <form>
                <ul>
                  <li>
                    <a
                      style={{ color: price ? "#fcaf17" : "white" }}
                      id="Prise"
                      onClick={HandleLoPrise}
                    >
                      За ціною
                      <FaArrowDownLong />
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={HandleNewGame}
                      style={{ color: NewGame ? "#fcaf17" : "white" }}
                    >
                      Нові
                    </a>
                  </li>
                  <li>
                    <a style={{ color: Nintendostate ? "#fcaf17" : "white" }}>
                      Популярні
                    </a>
                  </li>
                  <li>
                    <a style={{ color: SteamDeckstate ? "#fcaf17" : "white" }}>
                      За датою виходу
                    </a>
                  </li>
                </ul>
              </form>
            </div>
          </>
        ) : null}

        <section className="list_section">
          <div className="wrapper_list">
            {XBox ? (
              <Xbox
                filteredByGenre={filteredByGenre}
                increment={increment}
                removeselected={function (): {
                  id: number;
                  title: string;
                  plantofm: string;
                  price: number;
                  img: string;
                } {
                  throw new Error("Function not implemented.");
                }}
                MdEuro={undefined}
              />
            ) : PlayStationuse ? (
              <PlayStation
                filteredByPlayStation={filteredByPlayStation}
                MdEuro={MdEuro}
                dispatch={dispatch}
                increment={increment}
              />
            ) : Nintendostate ? (
              <Nintendo
                filteredByNintendo={filteredByNintendo}
                dispatch={dispatch}
                increment={increment}
              />
            ) : SteamDeck ? (
              <SteamDeck
                filteredBySteamDeck={filteredBySteamDeck}
                dispatch={dispatch}
                increment={increment}
                removeselected={function (): {
                  id: number;
                  title: string;
                  plantofm: string;
                  price: number;
                  img: string;
                } {
                  throw new Error("Function not implemented.");
                }}
                MdEuro={undefined}
              />
            ) : Pcstate && isActive ? (
              <PcPage
                filteredByPc={filteredByPc}
                dispatch={dispatch}
                increment={increment}
              />
            ) : price ? (
              <LowPrise
                filteredGamesPrise={filteredGamesPrise}
                dispatch={dispatch}
                increment={increment}
              />
            ) : NewGame ? (
              <NewGamePage
                filteredGamesNew={filteredGamesNew}
                dispatch={dispatch}
                increment={increment}
              />
            ) : (
              <div className="loader"></div>
            )}
          </div>
        </section>
      </section>
      <Fotter />
    </>
  );
};

export default ShopPage;
