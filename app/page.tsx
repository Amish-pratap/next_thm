import Image from "next/image";
import img1 from "../public/home.png";
import img2 from "../public/newReleases.png";
import img3 from "../public/eventBackground.png";
import img4 from "../public/icons/sun.svg";
import img5 from "../public/icons/pause.svg";
import img6 from "../public/icons/circle.svg";
// import img7 from "../public/icons/arrow.svg";
import img8 from "../public/icons/goldCircle.svg";

import LandingCard from "./components/landingCard/page";
import BlogCard from "./components/blogCard/page";
import NewReleaseCard from "./components/newReleaseCard/page";
import EventCard from "./components/eventCard/page";
import FollowCard from "./components/followCard/page";
import Sbutton from "./components/secondaryButton/page";
// import NavSection from "./components/navSection/page";

const options = [
  "all",
  "featured",
  "in my opinion",
  "history has it",
  "industry news",
  "in conversation",
  "buying guides",
  "watch reviews",
  "indian watches",
  "new releases",
];

export default function Home() {
  return (
    <main>
      <div className="h-[585px] relative home-gradient z-15">
        <div className="absolute inset-0">
          <Image src={img1} alt="watch image" layout="fill" objectFit="cover" />
        </div>
        <div className="relative px-[80px] pt-[60px] text-white z-10">
          <div className="flex  justify-between items-center">
            <div className="flex ">
              <Image
                src={img4}
                alt="sun icon"
                width={16}
                height={16}
                className="mr-[8px]"
              />
              <div className="flex items-center font-inter font-light text-[14px] leading-5 mr-[8px] ">
                MONDAY, 29 OCT 2023 |
              </div>
              <Sbutton
                arrowColor="gold"
                textColor="goldg"
                text="TAKE THE QUIZ"
              />
            </div>
            <div className="flex ">
              <Image src={img5} alt="pause icon" className="mr-[28px]" />
              <div className="relative">
                <Image src={img6} alt="circle icon" />
                <Image
                  src={img8}
                  alt="circle icon"
                  width={23}
                  height={23}
                  className="absolute top-[1px] left-[1px]"
                />
              </div>
            </div>
          </div>
          <div className="font-jost font-medium leading-6 tracking-wider mt-[86px] ">
            FEATURED
          </div>
          <div className="font-rolinko text-[28px] w-[407px] font-thin leading-[34px] tracking-wider mt-[16px]">
            Celebrating The Intersection Of Horology And Mithai This Festive
            Season
          </div>
          <div className="py-[8px] gold-gradient w-[152px] rounded-[12px] text-black flex items-center justify-center font-jost font-medium mt-[16px]  ">
            READ MORE
          </div>
        </div>
        <div className=" absolute h-[585px] w-[720px] absolute top-0 left-0 home-gradient"></div>
      </div>

      {/* landing section */}

      <div className="h-[504px] mt-[-80px] flex px-[82px] pt-[40px] pb-[114px]   rounded-tl-[80px] bg-white z-10 relative">
        <div className="flex space-x-4">
          <LandingCard />
          <LandingCard />
          <LandingCard />
        </div>
      </div>

      {/* articles section */}

      <div className="h-[712px] bg-primary flex flex-col relative mt-[-80px] rounded-tr-[80px] z-20 pt-[40px] px-[80px]">
        <div>
          <div className="flex justify-between">
            <div className="font-jost text-[28px] font-normal text-heading">
              READ OUR ARTICLES
            </div>
            <button className="flex items-center bg-transparent  px-4 py-2  rounded-md">
              <Sbutton
                arrowColor="black"
                textColor="heading"
                text="VIEW ALL ARTICLES"
              />
            </button>
          </div>
          <div className="font-inter font-light tracking-wide mt-[16px]  w-[845px]">
            Here, you will discover the best brands, the most innovative
            features, and the most stylish designs in the world of luxury
            watches. Stay tuned for our articles and reviews on the finest
            watches that money can buy.
          </div>
        </div>

        <div className="flex  space-x-[80px]   mt-[40px] justify-between ">
          <div className="flex flex-col h-[400px] overflow-y-auto  space-y-4 w-[180px] no-scrollbar">
            {options.map((option, index) => (
              <div key={index} className="px-4 py-2 bg-gray-300 rounded-md ">
                {option.toUpperCase()}
              </div>
            ))}
          </div>
          <div className="flex space-x-[23px] ">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        <div className="absolute top-[380px] gradient-overlay left-[66px] w-[210px] h-[246px] "></div>
      </div>

      {/* new releases section */}

      <div className="h-[797px] flex space-x-[40px] relative mt-[-80px] rounded-tl-[80px] z-30 bg-white">
        <div className="pt-[40px] pl-[80px]">
          <div className="flex justify-between">
            <div className=" font-rolinko text-[18px]">NEW RELEASES</div>
            <div className="">VIEW ALL RELEASES</div>
          </div>
          <div>
            The Hour Markers has curated the latest and greatest models from the
            top brands in the industry. Don’t miss our new releases section,
            where you can discover the best of the best in luxury watches.
          </div>
          <div className="flex">
            <div>RELEASES OF 2023</div>
            <div>RELEASES OF 2022</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <NewReleaseCard />
            <NewReleaseCard />
            <NewReleaseCard />
            <NewReleaseCard />
          </div>
        </div>

        <div className="w-[490px] bg-heading ">
          <Image
            src={img2}
            alt="new release image"
            className="opacity-20 object-cover h-full w-full"
          />
        </div>
      </div>

      {/* explore events section*/}

      <div className="h-[1030px]  px-[80px] py-[40px] relative mt-[-80px] rounded-tr-[80px] z-40 overflow-hidden ">
        <div className="absolute inset-0 w-[1899px] h-[1132px] left-[-120px] top-[-103px] ">
          <Image src={img3} alt="watch image" layout="fill" objectFit="cover" />
        </div>
        <div className="relative">
          <div className="flex justify-between">
            <div className="  ">EXPLORE EVENTS G</div>
            <div>VIEW ALL EVENTS</div>
          </div>
          <div>
            Watch events are the perfect place to see the latest trends and
            innovations in luxury watches. Read our articles and learn about the
            most exciting and exclusive watch events around the world.
          </div>

          <div className="grid grid-cols-2 gap-10 w-[940px]">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>

      {/* brands section  */}

      <div className="h-[760px] brand_gradient bg-heading text-white px-[80px] py-[40px] relative mt-[-80px] rounded-tl-[80px] z-50">
        <div className="flex justify-between">
          <div className=" font-jost text-[28px] gold-text  ">
            DISCOVER BRANDS
          </div>
          <button className="flex items-center bg-transparent text-primary px-4 py-2  rounded-md">
            <span className="gold-text font-jost leading-6 font-medium ">
              VIEW ALL BRNDS
            </span>
            <Sbutton arrowColor="gold" textColor="goldg" text="he he" />
            {/* <Image src={img7} alt="arrow icon" width={24} height={24} /> */}
          </button>
        </div>
        <div className="w-[618px] mt-[19px] font-inter font-light tracking-[0.32px]">
          Watch brands are the essence of luxury watches. They represent the
          history, the quality, and the style of these amazing timepieces. Read
          more about watch brands on The Hour Markers.
        </div>
        <div className="flex space-x-5 py-[40px] justify-between">
          <div className="">
            <div className=" font-rolinko text-[80px] gold-text font-normal">
              A
            </div>
            <ul className="font-inter font-light tracking-wide">
              <li className="mt-[16px]">Alpina</li>
              <li className="mt-[24px]">A Lange & Schon</li>
              <li className="mt-[24px]">Armin Strom</li>
              <li className="mt-[24px]">Audemars Piguet</li>
            </ul>
          </div>
          <div className="">
            <div className=" font-rolinko text-[80px] gold-text font-normal">
              B
            </div>
            <ul className="font-inter font-light tracking-wide">
              <li className="mt-[16px]">Baume Et Mericer</li>
              <li className="mt-[24px]">Blancpain</li>
              <li className="mt-[24px]">Bovet</li>
              <li className="mt-[24px]">Breguet</li>
              <li className="mt-[24px]">Breitling</li>
              <li className="mt-[24px]">Bulgari</li>
            </ul>
          </div>
          <div className="">
            <div className=" font-rolinko text-[80px] gold-text font-normal">
              C
            </div>
            <ul className="font-inter font-light tracking-wide">
              <li className="mt-[16px]">Carl F. Bucherer</li>
              <li className="mt-[24px]">Cartier</li>
              <li className="mt-[24px]">Chopard</li>
              <li className="mt-[24px]">Citizen</li>
              <li className="mt-[24px]">Chronoswiss</li>
              <li className="mt-[24px]">Czapek & Cie</li>
            </ul>
          </div>
          <div className="">
            <div className=" font-rolinko text-[80px] gold-text font-normal">
              D
            </div>
            <ul className="font-inter font-light tracking-wide">
              <li className="mt-[16px]">De Bethune</li>
              <li className="mt-[24px]">Alpina</li>
              <li className="mt-[24px]">Alpina</li>
            </ul>
          </div>
          <div className="">
            <div className=" font-rolinko text-[80px] gold-text font-normal">
              F
            </div>
            <ul className="font-inter font-light tracking-wide">
              <li className="mt-[16px]">De Fredrique Constant</li>
              <li className="mt-[24px]">F.P. Journe</li>
              <li className="mt-[24px]">Furlan Marri</li>
            </ul>
          </div>
          <div className="">
            <div className=" font-rolinko text-[80px] gold-text font-normal">
              G
            </div>
            <ul className="font-inter font-light tracking-wide">
              <li className="mt-[16px]">Greubel</li>
              <li className="mt-[24px]">Girard Perregaux</li>
              <li className="mt-[24px]">Glashutte Original</li>
              <li className="mt-[24px]">Grand Seiko</li>
            </ul>
          </div>
        </div>
      </div>

      {/* follow thm section  */}
      <div className="bg-black text-white  relative mt-[-80px] rounded-tr-[80px] z-[60] overflow-hidden">
        <FollowCard />
      </div>
    </main>
  );
}
