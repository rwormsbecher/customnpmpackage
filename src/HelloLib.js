import React from "react";
import { PrimaryButton } from "office-ui-fabric-react";
import { Icon } from "office-ui-fabric-react/lib/Icon";

class HelloLib extends React.Component {
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

export default HelloLib;
