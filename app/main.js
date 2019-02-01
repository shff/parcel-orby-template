import { h, render, useState } from "@orby/core";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      We're at {count}!
    </button>);
};

render(<Button />, document.querySelector("main"));
