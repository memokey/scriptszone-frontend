import React, { FC } from "react";
import Layout from "../../components/Layout";
import { Card } from "../../components/Common/Cards";
import SecondaryButton from "../../components/Common/Buttons/SecondaryButton";
import { getStaticPaths, PastePageProps, getStaticProps } from "../../modules/Paste";

const PastePage: FC<PastePageProps> = ({ paste, success }) => {
  if (!success) return <></>;
  
  return (
    <Layout>
      <div className="w-[1450px] mx-auto">
        <div className="relative w-full mb-[120px]">
          <img src="/images/paste/cardbg.png" alt="bg" className="absolute top-0 left-0 right-0 rounded-t-[10px] w-full" />
          <Card title={paste.title} style="absolute top-[76px] left-0 right-0 linear-gradient-card" bgImg="/images/paste/cardbg.png">
            <p className="text-grey text-[16px] font-normal mb-[80px]">{paste.scripts}</p>
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
            {paste.description} 
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

export { getStaticProps, getStaticPaths };

export default PastePage;