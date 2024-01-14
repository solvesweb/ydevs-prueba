export const HeroSlide1 = () => {
  return (
    <section
      className="flex min-h-screen bg-cover px-10 lg:px-20"
      style={{ backgroundImage: `url(./src/assets/hero_slide.png)` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65"></div>
      <div className="flex flex-col justify-center text-white z-10">
        <h2 className="uppercase font-bold italic mb-2">Novedades 2024</h2>
        <h1 className="text-[75px] font-bold italic uppercase mb-4">
          Nueva E350
        </h1>
        <p className="mb-9 text-pretty lg:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          reiciendis quis atque doloremque. Dolor unde maxime nisi voluptatum
          vel quasi at culpa perferendis, nesciunt libero rerum nam corrupti
          doloribus numquam.
        </p>
        <button className="w-32 p-2 font-bold text-base text-black italic uppercase cursor-pointer bg-yellow mb-14">
          Descúbrela
        </button>
      </div>

      <div></div>
    </section>
  );
};
