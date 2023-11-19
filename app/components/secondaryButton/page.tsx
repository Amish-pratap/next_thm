import React from "react";

interface SbuttonProps {
  arrowColor: string;
  textColor: string;
  text: string;
}

const Sbutton: React.FC<SbuttonProps> = ({ arrowColor, textColor, text }) => {
  return (
    <button className="flex items-center bg-transparent text-primary  rounded-md">
      <span className={`text-${textColor} font-jost leading-6 font-medium`}>
        {text}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 25 25"
        fill="none"
      >
        {arrowColor !== "gold" ? (
          <path
            d="M9.94263 18.8594L15.9426 12.8594L9.94263 6.85938"
            stroke={`${arrowColor}`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <>
            <path
              d="M9.87231 18.1406L15.8723 12.1406L9.87231 6.14062"
              stroke="url(#paint0_linear_1277_3240)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1277_3240"
                x1="9.87231"
                y1="18.1406"
                x2="16.5274"
                y2="17.7656"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFD085" />
                <stop offset="1" stopColor="#E9D99D" />
              </linearGradient>
            </defs>
          </>
        )}
      </svg>
    </button>
  );
};

export default Sbutton;
