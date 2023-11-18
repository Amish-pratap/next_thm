import React from "react";
import img1 from "../../../public/followImage.jpeg";
import img2 from "../../../public/icons/face.svg";
import img3 from "../../../public/icons/insta.svg";
import img4 from "../../../public/icons/linkedIn.svg";
import img5 from "../../../public/icons/youTube.svg";
import img6 from "../../../public/youtubeImage1.png";
import img7 from "../../../public/youtubeImage2.png";
import img8 from "../../../public/icons/play.svg";
import Image from "next/image";

const FollowCard = () => {
  return (
    <div className="h-[430px] flex justify-between ">
      <div className="flex flex-col py-[40px] px-[70px]">
        <div className="gold-text font-jost text-[28px] font-normal leading-[34px] ">
          FOLLOW THE HOUR MARKERS
        </div>
        <div className="flex  pt-[29px]  ">
          <div className="flex items-center font-inter font-light mr-[8px]">
            <Image
              src={img2}
              alt="facebook icon"
              className="mr-[8px]"
              width={32}
              height={32}
            />
            The Hour Markers |
          </div>
          <div className="flex items-center font-inter font-light mr-[8px]">
            <Image
              src={img3}
              alt="facebook icon"
              className="mr-[8px]"
              width={32}
              height={32}
            />
            @thehourmarkers |
          </div>
          <div className="flex items-center font-inter font-light mr-[8px]">
            <Image
              src={img4}
              alt="facebook icon"
              className="mr-[8px]"
              width={32}
              height={32}
            />
            The Hour Markers |
          </div>
          <div className="flex items-center font-inter font-light mr-[8px] ">
            <Image
              src={img5}
              alt="facebook icon"
              className="mr-[8px]"
              width={32}
              height={32}
            />
            The Hour Markers
          </div>
        </div>
        <div className="flex space-x-[35px] pt-[43px] ">
          <div className=" w-[395px] h-[213px] rounded-[24px] overflow-hidden relative ">
            <Image
              src={img6}
              className="w-full h-full object-cover bg-[#020101] opacity-50"
              alt="follow page image"
            />
            <div className="absolute bottom-0 left-0 bg-heading opacity-90 px-[20px] py-[12px] font-inter font-light ">
              Retro-spective: Is Almost Every New Watch This Year Something
              We’ve Seen Before?
            </div>
            <div className=" absolute left-[188px] top-[78px] ">
              <Image src={img8} alt="play button" />
            </div>
          </div>
          <div className=" w-[395px] h-[213px] rounded-[24px]  overflow-hidden relative ">
            <Image
              src={img7}
              className="w-full h-full object-cover bg-[#020101] opacity-50  "
              alt="follow page image"
            />
            <div className="absolute bottom-0 left-0 bg-heading opacity-90 px-[20px] py-[12px]  font-inter font-light  ">
              Sushmita Sen Lets Out A Secret At The Nebula By Titan Art Deco
              Collection Laun...
            </div>
            <div className=" absolute left-[188px] top-[78px]  ">
              <Image src={img8} alt="play button" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[480px] bg-red-300 over ">
        <Image
          src={img1}
          className="w-full h-full object-cover"
          alt="follow page image"
        />
      </div>
    </div>
  );
};

export default FollowCard;
