import React from "react";
import NumberTable from "./NumberTable";

class NumberRow extends React.Component {

    OnSelectClick = () =>{
        this.props.onNumberSelect(this.props.selectedNumber);
    }

    render() {
        const {number, isSelected, isLocked} = this.props;
        return (<>
            <tr>
                <td>{number}</td>
                <td><button disabled={isLocked} className={`btn ${isSelected ? 'btn-danger' : 'btn-primary'}`} onClick={this.OnSelectClick}>
                    {isSelected ? 'Remove From Selected' : 'Add to Selected'}</button></td>
            </tr>
            </> )
    }
}

export default NumberRow;