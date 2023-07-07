import React from "react";
import User from "../../components/Login/ChooseType/User";
import Salon from "../../components/Login/ChooseType/Salon";
import Clinic from "../../components/Login/ChooseType/Clinic";

export default function ChooseType({ setStep, setUserType }) {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-9/12">
        <User setStep={setStep} setUserType={setUserType} />
        <Salon setStep={setStep} setUserType={setUserType} />
        <Clinic setStep={setStep} setUserType={setUserType} />
      </div>
    </div>
  );
}
