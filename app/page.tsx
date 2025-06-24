"use client";

import React, { useState } from "react";
import CollapsedPill from "./components/collapsedPill";
import ExpandedPill from "./components/ExpandedPill";

export default function Home() {
  const [servicePills, setServicePills] = useState([
    {
      name: "Software Solutions Experts",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      bg: "bg-[#ccf5ff]",
      activeService: true,
    },
    {
      name: "eKYC",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      bg: "bg-[#dbf5ff]",
      activeService: false,
    },
    {
      name: "Payment Links",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      bg: "bg-[#e5f8ff]",
      activeService: false,
    },
    {
      name: "Invoicing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      bg: "bg-[#f0fbff]",
      activeService: false,
    },
    {
      name: "Consultancy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      bg: "bg-[#f4fcff]",
      hasSpace: true,
      activeService: false,
    },
  ]);

  const handleServiceClick = (clickedIndex: number) => {
    setServicePills((prevServices) =>
      prevServices.map((service, index) => ({
        ...service,
        activeService: index === clickedIndex ? true : false,
      }))
    );
  };

  const heights = [
    "h-12 md:h-[530px]",
    "h-12 md:h-[450px]",
    "h-12 md:h-[370px]",
    "h-12 md:h-[290px]",
    "h-12 md:h-[210px]",
  ];

  const mobileWidth = ["w-[100%]", "w-[90%]", "w-[80%]", "w-[70%]", "w-[60%]"];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] h-auto min-h-[691px] mx-4 md:mx-0 relative">
        <div className="flex flex-col md:flex-row items-center pt-8 md:pt-12 px-4 md:pl-[120px] md:pr-8"></div>
        <div className="relative flex flex-col md:flex-row gap-4 md:gap-5 justify-center items-center w-full">
          {servicePills.map((pill, index) => {
            const isActive = pill.activeService;

            return (
              <div
                key={`service-pill-${index}`}
                className={`
                    ${pill.bg}
                    ${
                      isActive
                        ? "h-[340px] md:h-[530px] w-full md:w-[893px]"
                        : `${heights[index]} md:w-16 ${mobileWidth[index]} cursor-pointer hover:shadow-lg`
                    }
                    rounded-[32px] md:rounded-[64px] border
                    ${isActive ? "border-[#b2edff]" : "border-[#ccf3ff]"}
                    ml-0 py-8 md:py-0
                    transition-all duration-500 ease-in-out overflow-hidden relative
                    flex-shrink-0 flex items-center justify-center
                  `}
                onClick={() => handleServiceClick(index)}
              >
                {isActive ? (
                  <ExpandedPill
                    name={pill.name}
                    description={pill.description}
                  />
                ) : (
                  <CollapsedPill
                    hasSpace={pill.hasSpace || false}
                    name={pill.name}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
