import Like from "./components/Like";
import Dislike from "./components/Dislike";

const App = () => {

    console.log('Rendering App...');

    return (
        <div>
            <Like />
            <Dislike />
        </div>
    )
}

export default App