import { useReducer, useState } from "react";

const intialState = {
    count: 0
};

const reducer = (state, action) => {

    if (action.type === 'PLUS') {
        return {
            count: state.count + 1
        }
    }

    return state;
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, intialState);

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: "PLUS" })}>Increase</button>
        </div>
    )
}

export default App;