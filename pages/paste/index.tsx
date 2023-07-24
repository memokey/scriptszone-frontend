import React from "react";
import Layout from "../../components/Layout";
import { Card } from "../../components/Common/Cards";
import { PASTES } from "../../data/pastes";
import SecondaryButton from "../../components/Common/Buttons/SecondaryButton";

const Paste = () => {
  return (
    <Layout>
      <div className="mx-[300px]">
        <div className="relative w-full mb-[120px]">
          <img src="/images/paste/cardbg.png" alt="bg" className="absolute top-0 left-0 right-0 rounded-t-[10px] w-full" />
          <Card title="Bloxfruits Roblox Hoho Script" style="absolute top-[76px] left-0 right-0" bgImg="/images/paste/cardbg.png">
            <p className="text-grey text-[16px] font-normal mb-[80px]">{PASTES[0].scripts}</p>
            <div className="flex justify-end">
              <SecondaryButton 
                bordered={true} 
                caption="Copy"
                onClick={() => {}}
              />
            </div>
          </Card>
        </div>
        <Card title="Description & Features : " style="mb-[40px]">
          <div className="text-grey text-[16px] font-normal mb-8">
            {PASTES[0].description} 
          </div>
          <div className="flex justify-end">
            <div className="flex gap-2">
              <SecondaryButton
                caption="Raw"
                bordered={true}
                onClick={() => {}}
              />
              <SecondaryButton
                caption="Download"
                onClick={() => {}}
              />
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}

export default Paste;