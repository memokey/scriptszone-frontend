import Image from "next/image";
import React from "react";

type CardType = {
  title?: string;
  style?: string;
  children: any;
  bgImg?: string;
  setting?: any;
}

const Card = (props: CardType) => {
  return (
    <div 
      className={`relative w-full bg-white rounded-[10px] p-6 z-10 ${props.style? props.style: ''}`}
      style={{boxShadow: '10px 30px 70px 0px rgba(0, 0, 0, 0.06)'}}
    >
      {props.title && (
        <div className={`border-b border-[#EDEDED] rounded-[10px] flex items-center relative z-20`}>
          <div className="flex w-full justify-between items-center mb-[36px]">
            <div className="text-[20px] font-bold text-[#3C6AFF]">
              {props.title}
            </div>
            <div className="">
              {props.setting}
            </div>
          </div>
        </div>
      )}
      <div className="z-20 pt-[20px]">
        {props.children}
      </div>
    </div>
  );
}

export default Card;