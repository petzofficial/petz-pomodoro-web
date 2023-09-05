import { Router } from "@solidjs/router";
import { render } from "solid-js/web";
import { switchTheme } from "./utils";

import App from "./App";

// set theme
(localStorage.theme == "undefined" || !localStorage.theme)
  ? switchTheme("light")
  : switchTheme(localStorage.theme);

render(() => (
  <Router>
    <App />
  </Router>
), document.getElementById("app"));
