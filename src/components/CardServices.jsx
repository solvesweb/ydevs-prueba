export const CardServices = ({ title, bgImage }) => {
  return (
    <div className="cursor-pointer">
      <div
        className="relative bg-cover bg-center w-64 h-36 text-white"
        style={{ backgroundImage: `url(./src/assets/${bgImage}.png)` }}
      >
        {/* Superposición con opacidad */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        {/* Contenido del div */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h3 className="text-gray-50 font-bold italic text-3xl">{title}</h3>
        </div>
      </div>
    </div>
  );
};
