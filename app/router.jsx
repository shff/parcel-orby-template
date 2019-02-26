/* @jsx h */
import { h, render, useState, useEffect } from "@orby/core";

let setter = null;

export default function Router({ children, ...props }) {
  const [url, setUrl] = useState(location.pathname);
  useEffect(() => {
    const handler = setUrl(location.pathname);
    addEventListener("popstate", handler);
    return () => removeEventListener("popstate", handler);
  }, []);
  setter = setUrl;

  const match = child => {
    const path = child.props.path.split("/");
    const segments = url.split("/");
    const matches = {};
    const max = Math.max(segments.length, path.length);
    for (let i = 0; i < max; i++) {
      if (path[i] && path[i][0] === ":") {
        matches[path[i].substring(1)] = decodeURIComponent(segments[i] || "");
      } else if (path[i] !== segments[i]) {
        return null;
      }
    }

    Object.assign(child.props, matches);
    return child;
  };

  return children.find((child) => match(child));
};

export const Link = ({ children, ...props }) => {
  const route = e => {
    history.pushState(null, null, props.href);
    setter(props.href);
    e.preventDefault();
  };

  return (
    <a {...props} onClick={route}>
      {children}
    </a>
  );
};
