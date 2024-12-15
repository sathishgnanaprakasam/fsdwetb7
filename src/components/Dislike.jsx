import { useCallback, useState } from "react";

const Dislike = () => {

    const [dislikes, setDislikes] = useState(0);

    const handleDislike = useCallback(() => {
        setDislikes(dislikes + 1);
    }, [dislikes]);

    console.log('Rendering Dislike...');

    return (
        <>
            <h1>dislikes: {dislikes}</h1>
            <button onClick={handleDislike}>Dislike</button>
        </>
    )
}

export default Dislike;