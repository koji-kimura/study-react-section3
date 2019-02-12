import React from "react";
import { render } from "react-dom";

const ReturnreactElement = ({ name, music }) => {
  return (
    <h2>
      {name}
      {music}
    </h2>
  );
};

render(
  <ReturnreactElement name="naka" music="jazz" />,
  document.getElementById("root")
);
