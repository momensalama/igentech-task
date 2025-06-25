import { PILL_STYLES } from "@/constants";
import { ServicePill, ServicePillComponentProps } from "@/types";
import React, { useMemo } from "react";
import ExpandedPill from "./ExpandedPill";
import CollapsedPill from "./collapsedPill";

export function ServicePillComponent({
  pill,
  index,
  isActive,
  onClick,
}: ServicePillComponentProps) {
  const getActiveHeight = (index: number) =>
    PILL_STYLES.activeHeights[index] || "h-[360px]";

  const pillClasses = useMemo(() => {
    const baseClasses =
      "rounded-[32px] md:rounded-[64px] border ml-0 py-8 md:py-0 transition-all duration-500 ease-in-out overflow-hidden relative flex-shrink-0 flex items-center justify-center";

    if (isActive) {
      return `${baseClasses} ${getActiveHeight(
        index
      )} md:h-[530px] w-full md:w-[893px]`;
    }

    return `${baseClasses} ${PILL_STYLES.heights[index]} md:w-16 ${PILL_STYLES.mobileWidths[index]} cursor-pointer hover:shadow-lg`;
  }, [isActive, index]);

  return (
    <div
      key={`service-pill-${index}`}
      className={pillClasses}
      style={{
        backgroundColor: pill.service_color,
        borderColor: pill.service_color,
      }}
      onClick={onClick}
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
}
