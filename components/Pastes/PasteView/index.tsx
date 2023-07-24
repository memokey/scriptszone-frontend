import React from "react";
import { Card } from "../../Common/Cards";
import { EyeIcon } from "../../Icons/EyeIcon";
import { ReportIcon, UserGroupIcon, WarningIcon } from "../../Icons";

const PasteView = () => {
  return (
    <Card style="mb-[32px]">
      <div className="flex items-center gap-[19px] mb-[18px]">
        <EyeIcon />
        <div className="text-secondary text-[20px] font-medium">{'XXX'} Views</div>
      </div>
      <div className="flex gap-[36px] mb-[18px]">
        <div className="flex items-center gap-[19px]">
          <ReportIcon />
          <div className="text-secondary text-[20px] font-medium">{'XXX'} Views</div>
        </div>
        <div className="flex items-center gap-[19px]">
          <div className="w-[42px] h-[42px]">
            <WarningIcon stroke={'white'}/>
          </div>
          <div className="text-secondary text-[20px] font-medium">{'XXX'} Views</div>
        </div>
      </div>
      <div className="flex items-center gap-[19px]">
        <UserGroupIcon />
        <div className="text-secondary text-[20px] font-medium">{'XXX'} Views</div>
      </div>
    </Card>
  );
}

export default PasteView;