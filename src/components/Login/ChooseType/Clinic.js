import React from "react";

export default function Clinic({ setStep, setUserType }) {
  return (
    <button
      onClick={() => {
        setUserType("clinic");
        setStep("complete-profile");
      }}
      className="mine-bg-light-pink shadow-md px-4 py-4 rounded-xl mt-3"
    >
      <div className="flex justify-between transition-all duration-300">
        <div className="flex flex-col justify-between items-center">
          <img
            className="w-16 h-16"
            src={require("../../../Images/Login/ilistrators/info.png")}
          />
          <img
            className="w-6 h-6"
            src={require("../../../Images/Login/down-arrow.png")}
          />
        </div>
        <div className="flex flex-col items-end flex-1 ml-5">
          <span className="pr-3 mine-font-vazir font-bold mine-text-blue-dark">
            کلینیک
          </span>
          <span className="p-3 mt-2 mine-font-vazir font-thin mine-text-xs text-right mine-bg-semi-light-pink rounded-md">
            در صورتی که ارائه دهنده خدمات بهداشتی درمانی هستی وارد این قسمت شو
          </span>
        </div>
      </div>
    </button>
  );
}
