import React, { useState } from "react";

export default function ReservationsHistory() {
  const [data, setData] = useState([
    {
      salonName: "آنتیس",
      services: ["رنگ مو", "کاشت ناخن"],
    },
    {
      salonName: "آنتیس",
      services: ["رنگ مو", "کاشت ناخن"],
    },
    {
      salonName: "آنتیس",
      services: ["رنگ مو", "کاشت ناخن"],
    },
  ]);

  const getSummery = (services) => {
    let result = "";
    services.map((e, index) =>
      index + 1 === services.length ? (result += e) : (result += e + ", ")
    );

    return result;
  };

  return (
    <div className="flex flex-col items-end mt-5">
      <span className="mine-font-vazir text-white mine-text-lg mb-2">
        سوابق رزرو ها
      </span>
      {data.map((row, index) => (
        <div
          key={index}
          className="flex flex-row-reverse border-b-2 border-gray-600 justify-between w-full"
        >
          <div className="flex flex-row-reverse items-center">
            <img
              className="h-8 ml-1"
              src={require("../../../../Images/MainTabs/Reservation/user/time.png")}
            />
            <span className="mine-font-vazir mine-text-sm" dir="rtl">
              {row.salonName + ": " + getSummery(row.services)}
            </span>
          </div>
          <button>
            <img
              className="h-8"
              src={require("../../../../Images/arrow-left.png")}
            />
          </button>
        </div>
      ))}
    </div>
  );
}
