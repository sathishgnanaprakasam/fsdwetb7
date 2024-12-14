import { useReducer } from "react";

const intialState = {
    count: 0,
    history: []
};

const reducer = (state, action) => {

    switch (action.type) {
        case 'PLUS':
            return {
                count: state.count + 1,
                history: [...state.history, 'PLUS']
            }
        case 'MINUS':
            return {
                count: state.count - 1,
                history: [...state.history, 'MINUS']
            }
        case 'RESET':
            return {
                count: 0,
                history: [...state.history, 'RESET']
            }
        default:
            return state;
    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, intialState);

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: "PLUS" })}>Increase</button>
            <button onClick={() => dispatch({ type: "MINUS" })}>Decrease</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>

            <h2>History</h2>
            {
                state.history.join(', ')
            }
        </div>
    )
}

export default App;