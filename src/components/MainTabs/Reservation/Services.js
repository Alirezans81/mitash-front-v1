import React from "react";

export default function Services() {
  return (
    <div className="flex flex-col items-end">
      <span className="mine-font-vazir text-white mine-text-xxl mb-5">
        خدمات
      </span>
      <div className="grid grid-cols-2 gap-4 w-full">
        <button className="col-span-1 flex flex-col items-center mine-bg-light-pink p-5 rounded-xl shadow-md">
          <div className="py-0 flex justify-center items-center mine-bg-pink rounded-t-xl shadow-sm shadow-gray-600 rounded-br-xl">
            <img
              className="h-36"
              style={{ objectFit: "contain" }}
              src={require("../../../Images/MainTabs/Reservation/location.png")}
            />
          </div>
          <span className="mine-font-vazir mine-text-brown mt-3">
            کلینیک زیبایی
          </span>
        </button>
        <button className="col-span-1 flex flex-col items-center mine-bg-light-pink p-5 rounded-xl shadow-md">
          <div className="py-0 flex justify-center items-center mine-bg-pink rounded-t-xl shadow-sm shadow-gray-600 rounded-bl-xl">
            <img
              className="h-36"
              src={require("../../../Images/MainTabs/Reservation/beauty.png")}
            />
          </div>
          <span className="mine-font-vazir mine-text-brown mt-3">آرایشگاه</span>
        </button>
      </div>
    </div>
  );
}
