import "./App.scss";
import Header from "./Header/Header";
import BunerHeader from "./Photo_Folder/GTA 6 banner.png";
import Jodas from "./Jodas/Jodas";
import Swiper_Components from "./Swiper/Swiper";
import News from "./News/News";
import Bunner from "./Bunner/Bunner_Section";
import Fotter from "./Footer/Fotter";
import BestGameCart from "./BestFor/BestFor";
import Carousel from "./Carusel/Carusel";
function App() {
  return (
    <>
      <section className="Wrapper">
        <Header />
        <img
          src={BunerHeader}
          alt="Bunner_Photo"
          className="Bunner_Photo-hello"
        />
        <Jodas />
        <Swiper_Components />
        <News />
        <Bunner />
        <BestGameCart />
        <Carousel />
        <Fotter />
      </section>
    </>
  );
}

export default App;
