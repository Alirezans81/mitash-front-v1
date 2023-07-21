import React from "react";

export default function Authentication({ userType }) {
  let message = "";
  if (userType === "salon") {
    message = "برای فعال سازی سالن احراز هویت زیر رو انجام بده";
  } else if (userType === "clinic") {
    message = "برای فعال سازی کلینیک احراز هویت زیر رو انجام بده";
  }
  return (
    <div className="w-full mine-bg-light-pink mt-4 shadow-md flex justify-between items-center rounded-xl py-2 px-2">
      <img
        className="w-20 mr-2"
        src={require("../../../Images/MainTabs/Reservation/authentication.png")}
      />
      <div className="flex flex-col items-center">
        <span dir="rtl" className="mine-font-vazir mine-text-sm text-center">
          {message + " ;)"}
        </span>
        <button className="flex justify-center items-center border-2 rounded-md border-gray-500 pr-1.5 mt-1">
          <img
            className="h-7 mr-0.5"
            src={require("../../../Images/MainTabs/Reservation/button-icon.png")}
          />
          <span className="mine-font-vazir mine-text-sm">احراز هویت</span>
        </button>
      </div>
    </div>
  );
}
