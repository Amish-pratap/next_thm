"use client";
import React, { useEffect, useState } from "react";
import img1 from "../../../public/menu.svg";
import img2 from "../../../public/home.svg";
import img3 from "../../../public/THM.svg";
import img4 from "../../../public/user.svg";
import img5 from "../../../public/search.svg";
import img6 from "../../../public/search_overlay.svg";
import img7 from "../../../public/icons/cross.svg";

import Image from "next/image";
import Link from "next/link";
import ArticleSection from "@/app/navComponents/articleSection/page";
import NewReleaseSection from "@/app/navComponents/releaseSection/page";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Articles");

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
    // toggleMenu(); // Close the menu after selecting a section (optional)
  };

  const renderSection = () => {
    switch (selectedSection) {
      case "Articles":
        return <ArticleSection />;
      case "New Releases":
        return <NewReleaseSection />;
      // Add cases for other sections as needed...
      default:
        return null;
    }
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <nav className="sticky top-0 z-[500]">
      <div className="flex justify-between h-[88px] bg-[#020101] items-center">
        <div className="flex">
          <div className="ml-[80px]">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              <Image
                src={isOpen ? img7 : img1}
                alt="menu"
                width={32}
                height={32}
              />
            </button>
          </div>
          <Link href="/">
            <div className="w-[32px] h-[32px] ml-[56px]">
              <Image src={img2} alt="home" />
            </div>
          </Link>
        </div>
        <Link href="/">
          <div>
            <Image src={img3} alt="the hour makers" />
          </div>
        </Link>
        <div className="flex">
          <Link href="/pages/login">
            <div className="mr-[56px]">
              <Image src={img4} alt="user icon" />
            </div>
          </Link>
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
      {isOpen && (
        <div className="bg-white  absolute w-full h-[800px]  flex justify-between ">
          <div className="w-[516px] bg-red-200 pt-[95px] px-[80px] space-y-[33px]">
            <div
              className={`${
                selectedSection === "Articles" ? "bg-red-300" : ""
              }`}
            >
              <button
                className="font-jost text-[28px] font-light"
                onClick={() => handleSectionClick("Articles")}
              >
                Articles
              </button>
            </div>
            <div
              className={`${
                selectedSection === "New Releases" ? "bg-red-300" : ""
              }`}
            >
              <button
                className="font-jost text-[28px] font-light"
                onClick={() => handleSectionClick("New Releases")}
              >
                New Releases
              </button>
            </div>
            <div className="font-jost text-[28px] font-light">Events</div>
            <div className="font-jost text-[28px] font-light">Brandss</div>
            <div className="font-jost text-[28px] font-light">
              Collector's Corner
            </div>
            <div className="font-jost text-[28px] font-light">Aobut Us</div>
            <div className="font-jost text-[16px]">print</div>
            <div className="font-jost text-[16px]">videos</div>
            <div className="font-jost text-[16px]">Fashion Watches</div>
            <div className="font-jost text-[16px]">Change Language</div>
          </div>
          {renderSection()}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
