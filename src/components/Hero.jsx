export const Hero = () => {
  return (
    <section className="flex min-h-screen">
      <div className="flex flex-col justify-center w-1/2">
        <h2 className="uppercase font-bold italic">Novedades 2024</h2>
        <h1 className="text-7xl font-bold italic uppercase">Nueva E350</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          reiciendis quis atque doloremque. Dolor unde maxime nisi voluptatum
          vel quasi at culpa perferendis, nesciunt libero rerum nam corrupti
          doloribus numquam.
        </p>
        <button className="w-32 p-2 font-bold text-base italic uppercase bg-yellow-400">
          Descúbrela
        </button>

        <div className="flex">
          <div>
            <p>Nueva e350</p>
            <p>Spinner</p>
          </div>
          <div>
            <p>Cita en taller</p>
            <p>Spinner</p>
          </div>
          <div>
            <p>Scooters Zontes</p>
            <p>Spinner</p>
          </div>
        </div>
      </div>

      <div></div>
    </section>
  );
};
