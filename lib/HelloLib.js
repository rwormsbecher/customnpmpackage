import React from "react";
import { PrimaryButton } from "office-ui-fabric-react";
import { Icon } from "office-ui-fabric-react/lib/Icon";

class HelloLib extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement(PrimaryButton, null, React.createElement(Icon, {
      iconName: "Group"
    })));
  }

}

export default HelloLib;
