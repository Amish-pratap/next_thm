import Image from "next/image";
import React from "react";
import img1 from "../../../public/blogCard.png";
import img2 from "../../../public/clock.svg";

const BlogCard = () => {
  return (
    <div>
      <div className="w-[325px] h-[346px]   relative">
        <div className="absolute left-[16px] right-[16px] rounded-[12px] overflow-hidden z-10">
          <Image
            src={img1}
            alt="blog image"
            className=" h-[200px] w-[293px]  object-cover"
          />
          <div className="absolute top-[15px] left-[30px] w-[110px] h-[24px] bg-primary text-black rounded-[8px] flex justify-center items-center   ">
            <Image
              src={img2}
              alt="clock logo"
              className="w-[16px] h-[16px] mr-2"
            />
            <div className="font-inter text-xs">4 min read</div>
          </div>
        </div>

        <div className="bg-white rounded-[12px] h-[330px] w-full absolute mt-[16px] ">
          <div className="pt-[200px] pl-[24px] pr-[18px]">
            <div className="font-jost text-heading font-normal text-[20px] leading-7">
              Seiko Prospex Welcomes Artist Nikhil Chinapa As Brand Friend In
              India
            </div>
            <div className="mt-[8px]">By Punit Mehta | 23 Nov 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
