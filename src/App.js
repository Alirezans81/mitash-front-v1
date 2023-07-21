import { useState } from "react";
import Router from "./Router";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [enabledTab, setEnabledTab] = useState("home");

  return (
    <div className="app-container flex justify-center items-center w-screen h-screen">
      <img
        className="absolute w-screen h-screen"
        src={require("./Images/blur-web-background.png")}
      />
      <div className="router-container mine-bg-creamy z-10 shadow-md">
        <Router
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          enabledTab={enabledTab}
          setEnabledTab={setEnabledTab}
        />
      </div>
    </div>
  );
}

export default App;
