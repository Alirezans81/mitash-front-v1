import React, { useState } from "react";

export default function ClinicManagement() {
  const [lastData, setLastData] = useState([
    {
      services: ["تزریق پوست"],
      customerName: "هما سعادت",
      date: new Date(),
    },
    {
      services: ["لیزر"],
      customerName: " سعادت",
      date: new Date(),
    },
    {
      services: ["پروتز"],
      customerName: "هما ",
      date: new Date(),
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
    <div className="mine-bg-light-pink mt-4 rounded-xl shadow-md flex justify-between items-center p-3">
      <div className="flex flex-col items-center">
        <img
          className="h-20 mb-2"
          src={require("../../../../Images/Login/ilistrators/info.png")}
        />
        <button className="border-2 border-gray-500 py-1 px-2 rounded-md">
          <span className="mine-font-vazir">مدیریت کلینیک</span>
        </button>
      </div>
      <div className="flex flex-row-reverse h-full flex-1 pl-2.5">
        <img
          className="h-32"
          src={require("../../../../Images/MainTabs/Reservation/salon/scroll.png")}
        />
        <div className="flex flex-col justify-between items-end w-full">
          <div className="flex flex-col items-end w-full mr-1">
            <div className=" pr-1 flex flex-row-reverse justify-between w-full mine-font-vazir font-bold mine-text-xs text-right">
              <span>{getSummery(lastData[0].services)}</span>
              <span dir="rtl">
                {lastData[0].date.getHours() +
                  ":" +
                  lastData[0].date.getMinutes()}
              </span>
            </div>
            <div className="flex flex-row-reverse items-center">
              <img className="w-5 h-5 rounded-full border-2 border-purple-400 ml-1" />
              <span className="mine-font-vazir mine-text-xs font-bold">
                {lastData[0].customerName}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end w-full">
            <div className=" pr-1 flex flex-row-reverse justify-between w-full mine-font-vazir mine-text-brown mine-text-xs text-right">
              <span>{getSummery(lastData[1].services)}</span>
              <span dir="rtl">
                {lastData[1].date.getHours() +
                  ":" +
                  lastData[1].date.getMinutes()}
              </span>
            </div>
            <div className="flex flex-row-reverse items-center">
              <img className="w-5 h-5 rounded-full border-2 border-purple-400 ml-1" />
              <span className="mine-font-vazir mine-text-xs mine-text-brown">
                {lastData[1].customerName}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end w-full">
            <div className=" pr-1 flex flex-row-reverse justify-between w-full mine-font-vazir mine-text-brown mine-text-xs text-right">
              <span>{getSummery(lastData[2].services)}</span>
              <span dir="rtl">
                {lastData[2].date.getHours() +
                  ":" +
                  lastData[2].date.getMinutes()}
              </span>
            </div>
            <div className="flex flex-row-reverse items-center">
              <img className="w-5 h-5 rounded-full border-2 border-purple-400 ml-1" />
              <span className="mine-font-vazir mine-text-xs mine-text-brown">
                {lastData[2].customerName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
