// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./catalogue/catalogue.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import { Grid, Pagination, Scrollbar } from "swiper/modules";
import { CardProduct } from "./CardProduct";

export const Catalogue = ({
  promo,
  price,
  name,
  img,
  primaryColor,
  secondaryColor,
  text,
  oldPrice,
}) => {
  const models = [
    {
      id: 0,
      name: "Zontes e350 2024",
      price: "4.999",
      img: "./src/assets/e350.png",
      promo: true,
      primaryColor: "bg-black-moto",
      secondaryColor: "bg-white",
      oldPrice: "5.999€",
    },
    {
      id: 1,
      name: "Zontes zt 125 2024",
      price: "4.999",
      img: "./src/assets/zt125.png",
      promo: false,
      primaryColor: "bg-black-moto",
      secondaryColor: "bg-white",
      text: "Desde",
    },
    {
      id: 2,
      name: "Zontes z2 125 2024",
      price: "4.999",
      img: "./src/assets/zt125_blue.png",
      promo: false,
      primaryColor: "bg-blue-moto",
      secondaryColor: "bg-yellow-moto",
      text: " ",
    },
    {
      id: 3,
      name: "Zontes T350 X 2024",
      price: "4.999",
      img: "./src/assets/t350.png",
      promo: true,
      primaryColor: "bg-black-moto",
      secondaryColor: "bg-red-moto",
      text: " ",
    },
  ];
  const moto = models[0];
  const moto2 = models[1];
  const moto3 = models[2];
  const moto4 = models[3];
  const moto5 = models[0];
  const moto6 = models[1];
  const moto7 = models[2];
  const moto8 = models[3];

  return (
    <section className="mt-16 flex flex-col px-5 sm:px-10 lg:px-20">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-3xl md:text-4xl font-bold uppercase italic">
          Modelos destacados
        </h2>
        <button className="hidden sm:block uppercase font-bold italic bg-yellow h-10 px-4">
          Ver más modelos
        </button>
      </div>

      <div>
        <Swiper
          modules={[Scrollbar, Grid, Pagination]}
          scrollbar={{
            draggable: true,
            dragSize: 200,
          }}
          slidesPerView={1}
          spaceBetween={16}
          grid={{ cols: 2, fill: "row" }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },

            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <CardProduct
              promo={moto.promo ? "Nueva" : ""}
              price={moto.price}
              model={moto.name}
              photo={moto.img}
              primaryColor={moto.primaryColor}
              secondaryColor={moto.secondaryColor}
              text={moto.text}
              oldPrice={moto.oldPrice}
            />
            <div className="h-8"></div>
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct
              promo={moto2.promo ? "Nueva" : ""}
              price={moto2.price}
              model={moto2.name}
              photo={moto2.img}
              primaryColor={moto2.primaryColor}
              secondaryColor={moto2.secondaryColor}
              text={moto2.text}
              oldPrice={moto2.oldPrice}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct
              promo={moto3.promo ? "Nueva" : ""}
              price={moto3.price}
              model={moto3.name}
              photo={moto3.img}
              primaryColor={moto3.primaryColor}
              secondaryColor={moto3.secondaryColor}
              text={moto3.text}
              oldPrice={moto3.oldPrice}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct
              promo={moto4.promo ? "Nueva" : ""}
              price={moto4.price}
              model={moto4.name}
              photo={moto4.img}
              primaryColor={moto4.primaryColor}
              secondaryColor={moto4.secondaryColor}
              text={moto4.text}
              oldPrice={moto4.oldPrice}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct
              promo={moto5.promo ? "Nueva" : ""}
              price={moto5.price}
              model={moto5.name}
              photo={moto5.img}
              primaryColor={moto5.primaryColor}
              secondaryColor={moto5.secondaryColor}
              text={moto5.text}
              oldPrice={moto5.oldPrice}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct
              promo={moto6.promo ? "Nueva" : ""}
              price={moto6.price}
              model={moto6.name}
              photo={moto6.img}
              primaryColor={moto6.primaryColor}
              secondaryColor={moto6.secondaryColor}
              text={moto6.text}
              oldPrice={moto6.oldPrice}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct
              promo={moto7.promo ? "Nueva" : ""}
              price={moto7.price}
              model={moto7.name}
              photo={moto7.img}
              primaryColor={moto7.primaryColor}
              secondaryColor={moto7.secondaryColor}
              text={moto7.text}
              oldPrice={moto7.oldPrice}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct
              promo={moto8.promo ? "Nueva" : ""}
              price={moto8.price}
              model={moto8.name}
              photo={moto8.img}
              primaryColor={moto8.primaryColor}
              secondaryColor={moto8.secondaryColor}
              text={moto8.text}
              oldPrice={moto8.oldPrice}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct
              promo={moto.promo ? "Nueva" : ""}
              price={moto.price}
              model={moto.name}
              photo={moto.img}
              primaryColor={moto.primaryColor}
              secondaryColor={moto.secondaryColor}
              text={moto.text}
              oldPrice={moto.oldPrice}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct
              promo={moto2.promo ? "Nueva" : ""}
              price={moto2.price}
              model={moto2.name}
              photo={moto2.img}
              primaryColor={moto2.primaryColor}
              secondaryColor={moto2.secondaryColor}
              text={moto2.text}
              oldPrice={moto2.oldPrice}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
