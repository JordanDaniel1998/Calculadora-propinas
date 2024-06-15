import MenuItem from "./components/MenuItem.tsx";
import OrderItem from "./components/OrderItem.tsx";
import OrderTotal from "./components/OrderTotal.tsx";
import TipItem from "./components/TipItem.tsx";
import { menuItems } from "./data/db.ts";

import useOrder from "./hooks/useOrder.ts";

function App() {
  const {
    cart,
    subTotal,
    tipAmount,
    addMenu,
    deleteMenu,
    setTip,
    destroyOrders,
  } = useOrder();

  return (
    <>
      <header className="bg-teal-400">
        <div className="w-11/12 mx-auto py-5">
          <h1 className="text-center text-4xl font-black">
            Calculadora de Propinas y Consumo
          </h1>
        </div>
      </header>

      <main className="w-11/12 md:max-w-7xl mx-auto py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        <div className="flex flex-col gap-10 pt-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <div className="flex flex-col gap-2">
            {menuItems.map((menu) => (
              <MenuItem key={menu.id} menu={menu} addMenu={addMenu} />
            ))}
          </div>
        </div>
        <div>
          <div className="border-2 border-gray-100 shadow-sm px-5 py-5">
            {cart.length > 0 && (
              <div className="flex flex-col gap-10">
                <h2 className="text-4xl font-black">Consumo</h2>
                <div className="flex flex-col">
                  {cart.map((menu) => (
                    <OrderItem
                      key={menu.id}
                      menu={menu}
                      deleteMenu={deleteMenu}
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-black">Propina:</h3>
                  <TipItem setTip={setTip} />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-2xl font-black">Totales y Propina:</p>
                  <OrderTotal subTotal={subTotal} tipAmount={tipAmount} />
                </div>

                <div>
                  <button
                    type="button"
                    className="text-white font-bold bg-black w-full py-3 uppercase text-sm"
                    onClick={destroyOrders}
                  >
                    Guardar orden
                  </button>
                </div>
              </div>
            )}
            {cart.length === 0 && (
              <p className="font-bold text-center">La orden esta vacía</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
