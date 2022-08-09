import React from "react";
import useFlash from "./custom_hooks/useFlash";

function Child1(props) {
  console.log("render child1...");
  const newVAl = useFlash(props.counter1);
  return (
    <div style={{ margin: 30, backgroundColor: "lightblue" }}>
      Child1
      <div>{props.counter1}</div>
      {newVAl}
    </div>
  );
}

export default React.memo(Child1);
