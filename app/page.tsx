"use client";

import { CONTAINER_CLASSES } from "@/constants";
import ArrowButton from "./components/ArrowButton";
import { ServicePillComponent } from "./components/ServicePillComponent";
import { useServicePills } from "./hooks/useServicePills";

export default function Home() {
  const {
    servicePills,
    navigationState,
    handleServiceClick,
    handleNextService,
    handlePreviousService,
    isLoading,
  } = useServicePills();

  if (isLoading) {
    return (
      <div className={CONTAINER_CLASSES.main}>
        <div className={CONTAINER_CLASSES.wrapper}>
          <div className="flex items-center justify-center h-full min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading services...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (servicePills.length === 0) {
    return (
      <div className={CONTAINER_CLASSES.main}>
        <div className={CONTAINER_CLASSES.wrapper}>
          <div className="flex items-center justify-center h-full min-h-[400px]">
            <div className="text-center">
              <p className="text-gray-600">No services available</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={CONTAINER_CLASSES.main}>
      <div className={CONTAINER_CLASSES.wrapper}>
        <div className={CONTAINER_CLASSES.header}></div>

        <div className={CONTAINER_CLASSES.pillsContainer}>
          {servicePills.map((pill, index) => (
            <ServicePillComponent
              key={`service-pill-${index}`}
              pill={pill}
              index={index}
              isActive={!!pill.activeService}
              onClick={() => handleServiceClick(index)}
            />
          ))}

          <div className={CONTAINER_CLASSES.navigationContainer}>
            <ArrowButton
              disabled={navigationState.isPreviousDisabled}
              onClick={handlePreviousService}
              direction="left"
            />
            <ArrowButton
              disabled={navigationState.isNextDisabled}
              onClick={handleNextService}
              direction="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
