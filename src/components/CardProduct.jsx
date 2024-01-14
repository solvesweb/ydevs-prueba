import classNames from "classnames";

export const CardProduct = ({
  promo,
  price,
  model,
  photo,
  primaryColor,
  secondaryColor,
  text = " ",
  oldPrice
}) => {
  return (
    <div className="flex flex-col relative border-[1px] border-grey-border cursor-pointer">
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
      <div className="flex flex-col items-center gap-4">
        <img src={photo} alt="" className="w-full" />
        <p className="text-xl uppercase font-bold italic">{model}</p>
        <div className="flex justify-center gap-2">
          <div
            className={`w-6 h-6 rounded-full ${primaryColor} border-solid border-[1px] hover:border-2 border-grey-border cursor-pointer`}
          ></div>
          <div
            className={`w-6 h-6 rounded-full ${secondaryColor} border-solid border-[1px] hover:border-2 border-grey-border cursor-pointer`}
          ></div>
        </div>

        <div className="flex flex-col min-h-14 justify-end mb-[30px]">
          <p className="text-grey-text uppercase italic text-sm text-center light">
            {text}
          </p>
          <p className="text-grey-text uppercase italic text-sm text-center light line-through
">
            {oldPrice}
          </p>
          <p className="text-3xl font-bold italic">{price}€</p>
        </div>
      </div>
    </div>
  );
};
