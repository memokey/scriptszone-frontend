import Link from "next/link";
import React from "react";

export type SocialLinkType = {
  icon: any;
  link: string;
};

const SocialLink = (props: SocialLinkType) => {
  return (
    <div className="bg-[#5b5650] rounded-full text-white p-[7px]">
      <Link href={props.link}>
        <span>{props.icon}</span>
      </Link>
    </div>
  );
}

export default SocialLink;