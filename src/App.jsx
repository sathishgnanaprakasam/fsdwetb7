import { useRef, useState } from "react";

const App = () => {

    const count = useRef(0);
    const [updated, setUpdated] = useState(0);

    const handleIncrement = () => {
        count.current++;
        console.log(count.current);
        setUpdated((prev) => prev + 1);
    }

    return (
        <div>
            <h1>Count: {count.current}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default App;