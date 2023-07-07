import React from "react";

function Label({ setStep }) {
  return (
    <div className="w-full flex flex-col items-center justify-center px-10 mt-4">
      <img className="w-4/12" src={require("../../../typographies/1.png")} />
      <span className=" text-center mt-6 mine-font-vazir mine-text-md text-white">
        با میتاـش رزروینگ خود را آسان تر و تجربه جالب تری برای مشتریان بسازید
      </span>
      <div className="flex flex-row-reverse mt-14 w-full relative items-center">
        <div className="w-12 h-12 mine-bg-white-linear-gradient shadow-xl rounded-full absolute right-0"></div>
        <button
          onClick={() => setStep("enter-number")}
          className="z-10 mr-1 mine-font-vazir mine-text-lg"
        >
          شروع کنید
        </button>
        <img
          className="w-6 mt-0"
          src={require("../../../Images/arrow-left.png")}
        />
      </div>
    </div>
  );
}

export default Label;
