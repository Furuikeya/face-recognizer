import React from "react";
import Logo from "../Logo/Logo";

const Navigation = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <Logo />
      <p className="f3 link dim black underline pa3 pointer light-blue">
        Sign out
      </p>
    </nav>
  );
};

export default Navigation;
