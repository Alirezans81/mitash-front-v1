import React, { useState } from "react";
import Label from "../../components/Login/EnterNumber/Label";
import EnterNumberForm from "../../components/Login/EnterNumber/EnterNumberForm";
import Notif from "../../components/Login/EnterNumber/Notif";
import Rules from "../../components/Login/EnterNumber/Rules";

function EnterNumber({ enteredPhone, setEnteredPhone, setStep }) {
  const [notifOpened, setNotifOpened] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="mine-bg-light-pink shadow-md w-10/12 px-4 py-5 rounded-xl flex flex-col">
        <Label />
        <EnterNumberForm
          enteredPhone={enteredPhone}
          setEnteredPhone={setEnteredPhone}
          setNotifOpened={setNotifOpened}
        />
        <Rules />
      </div>
      <Notif
        setStep={setStep}
        enteredPhone={enteredPhone}
        notifOpened={notifOpened}
        setNotifOpened={setNotifOpened}
      />
    </div>
  );
}

export default EnterNumber;
