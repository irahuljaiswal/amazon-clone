import React from "react";
import img from "../image/amazon--img3.jpg";

export default function Center() {
  return (
    <div className="center--main">
      <div className="center--home">
        <img src={img} alt="image" className="center--amazon--img" />
      </div>
    </div>
  );
}
