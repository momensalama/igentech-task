"use client";

import React, { useEffect, useState } from "react";
import CollapsedPill from "./components/collapsedPill";
import ExpandedPill from "./components/ExpandedPill";
import ArrowButton from "./components/ArrowButton";
import { ServicePill } from "@/types";

export default function Home() {
  const [servicePills, setServicePills] = useState<ServicePill[]>([]);

  const handleServiceClick = (clickedIndex: number) => {
    setServicePills((prevServices) =>
      prevServices.map((service, index) => ({
        ...service,
        activeService: index === clickedIndex,
      }))
    );
  };

  const handleNextService = () => {
    const currentIndex = servicePills.findIndex((pill) => pill.activeService);
    if (currentIndex < servicePills.length - 1) {
      handleServiceClick(currentIndex + 1);
    }
  };

  const handlePreviousService = () => {
    const currentIndex = servicePills.findIndex((pill) => pill.activeService);
    if (currentIndex > 0) {
      handleServiceClick(currentIndex - 1);
    }
  };

  const heights = [
    "h-12 md:h-[530px]",
    "h-12 md:h-[450px]",
    "h-12 md:h-[370px]",
  ];

  const mobileWidth = ["w-[100%]", "w-[90%]", "w-[80%]"];

  const fetchServicePills = async () => {
    const response = await fetch(
      "https://backend.igentech.co/api/v1/content/software-development"
    );
    const data = await response.json();
    const services = data.data.services.map(
      (service: ServicePill, index: number) => ({
        ...service,
        activeService: index === 0, // to Set first service as active by default
      })
    );
    setServicePills(services);
  };

  useEffect(() => {
    fetchServicePills();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] h-auto min-h-[691px] mx-4 md:mx-0 relative">
        <div className="flex flex-col md:flex-row items-center pt-8 md:pt-12 px-4 md:pl-[120px] md:pr-8"></div>
        <div className="relative flex flex-col md:flex-row gap-4 md:gap-5 justify-center items-center flex-wrap w-full ">
          {servicePills.map((pill, index) => {
            const isActive = pill.activeService;

            return (
              <div
                key={`service-pill-${index}`}
                className={`
                    ${
                      isActive
                        ? `${
                            index === 1 ? "h-[390px]" : "h-[360px]"
                          } md:h-[530px] w-full md:w-[893px]`
                        : `${heights[index]} md:w-16 ${mobileWidth[index]} cursor-pointer hover:shadow-lg`
                    }
                    rounded-[32px] md:rounded-[64px] border
                    ml-0 py-8 md:py-0
                    transition-all duration-500 ease-in-out overflow-hidden relative
                    flex-shrink-0 flex items-center justify-center
                  `}
                style={{
                  backgroundColor: pill.service_color,
                  borderColor: pill.service_color,
                }}
                onClick={() => handleServiceClick(index)}
              >
                {isActive ? (
                  <ExpandedPill
                    name={pill.service_title}
                    description={pill.service_description}
                  />
                ) : (
                  <CollapsedPill
                    hasSpace={pill.hasSpace || false}
                    name={pill.service_title}
                  />
                )}
              </div>
            );
          })}

          <div className="hidden md:flex gap-4 mt-4 justify-end me-36 w-full">
            <ArrowButton
              disabled={servicePills[0]?.activeService || false}
              onClick={handlePreviousService}
              direction="left"
            />
            <ArrowButton
              disabled={
                servicePills[servicePills.length - 1]?.activeService || false
              }
              onClick={handleNextService}
              direction="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
