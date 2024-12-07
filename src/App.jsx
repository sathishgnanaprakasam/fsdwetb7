import Header from "./components/Header";

const App = () => {
    const time = new Date().toLocaleTimeString();

    return (
        <div>
            <Header
                time={time}
            />
        </div>
    )
}

export default App;