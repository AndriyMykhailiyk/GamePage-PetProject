import "./MenuSelectGame.scss";
import { IoCube } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { TbMoneybag } from "react-icons/tb";

interface MenuSelectGameProps {
  description: boolean;
  elseStatePage: boolean;
  moreinf: boolean;
  SetDescription: (value: boolean) => void;
  Setmoreinf: (value: boolean) => void;
  SetelseStatePage: (value: boolean) => void;
}

const MenuSelectGame: React.FC<MenuSelectGameProps> = ({
  description,
  elseStatePage,
  SetelseStatePage,
  SetDescription,
  moreinf,
  Setmoreinf,
}) => {
  const HandleDescription = () => {
    SetDescription(true);
    SetelseStatePage(false);
    Setmoreinf(false);
  };

  const HandleMoreInf = () => {
    SetDescription(false);
    SetelseStatePage(false);
    Setmoreinf(true);
  };

  const HandleElsepgaw = () => {
    SetDescription(false);
    SetelseStatePage(true);
    Setmoreinf(false);
  };

  return (
    <>
      <div className="select-block">
        <div className="wrapper-select">
          <div className="ul-container">
            <ul className="menu-select">
              <li>
                <a
                  className={
                    description ? "il-menu-el-about-select" : "il-menu-el-about"
                  }
                  onClick={HandleDescription}
                > 
                  <IoCube size={25} className="icon-menu"/>
                  Опис{" "}
                </a>
              </li>
              <li>
                <a
                  className={
                    moreinf ? "il-menu-el-about-select" : "il-menu-el-about"
                  }
                  onClick={HandleMoreInf}
                >
                  <GoGear size={25} className="icon-menu"/>
                  Детальна інформація
                </a>
              </li>
              <li>
                <a
                  className={
                    elseStatePage
                      ? "il-menu-el-about-select"
                      : "il-menu-el-about"
                  }
                  onClick={HandleElsepgaw}
                >
                  <TbMoneybag size={25} className="icon-menu"/>
                  Інше
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSelectGame;
