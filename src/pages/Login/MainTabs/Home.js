import React from "react";
import BottomTabNavigator from "../../../components/BottomTabNavigator";
import TopBar from "../../../components/TopBar";
import Dashboard from "../../../components/MainTabs/Home/Dashboard";

export default function Home({ loggedIn, enabledTab, setEnabledTab }) {
  return (
    <div className="h-full flex flex-col justify-between">
      <TopBar />
      <div>
        <Dashboard />
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
