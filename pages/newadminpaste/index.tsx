import React, { useEffect, useState } from "react";
import { Card } from "../../components/Common/Cards";
import PrimaryButton from "../../components/Common/Buttons/PrimaryButton";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/router";
import AdminLayout from "../../components/Admin/AdminLayout";
import { apiCaller } from "../../utils/fetcher";
import toast from 'react-hot-toast';
import Editor from "react-simple-code-editor";
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

const NewAdminPaste = () => {
  const [title, setTitle] = useState('');
  const [scripts, setScripts] = useState('');
  const [description, setDescription] = useState('');
  const [gameLink, setGameLink] = useState('');
  const router = useRouter();
  const {
    ready, 
    authenticated,
    getAccessToken 
  } = usePrivy();

  useEffect(() => {
    if(!ready || !authenticated) {
      router.push('/admin');
    }
  }, []);

  const insertNewPaste = async () => {
    const authToken = await getAccessToken();
    apiCaller.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${authToken}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    apiCaller.post("/pastes/newpaste", {
      title, scripts, description, gameLink
    }).then(res => {
      toast.success('The paste was inserted successfully.');
    })
    init();
  }

  const init = () => {
    setTitle('');
    setScripts('');
    setDescription('');
    setGameLink('');
  }

  return (
    <AdminLayout>
      {ready && authenticated && (
        <div className="w-[1369px] mx-auto">
          <Card title="New Paste *" style="mb-[40px]">
            <input 
              type="text" 
              placeholder="Input the title." 
              value={title} 
              onChange={(e) => {setTitle(e.target.value)}} 
              className="w-full px-6 py-3 mb-4 border border-[#E9E9E9] rounded-[6px] focus:outline-none"  
            />
            <Editor
              value={scripts}
              onValueChange={code => setScripts(code)}
              highlight={code => highlight(code, languages.js)}
              padding={'24px'}
              style={{
                fontFamily: 'Poppins',
                fontSize: 16,
              }}
            />
          </Card>
          <Card title="Description & Features : " style="mb-[40px]">
            <textarea 
              rows={10} 
              className="w-full px-6 py-3 border border-[#E9E9E9] rounded-[6px] focus:outline-none" 
              placeholder="List the script’s description and features here."
              value={description}
              onChange={(e) => {setDescription(e.target.value)}}
            />
          </Card>
          <div className="mb-[80px]">
            <div className="text-[20px] font-bold w-full text-[#3C6AFF] pb-6 border-b border-[#EDEDED] mb-8">
              Paste Settings
            </div>
            <div className="text-[black] text-[16px] font-normal mb-6">Game link *</div>
            <input 
              type="text" 
              className="px-6 py-3 border border-[#E9E9E9] rounded-[6px] focus:outline-none w-full mb-6"
              value={gameLink}
              onChange={(e) => {setGameLink(e.target.value)}} 
              placeholder="Paste the game that the script supports! (eg. roblox.com/games/game-id)" 
            />
            <PrimaryButton
              caption="Create New Paste"
              onClick={() => {
                insertNewPaste();
              }} 
            />
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default NewAdminPaste;