import Logo from "./Logo.png";
import "./Header.scss";
import InputComponent from "./InputCom/InputComponent";
import Btn from "../Btn/Btn";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const ActivePage = (path: string) => {
    return location.pathname === path
      ? { color: "yellow" }
      : { color: "white" };
  };

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

              <Link
                to="/MyAccount"
                style={{
                  ...ActivePage("/MyAccount"),
                }}
              >
                <li className="acc">Акаунт</li>
              </Link>
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
