import { CardServices } from "./CardServices";

const services = [
  { title: "Alquiler", bgImage: "alquiler" },
  { title: "Renting", bgImage: "renting" },
  { title: "Cita en taller", bgImage: "cita" },
  { title: "Motos", bgImage: "motos" },
];

export const Services = () => {
  return (
    <section className="flex flex-col ">
      <div className="flex flex-col justify-center items-center text-center text-balance">
        <h3 className="uppercase font-bold italic text-yellow mb-2">
          Concesionario oficial
        </h3>
        <h2 className="text-5xl font-bold italic uppercase mb-7">
          Motos.tech Valencia
        </h2>
        <p className="text-pretty font-rubik font-light sm:w-3/4 lg:w-2/3">
          Lorem ipsum dolor sit amet. In iste nisi ea internos quia rem odio
          eaque sit nisi odio sed minus totam et nostrum iusto. Qui aliquam
          adipisci sed ipsum quia ut sunt totam est mollitia voluptatem ea rerum
          rerum. A nesciunt nisi. 
          <br></br>
          <br></br>          
          Est nemo debitis sit consequatur eius non
          obcaecati incidunt.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <CardServices
            key={index}
            title={service.title}
            bgImage={service.bgImage}
          />
        ))}
      </div>
    </section>
  );
};
