import Header from "../../Header/Header";
import Fotter from "../../Footer/Fotter";
import { IoMdInformationCircleOutline } from "react-icons/io";

import "./Contacts.scss";
const Contacts = () => {
  return (
    <>
      <Header />

      <section className="wrapper">
        <div className="Main_Section">
          <span className="Header_Section">
            <h1 className="Hedaer_Text">Контакти</h1>
          </span>

          <section className="Contacts_Section">
            <div className="wrapper_contact_section">
              <span className="Tel_span_el">
                <a className="Tel">0 800 33 41 45</a>
                <IoMdInformationCircleOutline size={30} className="icon" />
              </span>

              <span className="Tel_span_text">
                <p className="Tel_text">
                  Є питання стосовно товару, замовлення або просто хочеш <br />
                  поспілкуватися з нашими експертами та дізнатися щось нове?
                  <br />
                  Дзвони, будемо раді тебе чути!
                </p>
              </span>
            </div>
          </section>
        </div>
      </section>
      <Fotter />
    </>
  );
};

export default Contacts;
