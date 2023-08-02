import React from "react";
import Logo from "../../components/Layout/Header/Logo";
import PrimaryButton from "../../components/Common/Buttons/PrimaryButton";
import WalletButton from "../../components/Admin/WalletButton";
import { usePrivy } from "@privy-io/react-auth";
import { useSelector, RootStateOrAny } from 'react-redux';
import { useRouter } from "next/router";
import MenuItems from "../../components/Layout/Header/MenuItems";
import { MENU_LIST } from "../../data/header";
import AdminLayout from "../../components/Admin/AdminLayout";
import { Card } from "../../components/Common/Cards";
import PasteView from "../../components/Pastes/PasteView";
import Paste from "../../components/Pastes/Paste";

const Admin = () => {
  const { pastes } = useSelector((state: RootStateOrAny) => ({
    pastes: state.auth.pastes,
  }));

  const {
    ready, 
    authenticated, 
  } = usePrivy();

  return (
    <AdminLayout>
      {ready && authenticated && (
        <div className="w-[1369px] mx-auto grid grid-cols-12 gap-[36px]">
          <div className="col-span-7">
            {pastes && (
              pastes.map((paste, index) => (
                <Paste
                  key={index}
                  {...paste} 
                />
              ))
            )}
          </div>
          <div className="col-span-5">
          {pastes && (
            pastes.map((index) => (
              <PasteView key={index}/>
            )))
          }
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default Admin;