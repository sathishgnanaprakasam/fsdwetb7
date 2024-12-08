import { useState } from "react";

const App = () => {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    return (
        <div>
            <button onClick={() => setLikes(likes + 1)}><span className="material-symbols-outlined">
                thumb_up
            </span> {likes} </button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => setDislikes(dislikes + 1)}><span className="material-symbols-outlined">
                thumb_down
            </span> {dislikes} </button>
        </div>
    )
}

export default App;