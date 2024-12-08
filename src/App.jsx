import { useState } from "react";

const App = () => {

    const [reactions, setReactions] = useState({
        likes: 0,
        dislikes: 0
    });

    const [log, setLog] = useState([]);

    console.log(log);

    const handleLike = () => {
        setReactions({
            ...reactions,
            likes: reactions.likes + 1
        });
        setLog([...log, 'Like']);
    }

    const handleDislike = () => {
        setReactions({
            ...reactions,
            dislikes: reactions.dislikes + 1
        });
        setLog([...log, 'Dislike']);
    }

    return (
        <div>
            <button onClick={handleLike}><span className="material-symbols-outlined">
                thumb_up
            </span> {reactions.likes} </button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={handleDislike}><span className="material-symbols-outlined">
                thumb_down
            </span> {reactions.dislikes} </button>
            <br /><br />
            <div>
                <ul>
                    {
                        log.map((reaction, index) => <li key={index}>{reaction}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default App;