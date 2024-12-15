const Dislike = ({ dislikes, handleDislike }) => {

    console.log('Rendering Dislike...');

    return (
        <>
            <h1>dislikes: {dislikes}</h1>
            <button onClick={handleDislike}>Dislike</button>
        </>
    )
}

export default Dislike;