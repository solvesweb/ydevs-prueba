import { Swiper, SwiperSlide } from "swiper/react";
import { HeroSlide1 } from "./HeroSlide1";
import { Pagination, Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { HeroSlide2 } from "./HeroSlide2";
import "swiper/css";
import "swiper/css/pagination";
import { HeroSlide3 } from "./HeroSlide3";

export const SliderHero = () => {
  const listArray = ["Nueva e350", "Cita en taller", "Scooters Zontes"];

  return (
    <div>
      
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 3000}}        
        pagination={{
          
          clickable: "true",
          type: "bullets",
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '">' +
              "<em>" +
              listArray[index] +
              "</em>" +
              "<i></i>" +
              "<b></b>" +
              "</span>"
            );
          },
        }}
        navigation={true}
      >
        
        <SwiperSlide>
          
          <HeroSlide1 />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSlide2 />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSlide3 />
        </SwiperSlide>
        <div className="slider-pagination"></div>
      </Swiper>
    </div>
  );
};
