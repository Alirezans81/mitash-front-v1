import React from "react";
import ImageDiv from "../../components/Login/Start/ImageDiv";
import Label from "../../components/Login/Start/Label";

export default function Start({ setStep }) {
  return (
    <div className="py-10 flex flex-col justify-center h-full">
      <ImageDiv />
      <Label setStep={setStep} />
    </div>
  );
}
