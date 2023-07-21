import React from "react";

function ResendNotif({ resendNotifOpened, setResendNotifOpened, setStep }) {
  return (
    <div className="mt-3 w-10/12 relative">
      <div
        className={
          "mine-bg-light-pink shadow-md w-full rounded-xl duration-300 transition-all absolute " +
          (resendNotifOpened ? "right-0" : "-right-96")
        }
      >
        <div className="w-full flex flex-row-reverse justify-between items-center p-3">
          <div className="flex flex-row-reverse items-center">
            <img
              className="w-8 h-8"
              src={require("../../../Images/Login/resend-code.png")}
            />
            <span className="mine-font-vazir text-xs mine-text-blue-dark text-right">
              کد رو برات دوباره بفرستم ؟
            </span>
          </div>
          <button
            onClick={() => setStep("enter-number")}
            className="mine-button-outline-pink text-xs mx-1"
          >
            اره
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResendNotif;
