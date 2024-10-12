import "./Footer.scss";
import Logo from "../Swiper_Photo/Footer_Photo/Logo (2).png";

import { FaTwitch } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
const Fotter = () => {
  const ActivePage = (path: string) => {
    return location.pathname === path
      ? { color: "yellow" }
      : { color: "white" };
  };

  return (
    <>
      <footer className="wrapper-2">
        <div className="about_header">
          <div className="left_side34">
            <div className="Img">
              <img src={Logo} alt="Logo_Game" />
            </div>

            <div className="Text_Header">
              <div className="Text_Header_Cap">
                <Link to="/Contacts">
                  <a className="contacts">КОНТАКТИ</a>
                </Link>

                <Link to="/AboutUs">
                  <a className="contacts">ПРО НАС</a>
                </Link>
                <Link
                  to="/Help_Page"
                  style={{
                    ...ActivePage("/Help_Page"),
                  }}
                >
                  <a className="contacts">ПІДТРИМКА</a>
                </Link>
                <a className="contacts">ВАКАНСІЇ</a>
              </div>
              <div className="Text_Header_Cap_Under">
                <p className="YWR">©2023 Rockstar Games, Inc. - YWR Studio. </p>
              </div>
            </div>
          </div>
          <div className="right_side">
            <div className="wrapper-text">
              <p className="text-wrapper-contacts">Контакти</p>
            </div>
            <div className="wrapper_section_photo">
              <ul>
                <li>
                  <a href="http://www.twich.com">
                    <IconContext.Provider
                      value={{ color: "white", className: "contactIcon" }}
                    >
                      <FaTwitch size="2em" title="Twitch" />
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a href="http://www.instagram.com">
                    <IconContext.Provider
                      value={{ color: "white", className: "InstagramIcon" }}
                    >
                      <FaInstagram size="2em" title="Instagram" />
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a href="http://www.twitter.com">
                    <IconContext.Provider
                      value={{ color: "white", className: "TwitterIcon" }}
                    >
                      <LuTwitter size="2em" title="Twitter" />
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a href="http://www.youtube.com">
                    <IconContext.Provider
                      value={{ color: "white", className: "YoutubeIcon" }}
                    >
                      <AiOutlineYoutube size="2em" title="Youtube" />
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a href="http://www.facebook.com">
                    <IconContext.Provider
                      value={{ color: "white", className: "FacebookIcon" }}
                    >
                      <FaFacebookSquare size="2em" title="Facebook" />
                    </IconContext.Provider>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Fotter;
