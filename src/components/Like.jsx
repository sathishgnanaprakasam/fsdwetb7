import { useCallback, useState } from "react";

const Like = () => {

    const [likes, setLikes] = useState(0);

    const handleLike = useCallback(() => {
        setLikes(likes + 1);
    }, [likes]);

    console.log('Rendering Like...');

    return (
        <>
            <h1>likes: {likes}</h1>
            <button onClick={handleLike}>Like</button>
        </>
    )
}

export default Like;