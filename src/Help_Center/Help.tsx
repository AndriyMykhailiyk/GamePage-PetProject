import Header from "../Header/Header";
import Fotter from "../Footer/Fotter";
import "./Help.scss";
import { useState } from "react";
import axios from "axios";

const Help = ({}) => {
  const [CustomInputValue, SetCustomInputValue] = useState("");

  const HandleInputChange = (event: any) => {
    SetCustomInputValue(event.target.value);
  };

  const HandleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://api.mockfly.dev/mocks/60fe8fb4-6deb-45bf-a8f8-8334d38c7cb1/Client-Question",
        { data: CustomInputValue }, // Тіло запиту
        {
          headers: {
            "Content-Type": "application/json", // Заголовки
          },
        }
      );
      console.log("Response from server:", response.data);

      if (CustomInputValue) {
        alert("Дані успішно відправлено");
      } else {
        alert("Дані Не успішно відправлено");
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <>
      <Header />
      <section className="Main_Section">
        <div className="Poster_section">
          <h1 className="help-Center">Центр Допомоги</h1>
          <div className="Search_input_section_layout">
            <form onSubmit={HandleSubmit} className="Search_input_section">
              <input
                className="input_element"
                type="text"
                value={CustomInputValue}
                onChange={HandleInputChange}
                placeholder="Введіть дані"
              />
              <button type="submit">Відправити</button>
            </form>
          </div>
          <div className="section_question">
            <p className="Header_Text_Sectiob">
              Виберіть 1 з видів допомоги щоб ми могли вирішити вашу проблему
            </p>
          </div>
        </div>
      </section>
      <Fotter />
    </>
  );
};

export default Help;
