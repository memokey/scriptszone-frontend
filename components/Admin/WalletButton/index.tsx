import { usePrivy } from "@privy-io/react-auth";
import React from "react";
import PrimaryButton from "../../Common/Buttons/PrimaryButton";

const WalletButton = () => {
  const { 
    login, 
    logout,
    ready, 
    authenticated,
  } = usePrivy();

    if(!ready) {
      return null;
    } else if (ready && !authenticated) {
      return (
        <PrimaryButton
          caption="Login" 
          onClick={login}
        />
      );
    } else {
      return (
        <div className="flex items-center">
          <PrimaryButton
            caption="SignOut" 
            onClick={logout}
          />
        </div>
    );
  }
}

export default WalletButton;