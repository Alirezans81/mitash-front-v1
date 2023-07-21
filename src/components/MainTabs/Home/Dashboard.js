import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [score, setScore] = useState(0);
  const getScore = async () => {
    setScore(500);
  };
  useEffect(() => {
    getScore();
  }, []);

  return (
    <div className="flex flex-col items-end px-9">
      <span className="mine-font-vazir text-white mine-text-xxl mb-5">
        داشبورد
      </span>
      <div className="grid grid-cols-12 grid-rows-5 gap-4 w-full h-10/12">
        <button className="col-span-6 row-span-3 mine-bg-light-pink shadow-md rounded-xl flex flex-col items-center justify-center py-4">
          <span className="mine-font-vazir mine-text-blue-dark mb-1">
            آدرس ها
          </span>
          <img
            className="w-16 h-16"
            src={require("../../../Images/MainTabs/Home/loaction.png")}
          />
        </button>
        <button className="col-span-6 row-span-2 mine-bg-light-pink shadow-md rounded-xl flex flex-col items-center justify-center py-4">
          <span className="mine-font-vazir mine-text-blue-dark mb-1">
            امتیازات
          </span>
          <div className="flex items-center mr-5">
            <img
              className="w-16 h-16"
              src={require("../../../Images/MainTabs/Home/score.png")}
            />
            <span className="mine-font-vazir mine-text-blue-dark mine-text-xl font-extrabold">
              {score}
            </span>
          </div>
        </button>
        <button className="col-span-6 row-span-3 mine-bg-light-pink shadow-md rounded-xl flex flex-col items-center justify-center py-4">
          <span className="mine-font-vazir mine-text-blue-dark mb-1">
            کیف پول
          </span>
          <img
            className="w-16 h-16"
            src={require("../../../Images/MainTabs/Home/wallet.png")}
          />
        </button>
        <button className="col-span-6 row-span-2 mine-bg-light-pink shadow-md rounded-xl flex flex-col items-center justify-center py-4">
          <span className="mine-font-vazir mine-text-blue-dark mb-1">
            آلبوم
          </span>
          <img
            className="w-16 h-16"
            src={require("../../../Images/MainTabs/Home/album.png")}
          />
        </button>
      </div>
    </div>
  );
}
