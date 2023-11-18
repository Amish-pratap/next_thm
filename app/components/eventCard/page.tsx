import React from "react";
import img1 from "../../../public/eventImage.png";
import Image from "next/image";

const EventCard = () => {
  return (
    <div>
      <div className="h-[340px] w-[360px]  flex flex-col  ">
        <div className="h-[240px] overflow-hidden rounded-[24px] relative">
          <Image
            src={img1}
            alt="blog image"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[24px] left-[36px] w-[144px] h-[24px]  text-black rounded-[12px] gold-gradient flex items-center justify-center font-jost text-xs font-normal ">
            EVENTS BY THM
          </div>
        </div>
        <div className="mt-[16px] font-jost font-normal text-xl mx-[8px] ">
          THM X Frederique Constant: The Art of Watchmaking Showcased At The
          Watchmaker’s Brunch
        </div>
      </div>
    </div>
  );
};

export default EventCard;
