import { CardProduct } from "./CardProduct";
import modelsData from "../data/modelsData.json";

export const Catalogue = () => {
  return (
    <section className="flex flex-col">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-3xl md:text-4xl font-bold uppercase italic">
          Modelos destacados
        </h2>
        <button className="hidden sm:block uppercase font-bold italic bg-yellow h-10 px-4">Ver más modelos</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {modelsData.models.map((moto, index) => (
          <CardProduct
            key={index}
            promo={moto.promo ? "Nueva" : ""}
            prize={moto.price}
            model={moto.name}
            photo={moto.img}
            colors={moto.colors}
          />
        ))}
      </div>
    </section>
  );
};
