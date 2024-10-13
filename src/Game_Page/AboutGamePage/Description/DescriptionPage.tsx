import "./DescriptionPage.scss";
import { useParams } from "react-router-dom";

import { useLocation } from "react-router-dom";

const DescriptionPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { games } = location.state; // Отримання ігор з state
  const game =  games.find((g: { id: number }) => g.id === parseInt(id)); // Знайти гру за ID

  type HeaderText = {
    Descriptiom: string;
  };

  const data_resile = game.data_resile.slice(6);

  const descriptiom: HeaderText = {
    Descriptiom: "Характеристики".toUpperCase(),
  }; // Correct assignment

  return (
    <>
      <section className="wrapper-delivery-block">
        <div className="section-block">
          <div className="ul-block-des">
            <div className="wrapper-ul-list-block">
              <p className="Description-header">{descriptiom.Descriptiom}</p>
            </div>
            <div className="wrapper-ul-list-block-Description">
              <ul className="Ul-El-description">
                <li className="li-title">
                  <p className="text-value-1">Знижка на кількість</p>
                  <p className="text-value-2" id="no">
                    Ні
                  </p>
                </li>
                <hr />
                <li className="li-title">
                  <p className="text-value-1">Тип</p>
                  <p className="text-value-2" id="game">
                    Гра
                  </p>
                </li>
                <hr />
                <li className="li-title">
                  <p className="text-value-1">Платформа</p>
                  <p className="text-value-2" id="plantofm">
                    {game.plantofm}
                  </p>
                </li>
                <hr />
                <li className="li-title">
                  <p className="text-value-1">Назва</p>
                  <p className="text-value-2" id="title">
                    {game.title}
                  </p>
                </li>
                <hr />
                <li className="li-title">
                  <p className="text-value-1">Вік</p>
                  <p className="text-value-2" id="age_limit">
                    {game.age_limit}
                  </p>
                </li>
                <hr />
                <li className="li-title">
                  <p className="text-value-1">Дата Виходу</p>
                  <p className="text-value-2" id="data_resile">
                    {game.data_resile}
                  </p>
                </li>
                <hr />
                <li className="li-title">
                  <p className="text-value-1">Рік випуску</p>
                  <p className="text-value-2" id="data_resile-year">
                    {data_resile}
                  </p>
                </li>
                <hr />
                <li className="li-title">
                  <p className="text-value-1">Рейтинг</p>
                  <p className="text-value-2" id="rating">
                    {game.rating}
                  </p>
                </li>
                <hr />
                <li className="li-title">
                  <p className="text-value-1">Фішки</p>
                  <p className="text-value-2">{game.features}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DescriptionPage;
