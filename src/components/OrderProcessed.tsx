import { currencyFormatter } from "../helpers/currencyFormatter";
import { MenuItem } from "../types";

type OrderProcessedProps = {
  listOrderds: MenuItem;
};

export default function OrderProcessed({ listOrderds }: OrderProcessedProps) {
  return (
    <>
      <div className="border-t-2 py-5">
        <p>
          Menú: <span className="font-bold text-black">{listOrderds.name}</span>
        </p>

        <p>
          Precio por unidad:{" "}
          <span className="font-medium text-black">
            {currencyFormatter(listOrderds.price)}
          </span>
        </p>

        <p>
          Cantidad:{" "}
          <span className="font-medium text-black">{listOrderds.quantity}</span>
        </p>

        <p>
          Total:{" "}
          <span className="font-medium text-black">
            {currencyFormatter(listOrderds.price * listOrderds.quantity)}
          </span>
        </p>
      </div>
    </>
  );
}
