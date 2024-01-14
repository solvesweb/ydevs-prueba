export const HeroSlide3 = () => {
  return (
    <section
      className="flex min-h-screen bg-cover px-10 lg:px-20"
      style={{ backgroundImage: `url(./public/assets/hero_slide.png)` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65"></div>
      <div className="flex flex-col justify-center text-white z-10">
        <h2 className="uppercase font-bold italic mb-2">Scooter Zontes</h2>
        <h1 className="text-[75px] font-bold italic uppercase mb-4">
          Scooter Zontes
        </h1>
        <p className="mb-9 text-pretty lg:w-1/2">
          En Zontes Valencia somos distribuidores y punto de venta oficial de la
          marca y donde podrás encontrar todos los modelos disponibles en España
          con una atención comercial y técnica, al mayor nivel.
        </p>
        <button className="w-32 p-2 font-bold text-base text-black italic uppercase bg-yellow mb-14">
          Pide tu cita
        </button>
      </div>

      <div></div>
    </section>
  );
};
