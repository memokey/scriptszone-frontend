import React from "react";
import Layout from "../../components/Layout";
import { Card } from "../../components/Common/Cards";
import PrimaryButton from "../../components/Common/Buttons/PrimaryButton";
import { usePrivy } from "@privy-io/react-auth";

const NewAdminPaste = () => {
  const {
    ready, 
    authenticated, 
  } = usePrivy();

  return (
    <Layout>
      {ready && authenticated && (
        <div className="ml-[132px] mr-[350px]">
          <Card title="New Paste *" style="mb-[40px]">
            <textarea rows={10} className="w-full px-6 py-3 focus:outline-none" placeholder="Paste your script here!">
            </textarea>
          </Card>
          <Card title="Description & Features : " style="mb-[40px]">
            <textarea rows={10} className="w-full px-6 py-3 focus:outline-none" placeholder="List the script’s description and features here.">
            </textarea>
          </Card>
          <div className="mb-[80px]">
            <div className="text-[20px] font-bold w-full text-[#3C6AFF] pb-6 border-b border-[#EDEDED] mb-8">
              Paste Settings
            </div>
            <div className="text-[black] text-[16px] font-normal mb-6">Game link *</div>
            <input type="text" className="px-6 py-3 border border-[#E9E9E9] rounded-[6px] focus:outline-none w-full mb-6" placeholder="Paste the game that the script supports! (eg. roblox.com/games/game-id)" />
            <PrimaryButton
              caption="Create New Paste"
              onClick={() => {}} 
            />
          </div>
        </div>
      )}
    </Layout>
  );
}

export default NewAdminPaste;