import Image from "next/image";
import React from "react";
import img1 from "../../../public/releaseClock.png";

const NewReleaseCard = () => {
  return (
    <div>
      <div className="flex bg-primary w-[368px] h-[136px] rounded-[24px]  ">
        <div className="w-[136px] h-[136px] rounded-[24px] overflow-hidden  ">
          <Image
            src={img1}
            alt="new release clock image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col px-[16px] py-[16px]">
          <div>Audemars Pigue</div>
          <div className="font-jost text-[20px] font-normal">
            DB27 Titan Hawk JPS
          </div>
          <div className="mt-[32px] font-inter font-light text-xs">
            23 Dec 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReleaseCard;
