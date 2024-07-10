import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Fragment>
    <App />
  </Fragment>
);
