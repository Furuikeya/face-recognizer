import React from "react";

const Signin = ({ onRouteChange }) => {
  return (
    <article className="br2 ba shadow-4 b--white-20  w-100 w-50-m w-25-l mw5 center">
      <main className="pa4 black-80 bg-black-10">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0 center white-30 ">Sign In</legend>
            <div className="mt3">
              <label
                className="db fw6 lh-copy f6 white-30"
                htmlFor="email-address"
              >
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black-40 hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 white-30" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black-40 hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={() => onRouteChange("home")}
              className="b ph3 pv2 input-reset ba b--white-30 white-40 bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <p
              onClick={() => onRouteChange("register")}
              className="f6 link dim white-40 db pointer"
            >
              Register
            </p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Signin;
