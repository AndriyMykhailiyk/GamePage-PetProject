import { Swiper, SwiperSlide } from "swiper/react";
import { RxCrop } from "react-icons/rx";
import "./Swipper.scss";
import Gra5 from "../Swiper_Photo/GTA-5.png";
import Gra3 from "../Swiper_Photo/GTAonline.png";
import Gra2 from "../Swiper_Photo/RED.png";
import Gra1 from "../Swiper_Photo/REDOnline.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

export default function Swiper_Components() {
  const ExportData = [
    {
      id: 0,
      icon: RxCrop,
      backgroundImage: Gra5,
    },
    {
      id: 1,
      icon: RxCrop,
      backgroundImage: Gra3,
    },
    {
      id: 2,
      icon: RxCrop,
      backgroundImage: Gra2,
    },
    {
      id: 3,
      icon: RxCrop,
      backgroundImage: Gra1,
    },
    {
      id: 4,
      icon: RxCrop,
      backgroundImage: Gra5,
    },
    {
      id: 5,
      icon: RxCrop,
      backgroundImage: Gra3,
    },
    {
      id: 6,
      icon: RxCrop,
      backgroundImage: Gra2,
    },
    {
      id: 7,
      icon: RxCrop,
      backgroundImage: Gra1,
    },
  ];

  return (
    <>
      <div className="wrapper">
        <div className="flex item-center justify-center flex-col h-screen bg-[#F1F1F1]">
          <Swiper
            className="flex item-center"
            breakpoints={{
              1500: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
          >
            {ExportData.map((item, id) => (
              <SwiperSlide
                key={item.id}
                className={id % 2 === 0 ? "even-slide" : "odd-slide"}
                style={{ display: "flex", width: "260px", margin: 0 }}
              >
                <div
                  style={{
                    margin: 0,
                    backgroundImage: `url(${item.backgroundImage})`,
                    backgroundSize: "cover",
                    height: "400px",
                    width: "328px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
