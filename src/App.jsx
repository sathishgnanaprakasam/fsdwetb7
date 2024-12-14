import { useEffect, useState } from "react";

const App = () => {

    let count = 0;
    const [updated, setUpdated] = useState(0);

    const handleIncrease = () => {
        count++;
        setUpdated(updated + 1);
    }

    useEffect(() => {
        console.log(count);
    }, [updated]);

    return (
        <div>
            <h1>Count: {updated}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

export default App;