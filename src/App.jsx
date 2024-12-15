import Like from "./components/Like";
import Dislike from "./components/Dislike";

const App = () => {

    console.log('Rendering App...');

    return (
        <div>
            <h1>Reactions: { }</h1>
            <Like />
            <Dislike />
        </div>
    )
}

export default App