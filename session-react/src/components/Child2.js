import React from "react";
// import useFlash from "./custom_hooks/useFlash";

function Child2(props) {
  console.log("render child2...");
  return (
    <div style={{ margin: 30, backgroundColor: "lightcoral" }}>
      Child2
      <div>{props.counter2}</div>
      {/* <button onClick={useFlash}>flash</button> */}
    </div>
  );
}

export default React.memo(Child2);
