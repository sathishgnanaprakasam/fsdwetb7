import { useState } from "react";

const App = () => {

    let [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    }

    // runs on every component render
    console.log(count);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

export default App;