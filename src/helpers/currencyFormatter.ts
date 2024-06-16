import { format } from "date-fns";

export function currencyFormatter(quantity: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(quantity);
}

export function dateFormatter(timestamp: number) {
  const fecha = format(new Date(timestamp), "dd/MM/yyyy");
  const hora = format(new Date(timestamp), "HH:mm:ss");
  return [fecha, hora];
}
