import React from "react";
import { SOCIAL_LINKS } from "../../../data/footer";
import SocialLink from "../../Common/Link/SocialLink";

const Footer = () => {
  return (
    <div className="px-[250px] bg-[#150E06] text-white pt-[48px]">
      <div className="flex justify-between items-center pb-[48px]">
        <div className="">
          <h1 className="text-[18px] font-bold">Scripts.zone</h1>
          <p className="text-[16px] font-normal">The better script site</p>
        </div>
        <div>
          <div className="flex gap-4">
            
          </div>
        </div>
      </div>
      <div className="mx-[24vw] border-b border-[#F3F5F7] flex"></div>
      <div className="flex justify-center text-[14px] pt-1 pb-4 font-normal">
        Copyright © 2023. All Right Reserved
      </div>
    </div>
  );
}

export default Footer;