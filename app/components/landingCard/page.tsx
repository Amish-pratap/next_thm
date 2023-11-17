import Image from "next/image";
import React from "react";
import img1 from "../../../public/blog1.png";
import img2 from "../../../public/blog2.png";
import img3 from "../../../public/blog3.png";

const LandingCard = () => {
  return (
    <div>
      <div className="h-[350px] w-[411px]  flex flex-col ">
        <div className="h-[240px] overflow-hidden rounded-[24px] relative">
          <Image
            src={img1}
            alt="blog image"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[24px] left-[36px] w-[144px] h-[24px]  text-black rounded-[12px] gold-gradient flex items-center justify-center ">
            IN MY OPINION
          </div>
        </div>
        <div className="mt-[24px] ">
          Top complications for women who care about style with substance
        </div>
        <div className="flex mt-[8px] justify-between ">
          <div>By Punit Mehta | 22 Oct 2023</div>
          <div>4 min read</div>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
