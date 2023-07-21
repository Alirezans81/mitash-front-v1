import React from "react";

function Notif({ setStep, enteredPhone, notifOpened, setNotifOpened }) {
  return (
    <div className="mt-3 w-10/12 relative">
      <div
        className={
          "mine-bg-light-pink shadow-md w-full rounded-xl duration-300 transition-all absolute " +
          (notifOpened ? "right-0" : "-right-96")
        }
      >
        <div className="w-full flex flex-col justify-center items-center py-4">
          <div className="flex flex-col items-center">
            <span className="mine-font-vazir mine-text-blue-light text-sm font-extralight">
              {enteredPhone ? "+98 " + enteredPhone : "شماره وارد نشده"}
            </span>
            <span className="mine-font-vazir text-sm">
              آیا این شماره را تایید می کنید؟
            </span>
          </div>
          <div className="mt-2">
            <button
              onClick={() => setNotifOpened(false)}
              className="mine-button-outline-pink mx-1"
            >
              خیر
            </button>
            <button
              onClick={() => setStep("confirm-code")}
              className="mine-button-outline-pink mx-1"
            >
              بله
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notif;
