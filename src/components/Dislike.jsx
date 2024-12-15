import { useCallback, useState } from "react";

const Dislike = ({ onDislike }) => {

    const [dislikes, setDislikes] = useState(0);

    const handleDislike = () => {
        setDislikes(dislikes + 1);
        onDislike(dislikes + 1);
    }

    console.log('Rendering Dislike...');

    return (
        <>
            <h1>dislikes: {dislikes}</h1>
            <button onClick={handleDislike}>Dislike</button>
        </>
    )
}

export default Dislike;