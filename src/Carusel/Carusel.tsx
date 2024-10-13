import "./SliderCarusel.scss";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useEffect, useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.mockfly.dev/mocks/60fe8fb4-6deb-45bf-a8f8-8334d38c7cb1/Games"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <>
      <CarouselProvider
        className="CarouselProvider1"
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        visibleSlides={1.7}
        totalSlides={data.length}
        step={0.5}
      >
        <div className="wrapper-carosel">
        <h1 className="closes-data">Подібні товари</h1>
          <div className="wrapper-carosel-wrapper02">
    
            <ButtonBack className="custom-arrow">
              <MdOutlineArrowBackIos size={30} fill="white" />
            </ButtonBack>
            <Slider className="slider">
              {data.map(
                (game: {
                  id: number;
                  img: string;
                  title: string;
                  price: number;
                }) => (
                  <div className="Search_List_Item-slider" key={game.id}>
                    <div className="wrapper-el">
                      <Link to={`/About/${game.id}`} state={{ games: data }}>
                        <img src={game.img} className="Photo_List-slider" />
                      </Link>
                      <Link to={`/About/${game.id}`} state={{ games: data }}>
                        <p className="title-slider">{game.title}</p>
                      </Link>
                      <div className="wrapper-prise-block">
                        <p>{game.price} </p>
                        <span className="prise-text">грн</span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </Slider>
            <ButtonNext className="custom-arrow">
              <MdOutlineArrowForwardIos size={30} fill="white" />
            </ButtonNext>
          </div>
        </div>
      </CarouselProvider>
    </>
  );
};

export default Carousel;
