import { useRef } from "react";

const App = () => {

    const inputRef = useRef(null);

    const handleSubmit = () => {
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <input
                type="text"
                ref={inputRef}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default App;