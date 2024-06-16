import { currencyFormatter } from "../helpers/currencyFormatter";
import { MenuItem } from "../types";

type OrderItemProps = {
  menu: MenuItem;
  deleteMenu: (id: MenuItem["id"]) => void;
};

export default function OrderItem({ menu, deleteMenu }: OrderItemProps) {
  return (
    <>
      <div
        className="flex justify-between items-center border-t-2 py-3  last-of-type:border-b-2"
        key={menu.id}
      >
        <div className="flex flex-col text-black gap-2">
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="flex justify-start items-center gap-2">
                <div>
                  <img src={`/svg/${menu.image}.svg`} alt={menu.image} />
                </div>
                <p>{menu.name}</p>
              </div>

              <p className="font-medium">
                Precio por unidad:{" "}
                <span className="font-black">
                  {currencyFormatter(menu.price)}
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2 font-black">
            <p>
              Cantidad: <span>{menu.quantity}</span>
            </p>
            <span>-</span>
            <p>{currencyFormatter(menu.price * menu.quantity)}</p>
          </div>
        </div>

        <button
          className="rounded-full bg-red-500 hover:bg-red-700 md:duration-300 text-white inline-block p-2"
          onClick={() => deleteMenu(menu.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
