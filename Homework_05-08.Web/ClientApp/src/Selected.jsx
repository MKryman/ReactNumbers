import React from "react";
import NumberTable from "./NumberTable";


class Selected extends React.Component {

    onLockClick = () => {
        this.props.onLockNumber(this.props.selectedNumber)
    }

    render() {
        const { selectedNumber, isLocked } = this.props;
        return (<>
            < li className="list-group-item" > {selectedNumber}
                < button className="btn btn-info" onClick={this.onLockClick} >
                    {isLocked ? 'Unlock' : 'Lock'}</button ></li >
                    </>)
    }
}
export default Selected;