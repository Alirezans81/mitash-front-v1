import React from "react";
import CompleteProfile from "./CompleteProfile";

export default function Clinic({ userType, setUserType }) {
  return (
    <>
      <button
        onClick={() => {
          userType === "clinic" ? setUserType("") : setUserType("clinic");
        }}
        className={
          "mine-bg-light-pink shadow-md px-4 py-4 mt-3 " +
          (userType === "clinic" ? "rounded-t-xl" : "rounded-xl")
        }
      >
        <div className="flex justify-between transition-all duration-300">
          <div className="flex flex-col justify-between items-center">
            <img
              className="w-16 h-16"
              src={require("../../../Images/Login/ilistrators/info.png")}
            />
            <img
              className={
                "w-6 h-6 transition-all duration-200 " +
                (userType === "clinic" ? "rotate-180" : "")
              }
              src={require("../../../Images/Login/down-arrow.png")}
            />
          </div>
          <div className="flex flex-col items-end flex-1 ml-5">
            <span className="pr-3 mine-font-vazir font-bold mine-text-blue-dark">
              کلینیک
            </span>
            <span className="p-3 mt-2 mine-font-vazir font-thin mine-text-xs mine-text-blue-light text-right mine-bg-semi-light-pink rounded-md">
              در صورتی که ارائه دهنده خدمات بهداشتی درمانی هستی وارد این قسمت شو
            </span>
          </div>
        </div>
      </button>
    </>
  );
}
