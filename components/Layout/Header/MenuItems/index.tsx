import React from "react";
import MenuItem, { MenuItemType } from "./MenuItem";
import { MENU_LIST } from "../../../../data/header";

const MenuItems = (props: {menus: MenuItemType[]}) => {
  return (
    <div className="flex gap-4 items-end mb-3">
      {props.menus.map((menu: MenuItemType, index: number) => (
        <MenuItem
          key={index}
          {...menu} 
        />
      ))}
    </div>
  );
}

export default MenuItems;