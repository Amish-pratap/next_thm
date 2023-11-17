import React from "react";
import img1 from "../../../public/menu.svg";
import img2 from "../../../public/home.svg";
import img3 from "../../../public/THM.svg";
import img4 from "../../../public/user.svg";
import img5 from "../../../public/search.svg";
import img6 from "../../../public/search_overlay.svg";

import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between h-[88px] bg-[#020101] items-center">
        <div className="flex">
          <div className="w-[32px] h-[32px] ml-[80px]">
            <Image src={img1} alt="menu" />
          </div>
          <div className="w-[32px] h-[32px] ml-[56px]">
            <Image src={img2} alt="home" />
          </div>
        </div>
        <div>
          <Image src={img3} alt="the hour makers" />
        </div>
        <div className="flex">
          <div className="mr-[56px]">
            <Image src={img4} alt="user icon" />
          </div>
          <div className="mr-[80px] flex relative">
            <Image src={img5} alt="search icon" />
            <Image
              src={img6}
              alt="overlay img"
              className="absolute left-[2px] top-[4px]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
