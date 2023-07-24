import Link from "next/link";
import React from "react";

export type MenuItemType = {
  name: string;
  link: string;
}

const MenuItem = (props: MenuItemType) => {
  return (
    <Link href={props.link}>
      <span className="text-[16px] font-bold text-[#5A5A5A] hover:text-[black]">
        {props.name}
      </span>
    </Link>
  );
}

export default MenuItem;