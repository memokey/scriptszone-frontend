import React, { FC, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Card } from "../../components/Common/Cards";
import SecondaryButton from "../../components/Common/Buttons/SecondaryButton";
import { getStaticPaths, PastePageProps, getStaticProps } from "../../modules/Paste";
import AdminLayout from "../../components/Admin/AdminLayout";
import { apiCaller, fetcher } from "../../utils/fetcher";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const AdminPastePage: FC<PastePageProps> = ({ paste, success }) => {
  if (!success) return <></>;
  const [gameLink, setGameLink] = useState('/images/paste/cardbg.png');
  const router = useRouter();

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

  const copy = () => {
    navigator.clipboard.writeText(paste.scripts).then(function() {
      toast('Copying to clipboard was successful!');
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }

  const download = () => {
    var blob = new Blob([paste.scripts], {type: 'text/plain'});
    var url = URL.createObjectURL(blob);
      
    var link = document.createElement('a');
    link.download = 't.lua';
    link.href = url;
    link.click();
  }
  
  return (
    <AdminLayout>
      <div className="w-[1369px] mx-auto flex gap-4">
        <div className="w-[300px]">
          <script data-cfasync="false" async type="text/javascript" src="//drubbersestia.com/tKJ6KABkY7ImVibF/67401"></script>
        </div>
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
                  onClick={copy}
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
                  onClick={() => {
                    router.push(`/raw/${paste._id}`)
                  }}
                />
                <SecondaryButton
                  caption="Download"
                  onClick={download}
                />
              </div>
            </div>
          </Card>
          <div className="w-full h-[250px]">
            <script data-cfasync="false" async type="text/javascript" src="//drubbersestia.com/t03CUCJiduwD8E5m/67400"></script>
          </div>
        </div>
        <div className="w-[300px]">
          <script data-cfasync="false" async type="text/javascript" src="//drubbersestia.com/te0TiHU8Clm/67402"></script>
        </div>
      </div>
    </AdminLayout>
  );
}

export { getStaticProps, getStaticPaths };

export default AdminPastePage;