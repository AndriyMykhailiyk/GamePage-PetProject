import "./Jodas.scss";
import { useNavigate } from 'react-router-dom';
import Pc from '../Photo_Folder/JodasComponent/CategoruPhoto/—Pngtree—water cooled gaming pc with_15318038.png'
import Xboxe from '../Photo_Folder/JodasComponent/CategoruPhoto/[CITYPNG.COM]Console Of Xbox Series X With Controller - 1000x1000.png'
import Ps5 from '../Photo_Folder/JodasComponent/CategoruPhoto/PlayStation_5_and_DualSense_with_transparent_background.png'
import steamdeck from '../Photo_Folder/JodasComponent/CategoruPhoto/1645827480968.webp'
import Tooltip from '@mui/material/Tooltip';

const Jodas = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/FullGame', { state: { active: true } });
  };

  return (
    <>
      <section className="wrapper2">
        <div className="wrapperJodasComponent">
        <div className="about_header">
          <div className="left_side">
            <h1 className="popual_game_title">Популярні категорії</h1>
          </div>
        </div>
        
        <div className="right_side2">

      <section className="wrapper-category">
<form>
<ul className="Ul-Photo-Category">
  <div className="wrapper-photo">
  <span>

  <Tooltip title="Комп'ютер" placement="bottom" arrow >
  <img src={Pc} className="Ps-class1" alt="PcPhoto" id="PcPhotoid"/>
  </Tooltip>

  </span>
  <span>
  <Tooltip title="Xbox" placement="bottom" arrow>

  <img src={Xboxe} className="Ps-class2" alt="PcPhoto" id="PcPhotoid"/>
  </Tooltip>
  </span>
  <span>
  <Tooltip title="PlayStation5" placement="bottom" arrow>

  <img src={Ps5} className="Ps-class3" alt="PcPhoto3" id="PcPhotoid"/>
  </Tooltip>
  </span>
  <span>
  <Tooltip title="Стім Дек" placement="bottom" arrow>

  <img src={steamdeck} className="Ps-class4" alt="PcPhoto3" id="PcPhotoid"/>
  </Tooltip>
  </span>
</div>
</ul>
</form>


      </section>
          </div>

          </div>
      </section>
    </>
  );
};

export default Jodas;
