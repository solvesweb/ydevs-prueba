import classNames from "classnames";

export const CardProduct = ({ promo, prize, model, photo, colors = [] }) => {
  return (
    <div className="flex flex-col relative border-[1px] border-grey-border">
      <div className="flex justify-end min-h-8">
        <p
          className={classNames(
            "text-sm font-bold italic uppercase py-1 px-6",
            {
              "text-white bg-black": promo === "Nueva",
              "bg-white": promo !== "Nueva",
            }
          )}
        >
          {promo}
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={photo} alt="" className="w-full" />
        <p className="text-xl uppercase font-bold italic">{model}</p>
        <div className="flex justify-center gap-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className={
                `w-6 h-6 rounded-full bg-${color} border-solid border-[1px] border-grey-border`
              }
            ></div>
          ))}
        </div>
        <p className="text-grey-text uppercase italic text-sm text-center">
          {}
        </p>
        <p className="text-3xl font-bold italic">{prize}€</p>
      </div>
    </div>
  );
};
