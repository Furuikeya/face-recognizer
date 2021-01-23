import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white-80 f4">{`Hi, ${name}, your current score is`}</div>
      <div className="white-90 f2">{` ${entries}`}</div>
    </div>
  );
};

export default Rank;
