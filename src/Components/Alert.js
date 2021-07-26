import React from "react";
import OkayButton from "./OkayButton";

const Alert = () => {
  return (
    <React.Fragment>
      <h2>Invalid Input</h2>
      <div>{`Please enter a valid age (> 0)`}.</div>
      <OkayButton />
    </React.Fragment>
  );
};

export default Alert;
