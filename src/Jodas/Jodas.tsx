import "./Jodas.scss";
import { useNavigate } from 'react-router-dom';

const Jodas = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/FullGame', { state: { active: true } });
  };

  return (
    <>
      <section className="wrapper">
        <div className="about_header">
          <div className="left_side">
            <h1>Популярні Ігри</h1>
          </div>

          <div className="right_side2">
            <button className="btn_section" onClick={handleRedirect}>РС</button>
            <button className="btn_section">Консоль</button>
            <button className="btn_section">Приставки</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jodas;
