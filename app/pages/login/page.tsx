import Image from "next/image";
import React from "react";
import img1 from "../../../public/loginPage.png";
import img2 from "../../../public/mailIcon.png";
import img3 from "../../../public/facebook.png";
import img4 from "../../../public/google.png";
import Sbutton from "@/app/components/secondaryButton/page";

const Login = () => {
  return (
    <div className="h-[1046px] flex px-[80px] justify-between   login_gradient">
      <div className="w-[360px]    mt-[100px] flex flex-col ">
        <div className="flex">
          <div className="gold-gradient w-[180px] flex justify-center py-[8px] rounded-[12px] text-white">
            LOGIN
          </div>
          <div className="w-[180px] flex justify-center py-[8px] rounded-[12px] text-white">
            SIGNUP
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center pt-[43px] text-white">LOGIN</div>
          <div className="flex justify-center pt-[40px] text-white">
            login with
          </div>
          <div className="flex justify-center space-x-[16px] pt-[16px]">
            <div>
              <Image src={img2} width={40} height={40} alt="mail icon" />
            </div>
            <div>
              <Image src={img3} width={40} height={40} alt="facebook icon" />
            </div>
            <div>
              <Image src={img4} width={40} height={40} alt="google icon" />
            </div>
          </div>
          <div className="flex justify-center items-center mt-[40px]">
            <div className="border-t border-white flex-grow mr-4"></div>
            <div className="text-center text-white ">
              or continue with email
            </div>
            <div className="border-t border-white flex-grow ml-4"></div>
          </div>
        </div>
        <div className="flex flex-col mt-[40px] text-white">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            className="mt-[8px] bg-transparent border-white rounded-[12px] py-[10px] px-[18px] outline-none border focus:border-[#FFD085]"
          />
        </div>
        <div className="flex flex-col mt-[40px] relative text-white">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="mt-[8px] bg-transparent rounded-[12px] py-[10px] px-[18px] outline-none border border-white focus:border-[#FFD085]"
          />
        </div>
        <div className="mt-[27px] flex justify-end">
          <Sbutton textColor="goldg" arrowColor="gold" text="LOGIN IN" />
        </div>
      </div>
      <div className="  ">
        <div className="w-[519px] h-[640px] rounded-[24px] overflow-hidden bg-[#2F2525] mt-[100px]  ">
          <Image
            src={img1}
            alt="login page clock image "
            className="w-full h-full object-cover opacity-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
