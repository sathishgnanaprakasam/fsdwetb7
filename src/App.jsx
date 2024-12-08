import { useState } from "react";

const App = () => {

    let [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    }

    const handleDecrease = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(0);
    }

    // runs on every component render
    console.log(count);

    return (
        <div>
            <div>
                <button onClick={handleDecrease}>-</button> {count} <button onClick={handleIncrease}>+</button>
            </div>
            <br />
            <div>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default App;