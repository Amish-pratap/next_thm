import Image from "next/image";
import img1 from "../public/home.png";
import img2 from "../public/newReleases.png";
import img3 from "../public/eventBackground.png";
import img4 from "../public/icons/sun.svg";
import img5 from "../public/icons/pause.svg";
import img6 from "../public/icons/circle.svg";
import img7 from "../public/icons/arrow.svg";
import img8 from "../public/icons/goldCircle.svg";

import LandingCard from "./components/landingCard/page";
import BlogCard from "./components/blogCard/page";
import NewReleaseCard from "./components/newReleaseCard/page";
import EventCard from "./components/eventCard/page";
import FollowCard from "./components/followCard/page";

export default function Home() {
  return (
    <main>
      {/* video section   */}
      <div className="h-[585px] relative home-gradient z-15">
        <div className="absolute inset-0">
          <Image src={img1} alt="watch image" layout="fill" objectFit="cover" />
        </div>
        <div className="relative px-[80px] pt-[60px] text-white">
          <div className="flex  justify-between items-center">
            <div className="flex ">
              <Image src={img4} alt="sun icon" className="mr-[8px]" />
              <div className="flex items-center font-inter font-light text-[14px] leading-5 ">
                MONDAY, 29 OCT 2023 |
              </div>
              <button className="flex items-center bg-transparent text-primary px-4 py-2  rounded-md">
                <span className="gold-text font-jost leading-6 font-medium ">
                  TAKE THE QUIZ
                </span>
                <Image src={img7} alt="arrow icon" width={24} height={24} />
              </button>
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
          <div className="font-jost font-medium leading-6 tracking-wider ">
            FEATURED
          </div>
          <div className="font-rolinko text-[28px] w-[407px] font-thin leading-[34px] tracking-wider">
            Celebrating The Intersection Of Horology And Mithai This Festive
            Season
          </div>
          <div>READ MORE</div>
        </div>
      </div>

      {/* landing section */}

      <div className="h-[504px] mt-[-80px] flex px-[82px] pt-[40px] pb-[114px] space-x-4  rounded-tl-[80px] bg-white z-10 relative">
        <LandingCard />
        <LandingCard />
        <LandingCard />
      </div>

      {/* articles section */}

      <div className="h-[712px] bg-primary flex flex-col relative mt-[-80px] rounded-tr-[80px] z-20 pt-[40px]">
        <div className="flex h-[169px] ">
          <div className="flex flex-col ">
            <div className="font-jost text-[28px] font-normal">
              READ OUR ARTICLES
            </div>
            <div className="font-jost">
              Here, you will discover the best brands, the most innovative
              features, and the most stylish designs in the world of luxury
              watches. Stay tuned for our articles and reviews on the finest
              watches that money can buy.
            </div>
          </div>
          <div className="font-jost">VIEW ALL ARTICLES</div>
        </div>
        <div className="flex pt-[11px] space-x-[80px] px-[80px] ">
          <ul className="flex flex-col space-y-[24px] w-[180px]  ">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
            <li className="relative group">
              Feature 6<span className="gradient-overlay"></span>
            </li>
            <li className="relative group">
              Feature 7<span className="gradient-overlay"></span>
            </li>
          </ul>
          <div className="flex space-x-[23px]">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
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

      <div className="h-[1030px] relative px-[80px] py-[40px] relative mt-[-80px] rounded-tr-[80px] z-40 overflow-hidden ">
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

      <div className="h-[760px] brand_gradient text-white px-[80px] py-[40px]">
        <div className="flex justify-between">
          <div className="  ">DISCOVER BRANDS</div>
          <div>VIEW ALL BRANDSf</div>
        </div>
        <div>
          Watch brands are the essence of luxury watches. They represent the
          history, the quality, and the style of these amazing timepieces. Read
          more about watch brands on The Hour Markers.
        </div>
        <div className="flex space-x-5 py-[40px]">
          <div className="">
            <div>A</div>
            <ul>
              <li>Alpina</li>
              <li>A Lange & Schon</li>
              <li>Armin Strom</li>
              <li>Audemars Piguet</li>
            </ul>
          </div>
          <div className="">
            <div>B</div>
            <ul>
              <li>Baume Et Mericer</li>
              <li>Blancpain</li>
              <li>Bovet</li>
              <li>Breguet</li>
              <li>Breitling</li>
              <li>Bulgari</li>
            </ul>
          </div>
          <div className="">
            <div>C</div>
            <ul>
              <li>Carl F. Bucherer</li>
              <li>Cartier</li>
              <li>Chopard</li>
              <li>Citizen</li>
              <li>Chronoswiss</li>
              <li>Czapek & Cie</li>
            </ul>
          </div>
          <div className="">
            <div>D</div>
            <ul>
              <li>De Bethune</li>
              <li>Alpina</li>
              <li>Alpina</li>
            </ul>
          </div>
          <div className="">
            <div>F</div>
            <ul>
              <li>De Fredrique Constant</li>
              <li>F.P. Journe</li>
              <li>Furlan Marri</li>
            </ul>
          </div>
          <div className="">
            <div>G</div>
            <ul>
              <li>Greubel</li>
              <li>Girard Perregaux</li>
              <li>Glashutte Original</li>
              <li>Grand Seiko</li>
            </ul>
          </div>
        </div>
      </div>

      {/* follow thm section  */}
      <div className="bg-black text-white">
        <FollowCard />
      </div>
    </main>
  );
}
