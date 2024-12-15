const Like = ({ likes, handleLike }) => {

    console.log('Rendering Like...');

    return (
        <>
            <h1>likes: {likes}</h1>
            <button onClick={handleLike}>Like</button>
        </>
    )
}

export default Like;