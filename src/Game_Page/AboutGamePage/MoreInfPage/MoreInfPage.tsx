import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./MoreInf.scss";

const MoreInfPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { games } = location.state; // Отримання ігор з state
  const game = games.find((g: { id: number }) => g.id === parseInt(id)); // Знайти гру за ID

  type HeaderText = {
    Descriptiom: string;
  };

  const descriptiom: HeaderText = { Descriptiom: "Опис".toUpperCase() }; // Correct assignment

  return (
    <>
      <section className="wrapper-delivery-block">
        <div className="section-block">
          <div className="ul-block-des">
            <div className="wrapper-ul-list-block">
              <p className="Description-header">{descriptiom.Descriptiom}</p>
            </div>
            <div className="wrapper-ul-list-block-Description">
              <p className="text-Description">{game.secription}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreInfPage;
