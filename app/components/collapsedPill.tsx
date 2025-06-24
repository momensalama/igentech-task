function collapsedPill({
  hasSpace,
  name,
}: {
  hasSpace: boolean;
  name: string;
}) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-primary text-base md:text-xl font-semibold -tracking-[0.4px] leading-5 md:leading-[30px] whitespace-nowrap rotate-0 md:-rotate-90 transform origin-center text-center w-3xs">
        {hasSpace ? " " : ""}
        {name}
      </div>
    </div>
  );
}

export default collapsedPill;
