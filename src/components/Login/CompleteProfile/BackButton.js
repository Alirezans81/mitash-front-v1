import React from "react";

export default function BackButton({ setStep }) {
  return (
    <button
      className="absolute left-2 top-2"
      onClick={() => setStep("choose-type")}
    >
      <img
        className="w-6 h-6"
        src={require("../../../Images/Login/arrow-left.png")}
      />
    </button>
  );
}
