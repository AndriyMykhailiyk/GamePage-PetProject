import Logo from "./Logo.png";
import "./Header.scss";
import InputComponent from "./InputCom/InputComponent";
import Btn from "../Btn/Btn";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();
  const ActivePage = (path: string) => {
    return location.pathname === path
      ? { color: "yellow" }
      : { color: "white" };
  };


  
  const count = useSelector(
    (state: { counter: { count: number } }) => state.counter.count
  );
  return (
    <>
      <header className="wrapper">
        <div className="about_header">
          <div className="left_side">
            <Link to="/" className="Hello">
              <img src={Logo} alt="Logo_Header" className="Logo_Header" />
            </Link>
            <ul className="ul_header">
              <Link
                to="/Games"
                style={{
                  ...ActivePage("/Games"),
                }}
              >
                <li>Ігри</li>
              </Link>

              <Link
                to="/FullGame"
                style={{
                  ...ActivePage("/FullGame"),
                }}
              >
                <li>Магазин</li>
              </Link>

              <Link
                to="/Help_Page"
                style={{
                  ...ActivePage("/Help_Page"),
                }}
              >
                <li>Допомога</li>
              </Link>




<div className="wrapper-header-counter">
              <Link
                to="/MyAccount"
                style={{
                  ...ActivePage("/MyAccount"),
                }}
              >
                <li className="acc">Акаунт</li>

                
                <div className="wrapper-count-game-header">
                <p className="count-game">{count}</p>
                </div>
              </Link>
              </div>





            </ul>
          </div>
          <InputComponent />
          <section className="tel-section">
            <div className="wrapper-tel">
              <a className="tel-a-te" href="tel:+8009008729">
                0 800 900 87 29
              </a>
              <p className="tel-p-text">ДЗВОНИТИ БЕЗКОШТОВНО</p>
            </div>
          </section>
          <div className="right_side">
            <Link to="/Download">
              <Btn />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
