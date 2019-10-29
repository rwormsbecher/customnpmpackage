import React from "react";
import { PrimaryButton } from "office-ui-fabric-react";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { NavBar as NavBarComponent } from "./components/navbar";
export class HelloLib extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement(PrimaryButton, null, React.createElement(Icon, {
      iconName: "Group"
    })));
  }

}
export class NavBar extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement(NavBarComponent, null));
  }

}
