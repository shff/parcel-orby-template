/* @jsx h */
import { h, render } from "@orby/core";

const App = () => (
  <div>
    <div>Hello!</div>
  </div>
);

render(<App />, document.querySelector("main"));
