import BlogCard from "@/app/components/blogCard/page";
import React from "react";

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

const ArticlePage = () => {
  return (
    <div className="flex flex-col px-[80px] py-[40px] bg-primary ">
      <div className="font-jost text-[28px] text-heading">
        READ FROM OUR BLOG
      </div>
      <div className="flex mt-[40px] space-x-[40px]">
        <div>
          <div className="flex flex-col space-y-4 w-[180px] no-scrollbar">
            {options.map((option, index) => (
              <div key={index} className="px-4 py-2  rounded-md ">
                {option.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div>
            Here, you will discover the best brands, the most innovative
            features, and the most stylish designs in the world of Indian and
            international luxury watches. Stay tuned for our articles and
            reviews on the finest watches that money can buy.
          </div>
          <div>filters</div>
          <div className="flex">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
