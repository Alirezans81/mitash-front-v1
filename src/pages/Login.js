import { useState } from "react";
import Start from "../pages/Login/Start";
import EnterNumber from "./Login/EnterNumber";
import ConfirmCode from "./Login/ConfirmCode";
import ChooseType from "./Login/ChooseType";
import CompleteProfile from "./Login/CompleteProfile";

function Login() {
  const [step, setStep] = useState("start");
  const [enteredPhone, setEnteredPhone] = useState();
  const [enteredCode, setEnteredCode] = useState();
  const [userType, setUserType] = useState();

  if (step === "start") {
    return (
      <div className="h-full">
        <Start setStep={setStep} />
      </div>
    );
  } else if (step === "enter-number") {
    return (
      <div className="h-full">
        <EnterNumber
          setStep={setStep}
          enteredPhone={enteredPhone}
          setEnteredPhone={setEnteredPhone}
        />
      </div>
    );
  } else if (step === "confirm-code") {
    return (
      <div className="h-full">
        <ConfirmCode
          setStep={setStep}
          enteredPhone={enteredPhone}
          setEnteredCode={setEnteredCode}
        />
      </div>
    );
  } else if (step === "choose-type") {
    return (
      <div className="h-full">
        <ChooseType setStep={setStep} setUserType={setUserType} />
      </div>
    );
  } else if (step === "complete-profile") {
    return (
      <div className="h-full">
        <CompleteProfile setStep={setStep} userType={userType} />
      </div>
    );
  }
}

export default Login;
