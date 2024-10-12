import Background from "../Photo_Folder/fundo.png";
import { Link } from "react-router-dom";
import "./Bunner.scss";
import Right_Photo from "../Photo_Folder/rgl-rdr2-buynow 1.png";
import LogoSection from "../Swiper_Photo/Logo0(1).png";
import { BtnSection } from "../Btn/Btn";

const Bunner = () => {
  return (
    <>
      <section className="wrapper">
        <div className="Photo">
          <img src={Background} alt="Background" className="Background_Image" />
          <img src={Right_Photo} alt="Background" className="Overlay_Image" />
          <div className="section">
            <div className="Header_section">
              <img src={LogoSection} className="Logo_Gta" />

              <h2 className="Text_Section_Header">
                Games
                <br /> Launcher
              </h2>
            </div>
            <p className="description_wrapper_photo">
              Todos os seus jogos
              <br /> em um só lugar.
            </p>{" "}
            <br />

            <Link to="/Download">
            <BtnSection />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bunner;
