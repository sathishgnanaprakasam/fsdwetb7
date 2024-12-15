import { useCallback, useState } from "react"
import Like from "./components/Like";
import Dislike from "./components/Dislike";

const App = () => {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleLike = useCallback(() => {
        setLikes(likes + 1);
    }, [likes]);

    const handleDislike = useCallback(() => {
        setDislikes(dislikes + 1);
    }, [dislikes]);

    console.log('Rendering App...');

    return (
        <div>
            <Like
                likes={likes}
                handleLike={handleLike}
            />
            <Dislike
                dislikes={dislikes}
                handleDislike={handleDislike}
            />
        </div>
    )
}

export default App