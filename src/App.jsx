import { useCallback, useState } from "react"

const App = () => {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleLike = useCallback(() => {
        setLikes(likes + 1);
    }, [likes]);

    const handleDislike = useCallback(() => {
        setDislikes(dislikes + 1);
    }, [dislikes]);


    return (
        <div>
            <h1>likes: {likes}</h1>
            <button onClick={handleLike}>Like</button>
            <h1>dislikes: {dislikes}</h1>
            <button onClick={handleDislike}>Dislike</button>
        </div>
    )
}

export default App