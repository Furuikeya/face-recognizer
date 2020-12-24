import React from "react";
import Logo from "../Logo/Logo";
// import Signin from "../Signin/Signin";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <Logo />
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim underline pa3 pointer white-70"
        >
          Sign out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <Logo />
        {/* <div> */}
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim underline pa1 pointer white-70"
        >
          Sign in
        </p>
        {/* <p
            onClick={() => onRouteChange("register")}
            className="f3 link dim underline pa1 pointer white-70"
          >
            Register
          </p> */}
        {/* </div> */}
      </nav>
    );
  }
};

export default Navigation;
