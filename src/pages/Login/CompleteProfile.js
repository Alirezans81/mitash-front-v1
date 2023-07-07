import React from "react";
import Form from "../../components/Login/CompleteProfile/Form";
import BackButton from "../../components/Login/CompleteProfile/BackButton";

export default function CompleteProfile({ userType, setStep }) {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="w-9/12 mine-bg-light-pink rounded-xl p-5 relative">
        <BackButton setStep={setStep} />
        <Form />
      </div>
    </div>
  );
}
