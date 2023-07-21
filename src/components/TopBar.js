import React from "react";

export default function TopBar() {
  return (
    <div className="flex flex-row px-8 py-6 justify-between items-center">
      <img
        className="w-8 h-8"
        src={require("../Images/MainTabs/Home/left-logo.png")}
      />
      <span className="mine-text-blue-dark ml-5 mine-font-vazir">MITASH</span>
      <img
        className="border-2 w-10 h-10 rounded-full border-purple-400"
        src=""
      />
    </div>
  );
}
