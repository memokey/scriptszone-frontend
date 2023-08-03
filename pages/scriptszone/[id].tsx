import React, { FC, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Card } from "../../components/Common/Cards";
import SecondaryButton from "../../components/Common/Buttons/SecondaryButton";
import { getStaticPaths, PastePageProps, getStaticProps } from "../../modules/Paste";
import { apiCaller } from "../../utils/fetcher";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PastePage: FC<PastePageProps> = ({ paste, success }) => {
  if (!success) return <></>;
  const [gameLink, setGameLink] = useState('/images/paste/cardbg.png');

  useEffect(() => {
    apiCaller.get(`/pastes/countViews/${paste._id}`);
  }, []);

  useEffect(() => {
    const fetchGameThumbnailLink = async () => {
      try {
        const {
          data: res
        } = await apiCaller.post(`/pastes/fetchThumbnail`, {gameLink: paste.gameLink});
        setGameLink(res.imageUrl);
      } catch (error) {
        
      }
    }
    if(paste.gameLink) {
      fetchGameThumbnailLink();
    }
  }, [paste])

  return (
    <Layout>
      <div className="w-[1369px] mx-auto flex gap-4">
        <div className="w-[300px] bg-[#FAFAFA]"></div>
        <div className="w-full">
          <div className="relative w-full mb-[120px]">
            <div className="absolute top-0 left-0 overflow-hidden right-0 h-[152px] rounded-t-[10px] w-full">
              <img src={gameLink} alt="bg" className="rounded-t-[10px] w-full" />
            </div>
            <Card title={paste.title} style="absolute top-[76px] left-0 right-0 linear-gradient-card" bgImg="/images/paste/cardbg.png">
              <SyntaxHighlighter language="javascript" style={coy}>
                {paste.scripts}
              </SyntaxHighlighter>
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
    </Layout>
  );
}

export { getStaticProps, getStaticPaths };

export default PastePage;