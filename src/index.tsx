import * as React from "react";

import { Toast } from "@usy-ui/base";
import * as ReactDOM from "react-dom/client";

import "@usy-ui/base/dist/styles.css";
import { Home } from "./pages/home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toast />
    <Home />
  </React.StrictMode>
);
