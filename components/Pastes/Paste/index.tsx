import React from "react";
import Image from "next/image";
import { Card } from "../../Common/Cards";
import { minifyString } from "../../../utils";
import SecondaryButton from "../../Common/Buttons/SecondaryButton";
import { BanIcon, MessageIcon, TrashIcon, WarningIcon } from "../../Icons";

export type PasteType = {
  title: string;
  scripts: string;
  description: any;
  date: string;
}

const Paste = (props: PasteType) => {
  return (
    <Card style="mb-8">
      <div className="flex gap-4 mb-[48px]">
        <div className="">
          <Image src={"/images/paste/avatar.png"} width={62} height={62} alt={"avatar"} className="rounded-full" />
        </div>
        <div>
          <div className="flex gap-[10px] items-center mb-[6px]">
            <div className="text-secondary text-[20px] font-medium">{props.title}</div>
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
          onClick={() => {}} 
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