import type { Menues, MenuItem } from "../types";

type MenuItemPorps = {
  menu: Menues;
  addMenu: (menu: Menues) => void;
};

export default function MenuItem({ menu, addMenu }: MenuItemPorps) {
  return (
    <>
      <button
        type="button"
        className="border-2 border-teal-400 flex justify-between items-center px-5 py-3 hover:bg-teal-200 md:duration-300"
        onClick={() => addMenu(menu)}
      >
        <p>{menu.name}</p>
        <p className="font-black">${menu.price}</p>
      </button>
    </>
  );
}
