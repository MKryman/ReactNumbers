import React from "react";
import {produce}  from "immer";
import NumberRow from "./NumberRow";
import Selected from "./Selected";

class NumberTable extends React.Component {
    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }

    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    onAddClick = () => {
        const newState = produce(this.state, drafState => {
            drafState.numbers.push(this.getRandomNumber(1, 100))
        })

        this.setState(newState)
    }

    onNumberSelect = (n) => {
        const { selectedNumbers } = this.state;
        if (selectedNumbers.includes(n)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(number => number !== n) })
        } else {
            this.setState({ selectedNumbers: [...selectedNumbers, n] })
        }
    }

    onLockNumber = (sn) => {
        const { lockedNumbers } = this.state;
        if (lockedNumbers.includes(sn)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(number => number !== sn) })
        } else {
            this.setState({ lockedNumbers: [...lockedNumbers, sn] })
        }
    }

    render() {
        const { numbers, selectedNumbers, lockedNumbers } = this.state;
        return (<>
            <div className="container mt-5">
                <div className="col-md-6 col-md-offset-3">
                    <button className="btn btn-success mb-4" onClick={this.onAddClick}>ADD</button>
                </div>
                <div className="row">
                    <table className="table table-hover table-bordered table-responsive">
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Select/Unselect</th>
                            </tr>
                        </thead>
                        <tbody>
                            {numbers.map((n) => <NumberRow
                                number={n}
                                onNumberSelect={() => this.onNumberSelect(n)}
                                isSelected={selectedNumbers.includes(n)}
                                isLocked={lockedNumbers.includes(n)}
                            />)}
                        </tbody>
                    </table>

                    <div className="container">
                        <div className="row p-5 rounded">
                            <div className="col-md-6 col-offset-md-3">
                                {!!selectedNumbers.length && <h3>Selected Numbers:</h3>}
                                <ul className="list-group">
                                    {selectedNumbers.map((sn) => <Selected
                                        selectedNumber={sn}
                                        isLocked={lockedNumbers.includes(sn)}
                                        onLockNumber={() => this.onLockNumber(sn)}
                                    />)}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>)
    }
}

export default NumberTable;