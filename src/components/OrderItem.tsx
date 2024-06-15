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
        <div className="flex flex-col text-black gap-1">
          <div className="flex justify-start items-center gap-2">
            <p>{menu.name}</p>
            <span>-</span>
            <p className="font-black">{currencyFormatter(menu.price)}</p>
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
          className="rounded-full bg-red-500 hover:bg-red-700 md:duration-300 text-white inline-block"
          onClick={() => deleteMenu(menu.id)}
        >
          <span className="w-6 h-6 inline-block font-medium">X</span>
        </button>
      </div>
    </>
  );
}
