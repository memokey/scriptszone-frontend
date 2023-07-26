import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <div className="flex items-end cursor-pointer" onClick={() => {router.push('/admin')}}>
      <Image src={"/images/logo.png"} alt="Logo" className="" width={60} height={60} />
      <h1 className="text-[36px] font-bold text-[#424242]">Scriptszone</h1>
    </div>
  );
}

export default Logo;