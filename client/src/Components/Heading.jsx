import React from "react";

export const Heading = ({ title, subtitle }) => {
  return (
    <div>
      <div className="font-bold text-5xl">{title}</div>
      <div className="font-neutral-500 font-light mt-2 text-2xl">{subtitle}</div>
    </div>
  );
};

export const Head = ({ title, subtitle }) => {
  return (
    <div>
      <div className="font-neutral-500 font-light text-xl">{subtitle}</div>
      <div className="font-smibold text-3xl mt-2">{title}</div>
    </div>
  );
};
