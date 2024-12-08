import { useEffect, useState } from "react";

const App = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setPosts(data);
            })
            .catch((error) => {
                console.log('Error fetching posts:', error);
            })
    }, []);

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return (
        <div>
            <h1>Posts</h1>
        </div>
    )
}

export default App;