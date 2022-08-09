import { useCallback, useMemo, useRef, useState } from "react";
import "./App.css";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const childRef = useRef();
  const incrCounter1 = useCallback(() => {
    setCounter1(counter1 + 1);
  }, [counter1]);

  const incrCounter2 = useCallback(() => {
    setCounter2(counter2 + 1);
  }, [counter2]);

  // const heavyComputation = useMemo(() => {
  //   let i = 0;
  //   while (i < 999999999) i++;

  //   return counter1 * counter1;
  // }, [counter1]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "lightgrey",
      }}
    >
      <Child1 ref={this.childRef} counter1={counter1}></Child1>
      <Button1 incrCounter1={incrCounter1}></Button1>
      <Child2 counter2={counter2}></Child2>
      <Button2 incrCounter2={incrCounter2}></Button2>
      {/* <div>{heavyComputation}</div> */}
      <div id="flash"></div>
    </div>
  );
}
export default App;
