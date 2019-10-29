import React from "react";
import { PrimaryButton } from "office-ui-fabric-react";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { NavBar as NavBarComponent } from "./components/navbar";

export class HelloLib extends React.Component {
    render() {
        return (
            <div>
                <PrimaryButton>
                    <Icon iconName="Group" />
                </PrimaryButton>
            </div>
        );
    }
}

export class NavBar extends React.Component {
    render() {
        return (
            <div>
                <NavBarComponent />
            </div>
        );
    }
}
