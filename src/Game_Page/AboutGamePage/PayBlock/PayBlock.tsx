import "./PayBlock.scss";
import { MdArrowForwardIos } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GiMailbox } from "react-icons/gi";
import { useState } from "react";
import { FaPaypal } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";

const PayBlock = () => {
  const [delivery, setDelivery] = useState(true);
  const [Pay, setPay] = useState(false);
  const [grant, setgrant] = useState(false);

  const HandleDelivery = () => {
    setDelivery(true);
    setPay(false);
    setgrant(false);
  };

  const HandleGrant = () => {
    setDelivery(false);
    setPay(false);
    setgrant(true);
  };

  const HandlePay = () => {
    setPay(true);
    setgrant(false);
    setDelivery(false);
  };

  return (
    <>
      <section className="wrapper-delivery-block">
        <div className="section-block">
          <div className="ul-block">
            <div className="wrapper-ul-list-block">
              <ul className="ul-list">
                <li className="el-ul" onClick={HandleDelivery}>
                  <div
                    className={
                      delivery ? "product-delivery-active" : "product-delivery"
                    }
                  >
                    ДОСТАВКА
                  </div>
                  <MdArrowForwardIos size={20} />
                </li>

                <li className="el-ul" onClick={HandlePay}>
                  <div
                    className={
                      Pay ? "product-delivery-active" : "product-delivery"
                    }
                  >
                    ОПЛАТА
                  </div>
                  <MdArrowForwardIos size={20} />
                </li>
                <li className="el-ul" onClick={HandleGrant}>
                  {" "}
                  <div
                    className={
                      grant ? "product-delivery-active" : "product-delivery"
                    }
                  >
                    ГАРАНТІЯ
                  </div>
                  <MdArrowForwardIos size={20} />
                </li>
              </ul>
            </div>
          </div>

          {delivery ? (
            <div className="wrapper-content-block">
              <div className="contend-block">
                <h2 className="sity-block">
                  Доставка у місто
                  <span className="city-change">
                    <a>Київ</a>
                    <FaPencilAlt className="pan" />
                  </span>
                </h2>
                <div className="wrapper-67">
                  <div className="new-mail-content">
                    <MdOutlineEmail size={30} className="mail-svg" />
                    <div className="mail">
                      <p className="header-mail">Нова Пошта</p>

                      <p className="sub-header-mail">
                        Відправимо завтра, після 12:00
                      </p>
                    </div>
                  </div>
                  <div className="prise-ontent">
                    <h2>від 60 грн</h2>
                  </div>
                </div>
                <div className="wrapper-67">
                  <div className="new-mail-content">
                    <GiMailbox size={30} className="mail-svg" />
                    <div className="mail">
                      <p className="header-mail">Укр Пошта</p>

                      <p className="sub-header-mail">Відправимо в понеділок</p>
                    </div>
                  </div>
                  <div className="prise-ontent">
                    <h2>від 40 грн</h2>
                  </div>
                </div>
              </div>
            </div>
          ) : Pay ? (
            <div className="wrapper-content-block">
              <div className="contend-block">
                <div className="text-div">
                  <FaCcPaypal className="FaPaypal" />
                  <div className="text-wrap">
                    <h2 className="pay-block"> Накладений платіж</h2>
                    <p className="sub-delivery-block">
                      Через Нову пошту або Укрпошту
                    </p>
                  </div>
                </div>
              </div>
              <div className="contend-block">
                <div className="text-div">
                  <FaPaypal className="FaPaypal" />
                  <div className="text-wrap">
                    <h2 className="pay-block"> Кредит або оплата частинами</h2>
                    <p className="sub-delivery-block">
                      Оплата Частинами від Monobank та ПриватБанк,
                      <br /> Плати Пізніше
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : grant ? (
            <div className="wrapper-content-block">
              <div className="contend-block">
                <div className="text-div">
                  <MdDeliveryDining className="FaPaypal" size={27} />
                  <div className="text-wrap-del">
                    <h2 className="back-block"> Повернення та обмін</h2>
                    <p className="sub-delivery-block">14 днів</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>Нічого</>
          )}
        </div>
      </section>
    </>
  );
};
export default PayBlock;
