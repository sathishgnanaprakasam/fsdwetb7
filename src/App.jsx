import { useEffect, useState } from "react";

const App = () => {

    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    useEffect(() => {
        console.log('This will run only once when the component renders for the first time');
    }, []);

    useEffect(() => {
        console.log('This will run when the component renders and for any state changes and all the re-renders');
    });

    useEffect(() => {
        console.log('This will run when the component renders and on every state change of "like" state');
    }, [like]);

    return (
        <div>
            <button onClick={() => setLike(like + 1)}>
                <span className="material-symbols-outlined">
                    thumb_up
                </span> {like}
            </button>
            <button onClick={() => setDislike(dislike + 1)}>
                <span className="material-symbols-outlined">
                    thumb_down
                </span> {dislike}
            </button>
        </div>
    )
}

export default App;