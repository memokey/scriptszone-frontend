import React from "react";
import Logo from "./Logo";
import PrimaryButton from "../../Common/Buttons/PrimaryButton";
import MenuItems from "./MenuItems";
import { PlusIcon } from "../../Icons";
import { MENU_LIST } from "../../../data/header";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between py-[30px] items-center mx-[132px]">
      <div className="flex gap-24">
        <Logo onClick={
          () => {
            router.push('/');
          }
        }/>
        {/* <MenuItems menus={MENU_LIST} /> */}
      </div>
      <div className="flex gap-8">
        {/* <input type="text" className="px-6 py-3 border border-[#E9E9E9] rounded-[6px] focus:outline-none" placeholder="Search scripts..." /> */}
        <PrimaryButton
          caption={'Paste'}
          icon={<PlusIcon />}
          onClick={() => {
            router.push('/newpaste');
          }}
        />
      </div>
    </div>
  );
}

export default Header;