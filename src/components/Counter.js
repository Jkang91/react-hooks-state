import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    // console.log(`before setState: ${count}`)
    setCount((currentCount) => currentCount + 1);
    // setCount(count + 1);
    // console.log(`after setState: ${count}`)
    setCount((currentCount) => currentCount + 1);
    // setCount(count + 1);
    // console.log(`aftet setState twice: ${count}`)
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
  return <div onClick={increment}>{count}</div>
}

export default Counter;
