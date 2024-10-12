import "./Btn.scss";
import { MdOutlineFileDownload } from "react-icons/md";

const Btn = () => {
  return (
    <>
      <button className="btn_header"> Завантажте Launcher</button>
    </>
  );
};

export function BtnSection() {
  return (
    <>
      <button className="btn_header">
        <span className="SaveGame">Завантажте Гру</span>
      </button>
    </>
  );
}

export function BtnGameSave() {
  return (
    <>
      <button className="btn_header_game">
        <MdOutlineFileDownload className="save_btn" />
        <span className="SaveGame">Завантажити</span>
      </button>
    </>
  );
}

export function SendBtn() {
  return (
    <>
      <button className="btn_header">Відправити</button>
    </>
  );
}

export function GotoBuy() {
  return (
    <>
      <button className="btn_header-buy">Перейти до покупки</button>
    </>
  );
}

export default Btn;
