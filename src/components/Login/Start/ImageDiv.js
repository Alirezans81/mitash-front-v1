import React from "react";

function ImageDiv() {
  return (
    <div className="flex justify-center items-center">
      <img
        className="w-8/12 z-10"
        src={require("../../../Images/Login/start-image.png")}
      />
    </div>
  );
}

export default ImageDiv;
