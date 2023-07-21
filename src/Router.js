import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Login/MainTabs/Home";
import Reservation from "./pages/Login/MainTabs/Reservation";
import { useState } from "react";

function Router({ loggedIn, setLoggedIn, enabledTab, setEnabledTab }) {
  const [userType, setUserType] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={
            <Login
              setLoggedIn={setLoggedIn}
              userType={userType}
              setUserType={setUserType}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              loggedIn={loggedIn}
              enabledTab={enabledTab}
              setEnabledTab={setEnabledTab}
            />
          }
        />
        <Route
          path="/reservation"
          element={
            <Reservation
              loggedIn={loggedIn}
              enabledTab={enabledTab}
              setEnabledTab={setEnabledTab}
              userType={userType}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
