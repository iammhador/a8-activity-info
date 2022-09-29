import React from "react";
import Info from "../info/Info";

const BreakTime = () => {
  const breakTime = [10, 20, 30, 45, 60];

  return (
    <div>
      {breakTime.map((b) => (
        <Info b={b}></Info>
      ))}
    </div>
  );
};

export default BreakTime;
