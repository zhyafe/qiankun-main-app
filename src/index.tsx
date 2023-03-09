import React from "react";
import ReactDom from "react-dom";
import { registerMicroApps, start } from "qiankun";

import App from "./demo";

registerMicroApps([
  {
    name: "react app", // app name registered
    entry: "//localhost:7100",
    container: "#container",
    activeRule: "/react",
  },
  {
    name: "vue app",
    entry: "//localhost:7200",
    container: "#container",
    activeRule: "/vue",
  },
]);

start();

ReactDom.render(<App />, document.querySelector("#app"));
