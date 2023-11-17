import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#2F2525] text-white h-[244px] flex flex-col">
        <div className="container flex pt-[34px]   ">
          <div className="footer-section ml-[96px]">
            <h2 className="text-lg font-inter font-medium  text-base leading-125">
              QUICK LINKS
            </h2>
            <div className="flex">
              <div>
                <ul className="list-none font-inter-300 font-light space-y-5 mt-[20px] text-xs mr-[79px]">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Signup</li>
                </ul>
              </div>
              <div>
                <ul className="list-none font-inter-300 font-light space-y-5 mt-[20px] text-xs">
                  <li>contribute</li>
                  <li>Careers</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-section ml-[96px]">
            <h2 className="text-lg font-inter font-medium  text-base leading-125">
              CATEGORIES
            </h2>
            <div className="flex">
              <div>
                <ul className="list-none font-inter-300 font-light space-y-5 mt-[20px] text-xs mr-[79px]">
                  <li>Featured</li>
                  <li>In my opinion</li>
                  <li>History has it</li>
                </ul>
              </div>
              <div>
                <ul className="list-none font-inter-300 font-light space-y-5 mt-[20px] text-xs">
                  <li>In coversation</li>
                  <li>Industry News</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-section ml-[96px] ">
            <h2 className="text-lg font-inter font-medium  text-base leading-125">
              EVENTS
            </h2>
            <div className="flex">
              <div>
                <ul className="list-none font-inter-300 font-light space-y-5 mt-[20px] text-xs mr-[79px]">
                  <li>Watch & Wonders, Geneva 2022</li>
                  <li>Geneva Watch Days 2022</li>
                  <li>Dubai Watch Week - 2021</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-section ml-[96px] ">
            <h2 className="text-lg font-inter font-medium  text-base leading-125">
              OTHER
            </h2>
            <div className="flex">
              <div>
                <ul className="list-none font-inter-300 font-light space-y-5 mt-[20px] text-xs mr-[79px]">
                  <li>Terms of use</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end">
          <p className="text-[8px] mr-[80px] mt-[33px]">
            @2021 THM. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
