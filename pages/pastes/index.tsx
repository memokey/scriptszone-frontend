import React from "react";
import Layout from "../../components/Layout";
import Paste from "../../components/Pastes/Paste";
import { PASTES } from "../../data/pastes";
import PasteView from "../../components/Pastes/PasteView";

const Pastes = () => {
  return (
    <Layout>
      <div className="mx-[132px] grid grid-cols-12 gap-[36px]">
        <div className="col-span-7">
          {PASTES.map((paste, index) => (
            <Paste
              key={index}
              {...paste} 
            />
          ))}
        </div>
        <div className="col-span-5">
          {[0,1,2,3,4].map((count) => (
            <PasteView key={count}/>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Pastes;