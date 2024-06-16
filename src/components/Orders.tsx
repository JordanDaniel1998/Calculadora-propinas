import { dateFormatter } from "../helpers/currencyFormatter";
import { Order } from "../types";
import OrderProcessed from "./OrderProcessed";

type OrdersProps = {
  order: Order;
};

export default function Orders({ order }: OrdersProps) {
  return (
    <>
      <div>
        <details className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <div>
              <p className="font-bold text-lg text-[#151515]">
                Órdenes del día: {dateFormatter(order.id)[0]}
              </p>
              <p className="font-bold text-lg text-[#151515]">
                Hora: {dateFormatter(order.id)[1]}
              </p>
            </div>
            <span className="transition group-open:rotate-180 md:duration-500">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2923 11.3882L9.00065 18.3327M9.00065 18.3327L1.70898 11.3882M9.00065 18.3327L9.00065 1.66602"
                  stroke="#000000"
                  strokeWidth="3.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </summary>
          <div className="group-open:animate-fadeIn mt-3 text-neutral-600 font-medium">
            <div className="flex flex-col">
              {order.orders.map((item) => (
                <OrderProcessed key={item.id} listOrderds={item} />
              ))}
            </div>
          </div>
        </details>
      </div>
    </>
  );
}
