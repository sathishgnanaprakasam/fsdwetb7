import { useCallback, useState } from "react";

const Like = ({ onLike }) => {

    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1); // asynchronous
        onLike(likes + 1);
    };

    console.log('Rendering Like...');

    return (
        <>
            <h1>likes: {likes}</h1>
            <button onClick={handleLike}>Like</button>
        </>
    )
}

export default Like;