import React from "react";
import Tilt from "react-tilt";
import brain from "./logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt  shadow-2 mt5"
        options={{ max: 45 }}
        style={{ height: 120, width: 120 }}
      >
        <div className="Tilt-inner">
          <img src={brain} alt="brain" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
