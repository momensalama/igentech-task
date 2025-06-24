function ArrowButton({
  disabled,
  onClick,
  direction,
}: {
  disabled: boolean;
  onClick: () => void;
  direction: "left" | "right";
}) {
  const disableStyles =
    "bg-[#67DBFF] opacity-50 cursor-not-allowed pointer-events-none";

  return (
    <button
      className={`w-12 h-12 bg-white border border-[#67DBFF] cursor-pointer rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors ${
        disabled ? disableStyles : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {direction === "left" ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="#67DBFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="#67DBFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export default ArrowButton;
