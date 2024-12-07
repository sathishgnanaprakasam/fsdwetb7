import Header from "./components/Header";

const App = () => {

    const getTime = (time) => {
        console.log(time);
    }

    return (
        <div>
            <Header
                getTime={getTime}
            />
        </div>
    )
}

export default App;