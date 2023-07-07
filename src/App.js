import Router from "./Router";

function App() {
  return (
    <div className="app-container flex justify-center items-center w-screen h-screen">
      <img
        className="absolute w-screen h-screen"
        src={require("./Images/blur-web-background.png")}
      />
      <div className="router-container mine-bg-creamy z-10 shadow-md">
        <Router />
      </div>
    </div>
  );
}

export default App;
