import ChildComponent from "./components/ChildComponent";

const App = () => {
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent>
                <p>This UI renders inside the child component!</p>
            </ChildComponent>
        </div>
    )
}

export default App;