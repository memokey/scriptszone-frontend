import React from "react";
import Image from "next/image";
import { Card } from "../../Common/Cards";
import { minifyString } from "../../../utils";
import SecondaryButton from "../../Common/Buttons/SecondaryButton";
import { BanIcon, MessageIcon, TrashIcon, WarningIcon } from "../../Icons";
import { useRouter } from "next/router";
import { apiCaller } from "../../../utils/fetcher";
import { toast } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { removePaste } from "../../../redux/slices/authSlice";
import { usePrivy } from "@privy-io/react-auth";

export type PasteType = {
  id: string;
  title: string;
  scripts: string;
  description: any;
  gameLink: string;
  date: string;
}

const Paste = (props: PasteType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { getAccessToken } = usePrivy();

  const deletePaste = async () => {
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
    apiCaller.post('/pastes/deletepaste', {
      id: props.id,
    }).then(res => {
      toast.success('The paste was Successfully removed.');
      dispatch(removePaste(props.id))
    })
  }

  return (
    <Card style="mb-8">
      <div className="flex gap-4 mb-[48px]">
        <div className="">
          <Image src={"/images/paste/avatar.png"} width={62} height={62} alt={"avatar"} className="rounded-full" />
        </div>
        <div>
          <div className="flex gap-[10px] items-center mb-[6px]">
            <div 
              className="text-secondary text-[20px] font-medium hover:underline cursor-pointer"
              onClick={() => {
                router.push(`/adminpaste/${props.id}`)
              }}
            >{props.title}</div>
            <div className="text-grey text-[16px] font-normal">{props.date}</div>
          </div>
          <div className="text-grey text-[16px] font-normal">
            {minifyString(props.scripts, 62)}
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <SecondaryButton
          key={0}
          caption="Delete"
          icon={<TrashIcon />}
          onClick={() => {
            deletePaste();
          }} 
        />
        <SecondaryButton
          key={0}
          caption="Warn"
          icon={<div className="w-7 h-7"><WarningIcon stroke="#FF3D3D" /></div>}
          onClick={() => {}} 
        />
        <SecondaryButton
          key={0}
          caption="Ban"
          icon={<BanIcon />}
          onClick={() => {}} 
        />
        <SecondaryButton
          key={0}
          caption="MSG"
          icon={<MessageIcon />}
          onClick={() => {}} 
        />
      </div>
    </Card>
  );
}

export default Paste;