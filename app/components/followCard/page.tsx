import React from "react";
import img1 from "../../../public/followImage.jpeg";
import img2 from "../../../public/icons/face.svg";
import img3 from "../../../public/icons/insta.svg";
import img4 from "../../../public/icons/linkedIn.svg";
import img5 from "../../../public/icons/youTube.svg";
import Image from "next/image";

const FollowCard = () => {
  return (
    <div className="h-[430px] flex justify-between">
      <div className="flex flex-col">
        <div className="gold-gradient ">FOLLOW THE HOUR MARKERS</div>
        <div className="flex">
          <div className="flex">
            <Image src={img2} alt="facebook icon" /> The Hour Markers |
          </div>
          <div className="flex">
            <Image src={img3} alt="facebook icon" />
            @thehourmarkers |
          </div>
          <div className="flex">
            <Image src={img4} alt="facebook icon" />
            The Hour Markers |{" "}
          </div>
          <div className="flex">
            <Image src={img5} alt="facebook icon" />
            The Hour Markers
          </div>
        </div>
      </div>
      <div className="w-[480px] bg-red-300 over">
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
