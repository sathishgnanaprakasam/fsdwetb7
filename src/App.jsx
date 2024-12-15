import { useCallback, useState } from "react"

const App = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default App