export const API_ENDPOINT =
  "https://backend.igentech.co/api/v1/content/software-development";

export const PILL_STYLES = {
  heights: ["h-12 md:h-[530px]", "h-12 md:h-[450px]", "h-12 md:h-[370px]"],
  mobileWidths: ["w-[100%]", "w-[90%]", "w-[80%]"],
  activeHeights: ["h-[360px]", "h-[390px]", "h-[360px]"],
} as const;

export const CONTAINER_CLASSES = {
  main: "w-full flex justify-center",
  wrapper: "w-full max-w-[1440px] h-auto min-h-[691px] mx-4 md:mx-0 relative",
  header:
    "flex flex-col md:flex-row items-center pt-8 md:pt-12 px-4 md:pl-[120px] md:pr-8",
  pillsContainer:
    "relative flex flex-col md:flex-row gap-4 md:gap-5 justify-center items-center flex-wrap w-full",
  navigationContainer: "hidden md:flex gap-4 mt-4 justify-end me-36 w-full",
} as const;
