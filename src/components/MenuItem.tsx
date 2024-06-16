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
        className="border-2 border-[#76ABAE] flex justify-between items-center px-5 py-3 hover:bg-[#76ABAE] md:duration-300 hover:text-white"
        onClick={() => addMenu(menu)}
      >
        <div className="flex justify-start items-center gap-2">
          <div>
            <img src={`/svg/${menu.image}.svg`} alt={menu.image} />
          </div>
          <p>{menu.name}</p>
        </div>
        <p className="font-black">${menu.price}</p>
      </button>
    </>
  );
}
