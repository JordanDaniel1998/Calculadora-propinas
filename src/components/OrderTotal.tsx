import { currencyFormatter } from "../helpers/currencyFormatter";

type OrderTotalProps = {
  subTotal: number;
  tipAmount: number;
};

export default function OrderTotal({ subTotal, tipAmount }: OrderTotalProps) {
  return (
    <>
      <div>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{currencyFormatter(subTotal)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold">{currencyFormatter(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">
            {currencyFormatter(subTotal + tipAmount)}
          </span>
        </p>
      </div>
    </>
  );
}
