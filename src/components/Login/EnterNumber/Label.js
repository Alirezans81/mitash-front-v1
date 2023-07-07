import React, { Component } from "react";

export class Label extends Component {
  render() {
    return (
      <div className="w-full flex flex-col items-center">
        <img
          className="w-24"
          src={require("../../../typographies/with-logo.png")}
        />
        <span className="mine-font-vazir mine-text-blue-light text-sm mt-1">
          زیبایی در کوتاه ترین زمان
        </span>
      </div>
    );
  }
}

export default Label;
