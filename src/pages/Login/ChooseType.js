import React from "react";
import User from "../../components/Login/ChooseType/User";
import Salon from "../../components/Login/ChooseType/Salon";
import Clinic from "../../components/Login/ChooseType/Clinic";
import CompleteProfile from "../../components/Login/ChooseType/CompleteProfile";

export default function ChooseType({ setLoggedIn, userType, setUserType }) {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-10/12">
        <User userType={userType} setUserType={setUserType} />
        {userType === "user" ? (
          <CompleteProfile setLoggedIn={setLoggedIn} />
        ) : null}
        <Salon userType={userType} setUserType={setUserType} />
        {userType === "salon" ? (
          <CompleteProfile setLoggedIn={setLoggedIn} />
        ) : null}
        <Clinic userType={userType} setUserType={setUserType} />
        {userType === "clinic" ? (
          <CompleteProfile setLoggedIn={setLoggedIn} />
        ) : null}
      </div>
    </div>
  );
}
