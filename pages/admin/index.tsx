import React from "react";
import Logo from "../../components/Layout/Header/Logo";
import PrimaryButton from "../../components/Common/Buttons/PrimaryButton";
import WalletButton from "../../components/Admin/WalletButton";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/router";

const Admin = () => {
  const router = useRouter();
  const {
    ready, 
    authenticated, 
  } = usePrivy();

  return (
    <div className="py-[10px] mx-[132px]">
      <div className="flex justify-between">
        <Logo />
        <div className="flex gap-8">
          {ready && authenticated && (
            <PrimaryButton
              caption="New Paste"
              onClick={() => {
                router.push('/newadminpaste');
              }} 
            />
          )}
          <WalletButton />
        </div>
      </div>
    </div>
  );
}

export default Admin;