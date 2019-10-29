import React from "react";
import ReactDom from "react-dom";
import HelloLib from "./HelloLib";
import { initializeIcons } from "@uifabric/icons";

initializeIcons();

ReactDom.render(<HelloLib />, document.getElementById("root"));
