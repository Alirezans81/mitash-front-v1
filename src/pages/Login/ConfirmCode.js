import React, { useState } from "react";
import Label from "../../components/Login/EnterNumber/Label";
import ConfirmCodeForm from "../../components/Login/ConfirmCode/ConfirmCodeForm";
import EditNumber from "../../components/Login/ConfirmCode/EditNumber";
import ResendNotif from "../../components/Login/ConfirmCode/ResendNotif";
import { useTimer } from "react-timer-hook";

function ConfirmCode({ setStep, enteredPhone, setEnteredCode }) {
  const [resendCodeNotifOpened, setResendCodeNotifOpened] = useState(false);

  const currentTime = new Date();
  const expiryTimestamp = new Date(currentTime.getTime() + 1 * 60000);

  const { seconds, minutes, start, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => setResendCodeNotifOpened(true),
  });

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="mine-bg-light-pink shadow-md w-10/12 px-4 py-5 rounded-xl flex flex-col">
        <Label />
        <ConfirmCodeForm
          setStep={setStep}
          setEnteredCode={setEnteredCode}
          setResendCodeNotifOpened={setResendCodeNotifOpened}
          timer={{ seconds, minutes, start }}
        />
        <EditNumber setStep={setStep} enteredPhone={enteredPhone} />
      </div>
      <ResendNotif
        resendNotifOpened={resendCodeNotifOpened}
        setResendNotifOpened={setResendCodeNotifOpened}
        setStep={setStep}
      />
    </div>
  );
}

export default ConfirmCode;
