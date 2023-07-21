import React from "react";
import Form from "./CompleteProfile/Form";

export default function CompleteProfile({ setLoggedIn }) {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="w-full mine-bg-light-pink rounded-b-xl px-4 pb-5 relative -mt-1">
        <Form setLoggedIn={setLoggedIn} />
      </div>
    </div>
  );
}
