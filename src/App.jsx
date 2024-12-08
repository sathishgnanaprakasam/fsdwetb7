import { useState } from "react";

const App = () => {

    const [reactions, setReactions] = useState({
        likes: 0,
        dislikes: 0
    });

    return (
        <div>
            <button onClick={() => setReactions({ ...reactions, likes: reactions.likes + 1 })}><span className="material-symbols-outlined">
                thumb_up
            </span> {reactions.likes} </button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => setReactions({ ...reactions, dislikes: reactions.dislikes + 1 })}><span className="material-symbols-outlined">
                thumb_down
            </span> {reactions.dislikes} </button>
        </div>
    )
}

export default App;