import { useMemo, useState } from "react";
import type { MenuItem, Menues } from "../types";
import { showDeleteConfirmation, showSuccessMessage } from "../helpers/alert";

export default function useOrder() {
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [tip, setTip] = useState(0);

  let subTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  let tipAmount = useMemo(() => subTotal * tip, [tip, cart]);

  function addMenu(menu: Menues) {
    const index = cart.findIndex((e) => e.id === menu.id);
    if (index >= 0) {
      const updateMenu = [...cart];
      updateMenu[index].quantity++;
      setCart(updateMenu);
    } else {
      const newMenu = { ...menu, quantity: 1 };
      setCart([...cart, newMenu]);
    }
  }

  function deleteMenu(id: MenuItem["id"]) {
    const messages = {
      title: "¿Estás seguro?",
      text: "Usted va a eliminar un menú",
      response: "El menú ha sido eliminado exitosamente",
      confirmation: "Sí, eliminar",
    };

    showDeleteConfirmation({ messages }).then((result) => {
      if (result.isConfirmed) {
        const updateCart = cart.filter((item) => {
          return item.id !== id;
        });
        setCart(updateCart);
        showSuccessMessage({ messages });
      }
    });
  }

  const destroyOrders = () => {
    const messages = {
      title: "¿Estás seguro?",
      text: "Usted va ah finalizar la orden",
      response: "Orden almacenada exitosamente",
      confirmation: "Sí, guardar",
    };
    showDeleteConfirmation({ messages }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        setTip(0);
        subTotal = 0;
        tipAmount = 0;
        showSuccessMessage({ messages });
      }
    });
  };

  return {
    cart,
    subTotal,
    tip,
    tipAmount,
    addMenu,
    deleteMenu,
    setTip,
    destroyOrders,
  };
}
