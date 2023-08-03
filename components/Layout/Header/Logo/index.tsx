import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type LogoType = {
  onClick: any;
}

const Logo = (props: LogoType) => {
  const router = useRouter();
  return (
    <div className="flex items-end cursor-pointer" onClick={props.onClick}>
      <Image src={"/images/logo.png"} alt="Logo" className="" width={60} height={60} />
      <h1 className="text-[36px] font-bold text-[#424242]">Scriptszone</h1>
    </div>
  );
}

export default Logo;