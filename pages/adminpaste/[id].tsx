import React, { FC, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Card } from "../../components/Common/Cards";
import SecondaryButton from "../../components/Common/Buttons/SecondaryButton";
import { getStaticPaths, PastePageProps, getStaticProps } from "../../modules/Paste";
import AdminLayout from "../../components/Admin/AdminLayout";
import { apiCaller } from "../../utils/fetcher";

const AdminPastePage: FC<PastePageProps> = ({ paste, success }) => {
  if (!success) return <></>;
  const [gameLink, setGameLink] = useState('/images/paste/cardbg.png');

  useEffect(() => {
    const fetchGameThumbnailLink = async () => {
      try {
        const url = new URL(paste.gameLink);
        const gameId = url.pathname.split('/')[2];
        
        const res = await apiCaller.get(`https://apis.roblox.com/universes/v1/places/${gameId}/universe`);
        const result = await apiCaller.get(`https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=${res['universeId']}&countPerUniverse=1&defaults=true&size=768x432&format=Png&isCircular=false`)
        if(result && result.data.thumbnails && result.data.thumbnails[0]) {
          setGameLink(result.data.thumbnails[0])
        }
      } catch (error) {
        
      }
    }
    if(paste.gameLink) {
      fetchGameThumbnailLink();
    }
  }, [paste])
  
  return (
    <AdminLayout>
      <div className="mx-[35px] flex gap-4">
        <div className="w-[300px] bg-[#FAFAFA]"></div>
        <div className="w-full">
          <div className="relative w-full mb-[120px]">
            <img src={gameLink} alt="bg" className="absolute top-0 left-0 right-0 rounded-t-[10px] w-full" />
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
          <div className="w-full h-[250px] bg-[#FAFAFA]"></div>
        </div>
        <div className="w-[300px] bg-[#FAFAFA]"></div>
      </div>
    </AdminLayout>
  );
}

export { getStaticProps, getStaticPaths };

export default AdminPastePage;