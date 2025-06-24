function ExpandedPill({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="relative p-4 md:p-14 flex flex-col items-start w-full">
      <div className="flex items-center gap-2 mb-6 md:mb-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <div className="text-white">&lt;/&gt;</div>
          </div>
          <span className="text-primary text-lg font-medium">{name}</span>
        </div>
      </div>

      <h2 className="text-primary text-2xl md:text-[40px] font-bold -tracking-[0.8px] leading-8 md:leading-[60px] w-full md:w-[531px] mb-6 md:mb-10">
        {name === "Software Solutions Experts" &&
          "Custom-Built Software To Power Your Business"}
        {name === "eKYC" && "Digital Identity Verification Solutions"}
        {name === "Payment Links" && "Secure Payment Processing Platform"}
        {name === "Invoicing" && "Professional Billing Management System"}
        {name === "Consultancy" && "Expert Technology Consulting Services"}
      </h2>

      <p className="text-primary text-base md:text-lg leading-6 md:leading-[28.8px] w-full md:w-[464px] mb-10 md:mb-24">
        {description}
      </p>

      <button className="bg-primary hover:bg-primary/80 text-white font-bold cursor-pointer text-base md:text-lg p-3 md:px-6 md:py-3 rounded-full w-full md:w-auto md:h-14 transition-colors">
        Learn More
      </button>
    </div>
  );
}

export default ExpandedPill;
