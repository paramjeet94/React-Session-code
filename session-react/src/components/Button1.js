import React from "react";

function Button1(props) {
  console.log("render button 1...");
  return (
    <button
      style={{ margin: 30, backgroundColor: "lightcyan" }}
      onClick={props.incrCounter1}
    >
      Button1
    </button>
  );
}
export default React.memo(Button1);
