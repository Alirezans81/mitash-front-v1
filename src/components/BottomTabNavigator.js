import React from "react";
import { useNavigate } from "react-router-dom";

export default function BottomTabNavigator({ enabledTab, setEnabledTab }) {
  const navigate = useNavigate();

  return (
    <div className="w-full py-6 flex justify-evenly mt-1">
      <button
        className={
          " " +
          (enabledTab === "home"
            ? "w-16 bg-white rounded-xl shadow-md"
            : "bg-white rounded-full shadow-none")
        }
        onClick={() => {
          setEnabledTab("home");
          navigate("/home");
        }}
      >
        <div className="w-11 h-11 rounded-full pb-0.5 mx-auto">
          <div className="flex justify-center items-center h-full w-full">
            <img
              className="h-6 w-6"
              src={require("../Images/BottomTabNavigator/home.png")}
            />
          </div>
        </div>
      </button>
      <button
        className={
          " " +
          (enabledTab === "shop"
            ? "w-16 bg-white rounded-xl shadow-md"
            : "bg-white rounded-full shadow-none")
        }
        onClick={() => {
          setEnabledTab("shop");
          navigate("/shop");
        }}
      >
        <div className="w-11 h-11 rounded-full pb-0.5 mx-auto">
          <div className="flex justify-center items-center h-full w-full">
            <img
              className="h-6 w-6"
              src={require("../Images/BottomTabNavigator/home.png")}
            />
          </div>
        </div>
      </button>
      <button
        className={
          " " +
          (enabledTab === "search"
            ? "w-16 bg-white rounded-xl shadow-md"
            : "bg-white rounded-full shadow-none")
        }
        onClick={() => {
          setEnabledTab("search");
          navigate("/search");
        }}
      >
        <div className="w-11 h-11 rounded-full pb-0.5 mx-auto">
          <div className="flex justify-center items-center h-full w-full">
            <img
              className="h-6 w-6"
              src={require("../Images/BottomTabNavigator/home.png")}
            />
          </div>
        </div>
      </button>
      <button
        className={
          " " +
          (enabledTab === "reservation"
            ? "w-16 bg-white rounded-xl shadow-md"
            : "bg-white rounded-full shadow-none")
        }
        onClick={() => {
          setEnabledTab("reservation");
          navigate("/reservation");
        }}
      >
        <div className="w-11 h-11 rounded-full pb-0.5 mx-auto">
          <div className="flex justify-center items-center h-full w-full">
            <img
              className="h-6 w-6"
              src={require("../Images/BottomTabNavigator/home.png")}
            />
          </div>
        </div>
      </button>
    </div>
  );
}
