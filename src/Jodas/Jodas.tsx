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
        <div className="wrapperJodasComponent">
        <div className="about_header">
          <div className="left_side">
            <h1 className="popual_game_title">Популярні категорії</h1>
          </div>
        </div>
        
        <div className="right_side2">


          цв
            <button className="btn_section" onClick={handleRedirect}>РС</button>
           
          </div>

          </div>
      </section>
    </>
  );
};

export default Jodas;
