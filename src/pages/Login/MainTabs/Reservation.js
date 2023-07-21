import React, { useState } from "react";
import BottomTabNavigator from "../../../components/BottomTabNavigator";
import TopBar from "../../../components/TopBar";
import Services from "../../../components/MainTabs/Reservation/Services";
import Authentication from "../../../components/MainTabs/Reservation/Authentication";
import ReservationsHistory from "../../../components/MainTabs/Reservation/user/ReservationsHistory";
import SalonManagement from "../../../components/MainTabs/Reservation/salon/SalonManagement";
import ClinicManagement from "../../../components/MainTabs/Reservation/clinic/ClinicManagement";

export default function Reservation({
  loggedIn,
  enabledTab,
  setEnabledTab,
  userType,
}) {
  const [isActive, setIsActive] = useState(true);
  if (userType !== "user" && !isActive) {
    return (
      <div className="h-full flex flex-col justify-between">
        <TopBar />
        <div>
          <div className="px-9">
            <Services />
            <Authentication userType={userType} />
          </div>
          {loggedIn ? (
            <BottomTabNavigator
              enabledTab={enabledTab}
              setEnabledTab={setEnabledTab}
            />
          ) : null}
        </div>
      </div>
    );
  } else if (userType === "user") {
    return (
      <div className="h-full flex flex-col justify-between">
        <TopBar />
        <div>
          <div className="px-9">
            <Services />
            <ReservationsHistory />
          </div>
          {loggedIn ? (
            <BottomTabNavigator
              enabledTab={enabledTab}
              setEnabledTab={setEnabledTab}
            />
          ) : null}
        </div>
      </div>
    );
  } else if (userType === "salon" && isActive) {
    return (
      <div className="h-full flex flex-col justify-between">
        <TopBar />
        <div>
          <div className="px-9">
            <Services />
            <SalonManagement />
          </div>
          {loggedIn ? (
            <BottomTabNavigator
              enabledTab={enabledTab}
              setEnabledTab={setEnabledTab}
            />
          ) : null}
        </div>
      </div>
    );
  } else if (userType === "clinic" && isActive) {
    return (
      <div className="h-full flex flex-col justify-between">
        <TopBar />
        <div>
          <div className="px-9">
            <Services />
            <ClinicManagement />
          </div>
          {loggedIn ? (
            <BottomTabNavigator
              enabledTab={enabledTab}
              setEnabledTab={setEnabledTab}
            />
          ) : null}
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-full flex flex-col justify-between">
        <TopBar />
        <div>
          <div className="px-9">
            <Services />
            <span className="mine-font-vazir mt-5 text-white mine-text-xl text-center w-full">
              مشکلی پیش اومده
            </span>
          </div>
          {loggedIn ? (
            <BottomTabNavigator
              enabledTab={enabledTab}
              setEnabledTab={setEnabledTab}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
