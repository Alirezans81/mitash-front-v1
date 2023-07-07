import React from "react";

export default function EditNumber({ setStep, enteredPhone }) {
  return (
    <div className="flex items-center mt-5">
      <button
        onClick={() => setStep("enter-number")}
        className="p-1.5 rounded-md mine-bg-semi-light-pink shadow-sm transition-all duration-200 hover:shadow-none"
      >
        <img
          className="w-5 h-5"
          src={require("../../../Images/Login/edit-number.png")}
        />
      </button>
      <span className="ml-2 text-sm mine-text-blue-dark opacity-80 mine-font-vazir pt-1">
        {"+98" + enteredPhone}
      </span>
    </div>
  );
}
