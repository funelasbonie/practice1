import React, { useState } from 'react';

const Counter = (props) => {

    //props
    const counterLimit = props.counterLimit;

    //state
    const [currentState, setState] = useState(0);

    //function
    const incrementCount = () => {
        setState(currentState + counterLimit);
    }

    //styles
    const divStyle = {
        color: "red"
    }

    return (
        <div style={divStyle}>
            <button onClick={incrementCount}>+{counterLimit}</button>
            <div>{currentState}</div>
        </div>
    );
}

export default Counter;