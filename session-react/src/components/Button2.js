import React from "react";

function Button2(props) {
  console.log("render button 2...");
  return (
    <button
      style={{ margin: 30, backgroundColor: "lightcyan" }}
      onClick={props.incrCounter2}
    >
      Button2
    </button>
  );
}

export default React.memo(Button2);
