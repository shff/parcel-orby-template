/* @jsx h */
import { h, render, useState } from "@orby/core";
import Router, { Link } from "./router";

const Home = ({id}) => <div>Home { id }</div>;
const About = ({id}) => <div>About { id }</div>;
const Blog = ({id}) => <div>Blog { id }</div>;

const App = () => (
  <div>
    <div>Hello!</div>
    <Link href="/1">Home</Link>
    <Link href="/about/2">About</Link>
    <Link href="/blog/3">Blog</Link>
    <Router>
      <Home path="/:id" />
      <About path="/about/:id" />
      <Blog path="/blog/:id" />
    </Router>
  </div>
);

render(<App />, document.querySelector("main"));
