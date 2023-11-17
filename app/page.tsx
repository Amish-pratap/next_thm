import Image from "next/image";
import img1 from "../public/home.png";
import img2 from "../public/newReleases.png";

import LandingCard from "./components/landingCard/page";
import BlogCard from "./components/blogCard/page";
import NewReleaseCard from "./components/newReleaseCard/page";

export default function Home() {
  return (
    <main>
      {/* video section   */}
      <div className="h-[585px] relative">
        <div className="absolute inset-0">
          <Image src={img1} alt="watch image" layout="fill" objectFit="cover" />
        </div>
        <div className="relative">
          <div>hello world</div>
          <div>hello bro</div>
          <div>hello bro</div>
        </div>
      </div>

      {/* landing section */}

      <div className="h-[504px] mt-[-80px] flex px-[82px] pt-[40px] pb-[114px] space-x-4  rounded-tl-[80px] bg-white z-10 relative">
        <LandingCard />
        <LandingCard />
        <LandingCard />
      </div>

      {/* articles section */}

      <div className="h-[712px] bg-primary flex flex-col relative mt-[-80px] rounded-tr-[80px] z-20">
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

      <div className="h-[797px] flex space-x-[40px]">
        <div className="">
          <div className="flex justify-between">
            <div>NEW RELEASES</div>
            <div>VIEW ALL RELEASES</div>
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

        <div className="w-[490px] bg-[#2F2525] opacity-80">
          <Image src={img2} alt="new release image" />
        </div>
      </div>
    </main>
  );
}
