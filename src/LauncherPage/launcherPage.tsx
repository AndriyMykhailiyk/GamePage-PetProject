import Header from "../Header/Header";
import Fotter from "../Footer/Fotter";
import "./launcherPage.scss";
import Launcher from "./photoLauncherPage/grand_theft_auto_vi___trilogy_tribute_by_patrickbrown_dh1kqvm-pre.jpg";
import Download from "./Dowload/Download";
import { IoLogoWindows } from "react-icons/io5";

import { BtnGameSave } from "../Btn/Btn";
const LauncherPage = () => {
  const Headere = "найшвидший та зручний спосіб розпочати гру";
  const upperCaseStr = Headere.toUpperCase();

  return (
    <>
      <Header />
      <div className="wrapper">
        <section className="main_Section">
          <div className="wrapper_div_main_Section">
            <div className="wrapper_div_main_Section_Img">
              <img src={Launcher} alt="Main_Photo" className="mainPhoto" />

              <div className="wrapper_div_main_Section_Text">
                <div className="wrapper_div_main_Section_Text_Main">
                  <h1 className="wrapper_div_main_Section_Text_Header">
                    Launcher{" "}
                    <span className="Backgroud-Text">Best in World</span>
                  </h1>
                </div>
                <div className="wrapper_div_main_Section_Text_SubMain">
                  <p className="wrapper_div_main_Section_Text_SubHeader">
                    {upperCaseStr}
                  </p>
                </div>

                <section className="Instruction_Section">
                  <div className="wrapper_div_Instruction_Section">
                    <Download />
                  </div>
                </section>

                <section className="Question_Section">
                  <div className="wrapper_div_Question_Section">
                    <BtnGameSave />
                  </div>
                  <div className="sistem_qqq">
                    <span className="wrapper-svg">
                      {" "}
                      <IoLogoWindows />
                    </span>
                    <p className="setings">Windows 10 і вище</p>
                    <br />
                    <a className="underline_link">Системні вимоги</a>
                  </div>
                </section>

                <section className="Question_Section_Text">
                  <p className="Text_question">
                    Проблеми із встановленням? Подивися
                    <span className="wiki"> Wiki</span> або{" "}
                    <span className="wiki">звернися на підтримку</span>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Fotter />
    </>
  );
};
export default LauncherPage;
